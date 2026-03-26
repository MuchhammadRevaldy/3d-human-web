import { useEffect, useRef } from 'react'

export default function ParticleBg() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let w, h

    const particles = []
    const COUNT = 55

    function resize() {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    function createParticle() {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 4 + 1.5,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.18 - 0.05,
        alpha: Math.random() * 0.35 + 0.08,
        hue: Math.random() * 60 + 200,
      }
    }

    resize()
    for (let i = 0; i < COUNT; i++) particles.push(createParticle())

    window.addEventListener('resize', resize)

    function draw() {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.5)
        gradient.addColorStop(0, `hsla(${p.hue},70%,75%,${p.alpha})`)
        gradient.addColorStop(1, `hsla(${p.hue},70%,75%,0)`)
        ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        p.x += p.vx
        p.y += p.vy

        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10
      }
      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="particle-bg">
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', opacity: 0.7 }} />
    </div>
  )
}

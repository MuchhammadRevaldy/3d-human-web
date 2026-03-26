import { useEffect, useRef } from 'react'

export default function CrosshairCursor() {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onMove = (e) => {
      el.style.setProperty('--mouse-x', `${e.clientX}px`)
      el.style.setProperty('--mouse-y', `${e.clientY}px`)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div ref={containerRef} className="crosshair-root" aria-hidden="true">
      <div className="crosshair-h" />
      <div className="crosshair-v" />
    </div>
  )
}

import { useMemo } from 'react'

const BUBBLES = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  size: Math.random() * 35 + 10,
  left: Math.random() * 100,
  delay: Math.random() * 12,
  duration: Math.random() * 14 + 12,
  driftX: (Math.random() - 0.5) * 120,
  opacity: Math.random() * 0.35 + 0.12,
}))

export default function BubbleBg({ showBubbles = true }) {
  const bubbles = useMemo(() => BUBBLES, [])

  return (
    <div className="bubble-bg-root" aria-hidden="true">
      <div className="smoke-blob blob-1" />
      <div className="smoke-blob blob-2" />
      <div className="smoke-blob blob-3" />
      <div className="smoke-blob blob-4" />

      {showBubbles && bubbles.map((b) => (
        <div
          key={b.id}
          className="floating-bubble"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            bottom: `-${b.size}px`,
            opacity: b.opacity,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            '--drift-x': `${b.driftX}px`,
          }}
        />
      ))}
    </div>
  )
}

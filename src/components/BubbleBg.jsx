import { useMemo } from 'react'

// Floating bubble data — generated once on mount
const BUBBLES = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  size: Math.random() * 35 + 10,           // 10px – 45px
  left: Math.random() * 100,               // % horizontal start
  delay: Math.random() * 12,               // seconds delay
  duration: Math.random() * 14 + 12,      // 12s – 26s float
  driftX: (Math.random() - 0.5) * 120,    // horizontal sway in px
  opacity: Math.random() * 0.35 + 0.12,   // 0.12 – 0.47
}))

export default function BubbleBg({ showBubbles = true }) {
  const bubbles = useMemo(() => BUBBLES, [])

  return (
    <div className="bubble-bg-root" aria-hidden="true">
      {/* ── Smoky aurora blobs (blurred, behind canvas) ── */}
      <div className="smoke-blob blob-1" />
      <div className="smoke-blob blob-2" />
      <div className="smoke-blob blob-3" />
      <div className="smoke-blob blob-4" />

      {/* ── Floating mat20.png bubbles (disabled when zooming to save FPS) ── */}
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

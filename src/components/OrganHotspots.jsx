import { Html } from '@react-three/drei'

export default function OrganHotspots({ organs, activeOrgan, onSelect, onHover, onSubSelect, activeSubHotspotId }) {
  if (activeSubHotspotId) return null
  const activeData = organs.find(o => o.id === activeOrgan)

  return (
    <group>
      {!activeOrgan && organs.map((organ) => {
        return (
          <Html
            key={organ.id}
            position={organ.position}
            center
            zIndexRange={[100, 0]}
          >
            <div
              className={`hotspot-wrapper`}
              onClick={(e) => {
                e.stopPropagation()
                onSelect(organ.id)
              }}
              onPointerEnter={() => onHover(organ.id)}
              onPointerLeave={() => onHover(null)}
            >
              <div className="hotspot-ring-outer" />
              <div className="hotspot-ring-inner">
                <div className="hotspot-dot" />
              </div>
            </div>
          </Html>
        )
      })}

      {activeOrgan && activeData?.subHotspots && activeData.subHotspots.map((sub) => (
        <Html
          key={sub.id}
          position={sub.position}
          center
          zIndexRange={[100, 0]}
        >
          <div className="sub-hotspot-pill" onClick={(e) => { e.stopPropagation(); onSubSelect(sub.id); }}>
             <div className="sub-hotspot-ring">
               <div className="dot" />
             </div>
             <div className="sub-hotspot-label">{sub.label}</div>
             <div className="sub-hotspot-arrow">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
             </div>
          </div>
        </Html>
      ))}
    </group>
  )
}

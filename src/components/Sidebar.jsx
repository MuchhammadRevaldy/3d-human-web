import { useState } from 'react';

export default function Sidebar({ organs, activeOrgan, onSelect, onHover }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`sidebar ${activeOrgan ? 'hidden' : ''} ${isExpanded ? 'expanded' : ''}`}>
      <div className="sidebar-header" onClick={() => setIsExpanded(!isExpanded)}>
        <span className="sidebar-title">EXPLORE CATEGORIES</span>
        <button className="mobile-toggle-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0077ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points={isExpanded ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
          </svg>
        </button>
      </div>
      <div className="sidebar-content">
        {organs.map((organ) => {
          const isActive = activeOrgan === organ.id
          return (
            <button
              key={organ.id}
              className={`organ-btn ${isActive ? 'active' : ''}`}
              onClick={() => {
                onSelect(isActive ? null : organ.id);
                if (!isActive) setIsExpanded(false);
              }}
              onMouseEnter={() => onHover(organ.id)}
              onMouseLeave={() => onHover(null)}
            >
              <div className="organ-btn-content">
                <span className="organ-icon">{organ.icon}</span>
                <span>{organ.label}</span>
              </div>
              <span className="organ-arrow">›</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

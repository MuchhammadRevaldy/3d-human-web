import React from 'react';

export default function MobileInlineVideo({ activeVideo }) {
  if (!activeVideo) return null;
  return (
    <div className="mobile-inline-video-wrapper mobile-only" style={{
        marginTop: '0px', marginBottom: '32px',
        width: '100%', aspectRatio: '1', borderRadius: '24px', overflow: 'hidden', position: 'relative',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }}>
      <video src={activeVideo.src} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
}

import React from 'react';

export default function AutoimmunityOverviewPanel({ activeVideo }) {
  return (
    <>
      <h1 className="panel-title">
        Comprehensive Autoimmune Disease Screen — 30+ Tissue Antibodies
      </h1>

      <div className="panel-body-text">
        <p>The Autoimmune Zoomer aids in detecting autoantibodies and antigens associated with systemic autoimmunity, including thyroid disorders, rheumatoid arthritis, and type 1 diabetes.</p>

        <p>Autoimmune diseases often simmer for years before diagnosis, causing preventable tissue damage.</p>

        <p>This comprehensive panel detects autoimmune activity in its earliest stages when interventions are most effective.</p>

        <p>By identifying specific antibody patterns, it helps differentiate between various autoimmune conditions and guides targeted immune modulation strategies.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Symptoms to Consider This Test</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>Joint pain, stiffness, or swelling</li>
          <li>Chronic fatigue or muscle weakness</li>
          <li>Skin rashes or photosensitivity</li>
          <li>Unexplained fever or inflammation</li>
          <li>Multiple seemingly unrelated symptoms</li>
          <li>Family history of autoimmune disease</li>
        </ul>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Key Highlight Markers</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>Autoantibodies and antigens associated with systemic autoimmunity, thyroid disorders, rheumatoid arthritis, and type 1 diabetes</li>
          <li>Thyroid antibodies: TPO, thyroglobulin, TSH receptor</li>
          <li>Systemic markers: ANA, ENA, anti-dsDNA</li>
          <li>Tissue-specific antibodies: Myelin, insulin, intrinsic factor</li>
          <li>Inflammatory markers correlating with autoimmune activity</li>
          <li>Early detection markers appearing before clinical symptoms</li>
        </ul>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Main Product Highlights</h3>
        </div>
        <ul className="protocol-bullets">
          <li>Utilizing bio-chip immunofluorescence and ELISA technology, this panel provides early detection and precise monitoring</li>
          <li>Broad spectrum of autoantibodies detects autoantibodies and antigens associated with systemic autoimmunity</li>
          <li>More comprehensive than standard ANA testing</li>
          <li>Identifies autoimmune activity years before clinical diagnosis</li>
          <li>Monitors disease activity and treatment response</li>
        </ul>

        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

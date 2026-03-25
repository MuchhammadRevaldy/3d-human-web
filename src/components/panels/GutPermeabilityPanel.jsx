import React from 'react';

export default function GutPermeabilityPanel() {
  return (
    <>
      <h1 className="panel-title">
        The Intestinal Permeability<br/>& Inflammation Pattern
      </h1>
      
      <div className="panel-body-text">
        <p style={{fontSize: '18px', color: '#5b9cf6', fontWeight: 600, marginTop: '-20px', marginBottom: '32px'}}>
          When Barrier Function Breaks Down
        </p>

        <div className="section-header">
          <span className="section-icon">∴</span> 
          <h3>The Clinical Picture</h3>
        </div>
        
        <p>Sarah, a 42-year-old professional, presented with chronic fatigue, brain fog, and multiple food sensitivities.</p>
        
        <p>Her Gut Zoomer revealed a clear pattern of compromised intestinal barrier function.</p>
        
        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Key Biomarkers Working Together</h3>
        </div>

        <div className="biomarkers-list">
          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Akkermansia muciniphila</div>
              <div className="bm-desc">DEGRADING COMMENSAL</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> CRITICAL MUCUS
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Fecal Zonulin</div>
              <div className="bm-desc">ELEVATED INTESTINAL PERMEABILITY MARKER</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 245 ng/m
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Calprotectin</div>
              <div className="bm-desc">INTESTINAL INFLAMMATION</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 185 mcg/g
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Lysozyme</div>
              <div className="bm-desc">ANTIMICROBIAL PEPTIDE INDICATING EPITHELIAL STRESS</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> ELEVATED
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Low anti-inflammatory SCFA</div>
              <div className="bm-desc">LOW ANTI-INFLAMMATORY SCFA</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 8%
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Deamidated Gliadin Peptide Antibody</div>
              <div className="bm-desc">GLUTEN SENSITIVITY</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> POSITIVE
            </div>
          </div>
        </div>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>The Clinical Insight</h3>
        </div>

        <p>This combination reveals a classic leaky gut pattern. The depleted Akkermansia muciniphila means reduced mucus layer protection.</p>
        <p>Elevated zonulin confirms increased intestinal permeability, while high calprotectin indicates active inflammation. The low butyrate (a crucial fuel for colonocytes) further compromises barrier repair.</p>
        <p>The positive gliadin antibodies suggest gluten triggering additional barrier disruption.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Targeted Supplementation Strategy</h3>
        </div>

        <div className="protocols-list">
          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Lactobacillus rhamnosus GG</span>
              <span className="protocol-dosage">10 billion CFU/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Clinically proven to improve intestinal permeability by strengthening tight junctions</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">E. coli Nissle 1917</span>
              <span className="protocol-dosage">10 billion CFU/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Upregulates tight junction proteins, directly addressing permeability</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Inulin</span>
              <span className="protocol-dosage">10g/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Selectively feeds Akkermansia and increases butyrate production</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">L-Glutamine</span>
              <span className="protocol-dosage">5g twice daily</span>
            </div>
            <ul className="protocol-bullets">
              <li>Primary fuel for enterocytes, supports barrier repair</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Quercetin</span>
              <span className="protocol-dosage">500mg twice daily</span>
            </div>
            <ul className="protocol-bullets">
              <li>Reduces zonulin release and inflammation</li>
            </ul>
          </div>
        </div>
        
        {/* padding at the bottom */}
        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

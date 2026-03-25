import React from 'react';

export default function OxidativeStressPanel() {
  return (
    <>
      <h1 className="panel-title">
        The Chronic Fatigue &<br/>Multi-System Oxidative Damage Pattern
      </h1>
      
      <div className="panel-body-text">
        <div className="section-header">
          <span className="section-icon">∴</span> 
          <h3>The Clinical Picture</h3>
        </div>
        
        <p>Robert, a 48-year-old IT director, experienced progressive fatigue over 18 months that no longer improved with rest.</p>
        
        <p>He had difficulty concentrating at work, muscle aches after minimal exercise, and felt “aged beyond his years” despite normal routine blood tests:</p>
        
        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Key Biomarkers Working Together</h3>
        </div>

        <div className="biomarkers-list">
          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">8-Hydroxy-2'-deoxyguanosine (≤4 ug/g)</div>
              <div className="bm-desc">OXIDATIVE INJURY</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 5.44
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Protein Dityrosine (≤5 ug/g)</div>
              <div className="bm-desc">INCREASED PROTEIN CROSS-LINKING</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 5.45
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Lipid Peroxidation Markers (≤163.53 ug/g)</div>
              <div className="bm-desc">MEMBRANE DAMAGE INDICATORS</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 146.71
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Nitrotyrosine (≤285.69 ug/g)</div>
              <div className="bm-desc">PROTEIN NITRATION</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 318.62
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Nitrative Stress Biomarkers (≤107.47 ug/g)</div>
              <div className="bm-desc">INDICATORS OF PROTEIN DAMAGE AND DISRUPTED SIGNALING</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 127.88
            </div>
          </div>
        </div>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>The Clinical Insight</h3>
        </div>

        <p>This pattern reveals widespread oxidative and nitrative damage affecting multiple cellular systems.</p>
        <p>Elevated 8-OHdG indicates severe oxidative injury to genetic material, potentially affecting cellular repair and energy production. Increased protein dityrosine formation shows extensive protein cross-linking and enzyme dysfunction.</p>
        <p>Lipid peroxidation damages cellular membranes, impairing energy transport and cellular communication.</p>
        <p>Elevated nitrotyrosine and nitrative stress markers reveal protein nitration processes that create dysfunctional enzymes and disrupt normal cellular signaling pathways.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Neuroprotective Support Protocol</h3>
        </div>

        <div className="protocols-list">
          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Creatine</span>
              <span className="protocol-dosage">3 g/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Creatine supplements decrease 8-Hydroxy-2'-deoxyguanosine by enhancing cellular energy production, reducing oxidative stress, and indirectly protecting DNA from oxidative damage, as lower oxidative stress levels correlate with reduced 8-OHdG formation.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">N-acetyl cysteine (NAC)</span>
              <span className="protocol-dosage">250 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>NAC is known for its antioxidant properties and its role in supporting glutathione production, a crucial antioxidant enzyme in the body.</li>
              <li>While there is limited direct evidence linking NAC supplementation to the reduction of dityrosine, dityrosine formation is associated with oxidative stress and protein damage. NAC may indirectly help mitigate dityrosine formation by reducing oxidative stress.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Resveratrol</span>
              <span className="protocol-dosage">500 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Resveratrol supplements decrease nitrotyrosine by inhibiting nitric oxide synthase (NOS) activity, reducing excessive nitric oxide production, and consequently decreasing the formation of nitrotyrosine, a marker of oxidative and nitrosative stress.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Curcumin</span>
              <span className="protocol-dosage">250 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Curcumin inhibits the activation of NF-κB, which in turn suppresses the expression of enzymes involved in lipid peroxidation.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Selenium</span>
              <span className="protocol-dosage">55 mcg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Selenium supplements decrease 8-Hydroxyguanine by supporting the activity of selenoproteins, such as glutathione peroxidase, which reduce oxidative stress and limit DNA damage, including 8-Hydroxyguanine formation.</li>
            </ul>
          </div>
        </div>
        
        {/* padding at the bottom */}
        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

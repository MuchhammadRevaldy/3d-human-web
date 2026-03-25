import React from 'react';

export default function CardioMetabolicPanel() {
  return (
    <>
      <h1 className="panel-title">
        The Metabolic Syndrome<br/>& Atherogenic Dyslipidemia Pattern
      </h1>
      
      <div className="panel-body-text">
        <div className="section-header">
          <span className="section-icon">∴</span> 
          <h3>The Clinical Picture</h3>
        </div>
        
        <p>Thomas, a 52-year-old executive, presented with central obesity, hypertension, and family history of early cardiovascular disease.</p>
        <p>Despite “normal” total cholesterol, his advanced lipid testing revealed atherogenic dyslipidemia with oxidative stress:</p>
        
        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Key Biomarkers Working Together</h3>
        </div>

        <div className="biomarkers-list">
          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Triglycerides (&lt; 149 mg/dL)</div>
              <div className="bm-desc">EXCESS FAT STORAGE</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 176
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">HDL-C (≥ 66 mg/dL)</div>
              <div className="bm-desc">IMPAIRED REVERSE CHOLESTEROL TRANSPORT</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 57
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">LDL (≤ 99 mg/dL)</div>
              <div className="bm-desc">POOR CHOLESTEROL PROCESSING</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 119
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Small Dense LDL (≤ 50 mg/dL)</div>
              <div className="bm-desc">HIGHLY ATHEROGENIC PARTICLE</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 65
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Lipoprotein(a) [Lp(a)] (≤ 29 mg/dL)</div>
              <div className="bm-desc">PROINFLAMMATORY AND PROTHROMBOTIC PARTICLE</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 34
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Oxidized LDL (≤ 99.1 U/L)</div>
              <div className="bm-desc">HIGHLY ATHEROGENIC PARTICLE</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 108.3
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">ApoB/ApoA1 ratio (≤ 0.59)</div>
              <div className="bm-desc">HIGHLY ATHEROGENIC RATIO</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 0.78
            </div>
          </div>
        </div>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>The Clinical Insight</h3>
        </div>

        <p>This pattern reveals insulin resistance driving impaired lipoprotein clearance.</p>
        <p>Elevated triglycerides create triglyceride-enriched HDL and LDL particles that become small, dense, and oxidation-prone.</p>
        <p>High Lp(a) adds genetic cardiovascular risk, while elevated oxLDL indicates active atherogenesis.</p>
        <p>The low HDL reflects impaired reverse cholesterol transport and antioxidant capacity.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Cardiovascular Support Protocol</h3>
        </div>

        <div className="protocols-list">
          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Berberine HCl</span>
              <span className="protocol-dosage">1500 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Berberine increases HDL levels by upregulating the expression of genes involved in lipid metabolism, such as apolipoprotein A-I, a key component of HDL particles.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Red Yeast Rice (Monacolin K)</span>
              <span className="protocol-dosage">200 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Red yeast rice supplementation inhibits HMG-CoA reductase, reducing cholesterol synthesis in the liver. This decreases the production of low-density lipoproteins (LDLs).</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Vitamin B3 (Niacin)</span>
              <span className="protocol-dosage">16 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Vitamin B3 supplementation reduces lipoprotein(a) [Lp(a)] levels primarily by enhancing hepatic lipoprotein metabolism. It increases the activity of lipoprotein lipase, which accelerates the catabolism of Lp(a) particles.</li>
              <li>Additionally, niacin decreases the production of VLDL by downregulating its synthesis in the liver.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Omega-3 EPA/DHA</span>
              <span className="protocol-dosage">1 g/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Omega-3 fatty acids reduce triglycerides by suppressing hepatic VLDL production and promoting fatty acid oxidation. By inhibiting NF-κB signaling, they further mitigate inflammation through lowering pro-inflammatory cytokine levels.</li>
              <li>In addition, they prevent LDL oxidation by stabilizing lipid membranes, collectively reducing the risk of atherogenesis.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">DHA</span>
              <span className="protocol-dosage">1 g/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>DHA supplementation decreases sdLDL levels by promoting increased lipoprotein lipase activity, which enhances the clearance of triglyceride-rich lipoproteins. This reduces the conversion of these lipoproteins into sdLDL.</li>
              <li>Additionally, DHA improves the lipid profile by increasing HDL cholesterol, which aids in reducing sdLDL levels.</li>
            </ul>
          </div>
        </div>
        
        {/* padding at the bottom */}
        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

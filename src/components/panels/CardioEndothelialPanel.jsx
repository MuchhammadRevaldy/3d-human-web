import React from 'react';

export default function CardioEndothelialPanel() {
  return (
    <>
      <h1 className="panel-title">
        The Endothelial Dysfunction<br/>& Cardiovascular Risk Pattern
      </h1>
      
      <div className="panel-body-text">
        <p style={{fontSize: '18px', color: '#5b9cf6', fontWeight: 600, marginTop: '-20px', marginBottom: '32px'}}>
          Beyond Standard Lipid Panels
        </p>

        <div className="section-header">
          <span className="section-icon">∴</span> 
          <h3>The Clinical Picture</h3>
        </div>
        
        <p>Michael, a 45-year-old financial advisor, presented with elevated blood pressure readings during routine checkups and occasional chest tightness during strenuous exercise.</p>
        <p>His family history included early cardiovascular disease, and recent stress tests showed borderline abnormal results with reduced exercise tolerance.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Key Biomarkers Working Together</h3>
        </div>

        <div className="biomarkers-list">
          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">ADMA (0 - 105 ng/mL)</div>
              <div className="bm-desc">ADMA</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 120.8
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">SDMA (0 - 159 ng/mL)</div>
              <div className="bm-desc">SDMA</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 211
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">L-Arginine (81.6 - 249.0 nmol/mL)</div>
              <div className="bm-desc">L-ARGININE</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 56.9
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Homoarginine (66 – 265 ng/mL)</div>
              <div className="bm-desc">HOMOARGININE</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 34
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Arginine/ADMA Ratio (&gt;90)</div>
              <div className="bm-desc">ARGININE/ADMA RATIO</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 0.47
            </div>
          </div>
        </div>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>The Clinical Insight</h3>
        </div>

        <p>This pattern reveals significant endothelial dysfunction with elevated cardiovascular risk.</p>
        <p>Markedly elevated ADMA levels indicate severe competitive inhibition of nitric oxide synthase, while mildly elevated SDMA suggests additional impairment in arginine transport and utilization.</p>
        <p>The combination of reduced L-arginine availability and significantly low homoarginine levels further compromises cardiovascular protective mechanisms.</p>
        <p>The critically low arginine/ADMA ratio strongly predicts increased risk for atherothrombotic events and suggests the need for aggressive cardiovascular risk reduction strategies.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Cardiovascular Support Protocol</h3>
        </div>

        <div className="protocols-list">
          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">L-Arginine</span>
              <span className="protocol-dosage">2000 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>L-Arginine serves as the substrate for nitric oxide synthase, competing with ADMA for enzyme binding sites.</li>
              <li>Supplementation increases the arginine/ADMA ratio, potentially restoring endothelial nitric oxide production and improving flow-mediated vasodilation.</li>
              <li>This moderate dose helps overcome competitive inhibition by methylarginines while maintaining safety.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">L-Citrulline</span>
              <span className="protocol-dosage">1000 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>L-Citrulline bypasses potential arginine transport limitations and is converted to arginine in the kidneys through the citrulline-arginine cycle.</li>
              <li>This pathway provides a more sustained increase in plasma arginine levels compared to direct arginine supplementation, supporting endothelial function and nitric oxide production.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Folic Acid</span>
              <span className="protocol-dosage">400 mcg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Folic acid supports the activity of dimethylarginine dimethylaminohydrolase (DDAH), the enzyme responsible for ADMA degradation.</li>
              <li>Adequate folate status helps maintain optimal ADMA clearance and supports endothelial nitric oxide synthase coupling, preventing the enzyme from producing superoxide instead of nitric oxide.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Omega-3 Fatty acids (EPA/DHA)</span>
              <span className="protocol-dosage">1500 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>EPA and DHA reduce inflammatory cytokines that can upregulate ADMA-producing enzymes like protein arginine methyltransferases (PRMTs).</li>
              <li>They also support endothelial function through membrane stabilization and enhanced nitric oxide bioavailability, complementing the arginine-nitric oxide pathway.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Coenzyme Q10</span>
              <span className="protocol-dosage">100 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>CoQ10 acts as a cofactor for endothelial nitric oxide synthase and helps prevent NOS uncoupling, a condition where the enzyme produces superoxide instead of nitric oxide.</li>
              <li>It also supports mitochondrial function in endothelial cells and may help reduce oxidative stress that can increase ADMA levels and impair cardiovascular function.</li>
            </ul>
          </div>
        </div>
        
        {/* padding at the bottom */}
        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

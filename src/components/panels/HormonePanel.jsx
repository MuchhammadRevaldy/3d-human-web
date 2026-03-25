import React from 'react';

export default function HormonePanel() {
  return (
    <>
      <h1 className="panel-title">
        The Postmenopausal Bone Loss<br/>& Hormone Deficiency Pattern
      </h1>
      
      <div className="panel-body-text">
        <div className="section-header">
          <span className="section-icon">∴</span> 
          <h3>The Clinical Picture</h3>
        </div>
        
        <p>Margaret, a 56-year-old teacher, experienced her last menstrual period 18 months ago and recently noticed height loss and back pain.</p>
        <p>Her recent DEXA scan showed early osteopenia, and she was concerned about her family history of hip fractures:</p>
        
        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Key Biomarkers Working Together</h3>
        </div>

        <div className="biomarkers-list">
          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Deoxypyridinoline (DPD) (2.6-8.7nmol/mmol)</div>
              <div className="bm-desc">EXCESSIVE COLLAGEN BREAKDOWN</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 12.60
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Pyridinoline (PYD) (20-40 nmol/mmol)</div>
              <div className="bm-desc">EXCESSIVE COLLAGEN BREAKDOWN</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 67
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Estradiol (0.18-0.81 mcg/g)</div>
              <div className="bm-desc">REDUCED OSTEOBLAST ACTIVITY & INCREASED RESORPTION</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 0.13
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Testosterone (0.78-3.11 mcg/g)</div>
              <div className="bm-desc">DECREASED BONE DENSITY</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 0.57
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Cortisol (Night) (3.2-9.2 mcg/g)</div>
              <div className="bm-desc">IMPAIRED OSTEOBLAST FUNC. & CALCIUM ABSORPTION</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 10.2
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">DHEA (6.77-42.11 mcg/g)</div>
              <div className="bm-desc">REDUCED ANABOLIC SUPPORT FOR FORMATION</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 5.44
            </div>
          </div>
        </div>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>The Clinical Insight</h3>
        </div>

        <p>This pattern reveals accelerated bone loss due to estrogen deficiency with multiple contributing factors.</p>
        <p>Elevated DPD and PYD indicate excessive collagen breakdown exceeding formation. Low estradiol removes osteoblast protective signaling and allows unopposed osteoclast activity. Decreased testosterone reduces periosteal bone formation. Elevated nighttime cortisol inhibits osteoblast function and calcium absorption.</p>
        <p>DHEA depletion removes anabolic bone support, while oxidative stress accelerates bone matrix degradation and impairs repair mechanisms.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Comprehensive Bone Protection Protocol</h3>
        </div>

        <div className="protocols-list">
          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Calcium</span>
              <span className="protocol-dosage">1500 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Calcium supplementation reduces bone resorption by inhibiting osteoclast activity, leading to decreased collagen breakdown.</li>
              <li>Calcium MCHC is a more bioavailable form of calcium and includes phosphorus, collagen, and other minerals and is a preferred version for better absorption.</li>
              <li>This supplementation lowers the release of deoxypyridinoline (DPD) into circulation. As a result, urinary DPD levels, a marker of bone degradation, decrease.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Phytoestrogens</span>
              <span className="protocol-dosage">50 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Phytoestrogens, by binding to estrogen receptors, mimic estrogenic effects and reduce bone resorption. This leads to decreased collagen breakdown, lowering urinary pyridinoline (PYD), a marker of bone degradation.</li>
              <li>Additionally, they modulate osteoclast activity, further reducing PYD levels.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Absorbable 3,3'-Diindolylmethane (DIM)</span>
              <span className="protocol-dosage">108 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Absorbable 3,3'-Diindolylmethane (DIM) supplement increases cortisol by modulating the aryl hydrocarbon receptor (AhR) pathway, which influences the adrenal gland's function. This modulation can lead to increased activity of enzymes involved in steroidogenesis, thereby elevating cortisol production.</li>
              <li>Additionally, DIM affects hormone metabolism and balance, contributing to higher cortisol.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Vitamin D</span>
              <span className="protocol-dosage">600 IU/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Vitamin D supplements increase testosterone by enhancing the expression of testosterone synthesis-related genes in the testes and improving calcium absorption, which is vital for testosterone production.</li>
              <li>Additionally, Vitamin D receptors in the Leydig cells of the testes facilitate the production of testosterone. This hormone synthesis boost is particularly notable in individuals with Vitamin D deficiency.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">DHEA</span>
              {/* No dosage provided in user input */}
            </div>
            <ul className="protocol-bullets">
              <li>DHEA supplements boost DHEA levels by directly increasing the availability of this hormone in the bloodstream.</li>
              <li>This supplemental DHEA is absorbed into the body and, once in circulation, contributes to higher overall DHEA concentrations.</li>
            </ul>
          </div>
        </div>
        
        {/* padding at the bottom */}
        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

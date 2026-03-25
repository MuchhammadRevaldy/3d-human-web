import React from 'react';

export default function ToxinsPanel() {
  return (
    <>
      <h1 className="panel-title">
        The Total Tox Burden<br/>& Environmental Toxicity Pattern
      </h1>
      
      <div className="panel-body-text">
        <div className="section-header">
          <span className="section-icon">∴</span> 
          <h3>The Clinical Picture</h3>
        </div>

        <p>Emily, a 48-year-old teacher, presented with chronic fatigue, brain fog, frequent headaches, and unexplained skin rashes.</p>
        <p>Despite a "healthy" lifestyle, her history of living in an older home with potential mold exposure and using plastic containers raised concerns.</p>
        <p>Advanced toxin testing revealed elevated total tox burden with multiple exposures:</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Key Biomarkers Working Together</h3>
        </div>

        <div className="biomarkers-list">
          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Mercury (≤1.61 ug/g)</div>
              <div className="bm-desc">NEUROTOXIN AND OXIDATIVE STRESSOR</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 1.14
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Lead (≤1.16 ug/g)</div>
              <div className="bm-desc">NERVOUS SYSTEM DISRUPTOR</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 1.27
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Aflatoxin B1 (≤6.93 ng/g)</div>
              <div className="bm-desc">LIVER TOXIN IMPAIRING DETOX & INC. OXIDATIVE STRESS</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 5.98
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Bisphenol A (BPA) (≤5.09 ug/g)</div>
              <div className="bm-desc">ENDOCRINE DISRUPTOR</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 5.66
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Ochratoxin A (≤6.8 ng/g)</div>
              <div className="bm-desc">KIDNEY TOXIN IMPAIRING DETOX AND IMMUNE FUNCTION</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 6.9
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Glyphosate (≤7.6 ug/g)</div>
              <div className="bm-desc">DETOXIFICATION INHIBITOR AND METABOLIC DISRUPTOR</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 8.87
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Perfluoroalkyl Substances (PFAS) (≤2.205 ug/g)</div>
              <div className="bm-desc">ENDOCRINE DISRUPTOR</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 5.981
            </div>
          </div>
        </div>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>The Clinical Insight</h3>
        </div>

        <p>This pattern indicates chronic environmental exposure driving systemic inflammation and oxidative stress.</p>
        <p>Heavy metals like mercury and lead impair neurological function and energy production, while mycotoxins from mold disrupt liver and kidney detoxification. Environmental chemicals such as BPA and PFAS act as endocrine disruptors, exacerbating hormonal imbalances and immune dysfunction.</p>
        <p>The overall high tox burden overwhelms natural detox pathways, leading to bioaccumulation and increased risk of autoimmune conditions, chronic fatigue, and neurological issues.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Targeted Detoxification Optimization Protocol</h3>
        </div>

        <div className="protocols-list">
          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">N-Acetyl Cysteine (NAC)</span>
              <span className="protocol-dosage">600 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>NAC serves as a precursor to glutathione, enhancing the body's ability to bind and excrete heavy metals like mercury and lead through urinary pathways.</li>
              <li>It also reduces oxidative stress by replenishing antioxidant defenses against mycotoxins and environmental chemicals.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Milk Thistle (Silymarin)</span>
              <span className="protocol-dosage">150 mg twice daily</span>
            </div>
            <ul className="protocol-bullets">
              <li>Milk thistle supports liver detoxification by promoting phase I and II enzyme activity, which helps metabolize and eliminate mycotoxins and pesticides.</li>
              <li>It protects hepatocytes from oxidative damage caused by heavy metals and improves bile flow for toxin excretion.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Chlorella</span>
              <span className="protocol-dosage">1g/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Chlorella acts as a natural chelator, binding to heavy metals such as cadmium and lead in the gastrointestinal tract to prevent absorption and facilitate fecal elimination.</li>
              <li>It also supports detoxification of environmental toxins like PFAS by enhancing cellular repair and reducing inflammation.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Activated Charcoal</span>
              <span className="protocol-dosage">500 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Activated charcoal adsorbs mycotoxins and chemical pollutants in the digestive system, preventing their reabsorption and promoting excretion through the bowels</li>
              <li>It helps mitigate the effects of pesticides and plastics by trapping them before they enter systemic circulation.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Vitamin C</span>
              <span className="protocol-dosage">1g/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Vitamin C boosts antioxidant capacity to neutralize free radicals generated by heavy metals and environmental toxins, while supporting collagen synthesis for tissue repair.</li>
              <li>It enhances immune function and aids in the chelation of metals like lead, improving overall detox efficiency.</li>
            </ul>
          </div>
        </div>
        
        {/* padding at the bottom */}
        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

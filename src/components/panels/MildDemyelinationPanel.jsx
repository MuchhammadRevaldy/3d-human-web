import React from 'react';

export default function MildDemyelinationPanel() {
  return (
    <>
      <h1 className="panel-title">
        The Mild Demyelination<br/>& Cognitive Pattern
      </h1>
      
      <div className="panel-body-text">
        <div className="section-header">
          <span className="section-icon">∴</span> 
          <h3>The Clinical Picture</h3>
        </div>

        <p>Rachel, a 38-year-old nurse, noticed occasional difficulty finding words during patient handoffs and mild fatigue that worsened throughout her shifts.</p>
        <p>She experienced subtle coordination issues and brief episodes of visual blurring that resolved within minutes.</p>
        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Key Biomarkers Working Together</h3>
        </div>

        <div className="biomarkers-list">
          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Anti-Myelin Basic Protein (≤ 10)</div>
              <div className="bm-desc">DEMYELINATION AND OLIGODENDROCYTE STRESS</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 17.8
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Anti-GABA Receptor (≤ 10)</div>
              <div className="bm-desc">IMPAIRED INHIBITORY NEUROTRANSMISSION</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 5.9
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Anti-AChR (≤ 10)</div>
              <div className="bm-desc">IMPAIRED NEUROMUSCULAR SIGNALLING</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 8.3
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Anti-NMDA Receptor (≤ 10)</div>
              <div className="bm-desc">IMPAIRED EXCITATORY NEUROTRANSMISSION</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 6.5
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Anti-MOG (≤ 10)</div>
              <div className="bm-desc">IMPAIRED MYELIN INTEGRITY</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 7.1
            </div>
          </div>
        </div>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>The Clinical Insight</h3>
        </div>

        <p>This pattern indicates mild autoimmune activity directed toward neuronal structural components rather than synaptic receptors.</p>
        <p>The presence of anti-myelin basic protein antibodies reflects early demyelination and oligodendrocyte stress, consistent with intermittent conduction delays and subtle neurological symptoms.</p>
        <p>The absence of anti-GABA, anti-AChR, anti-NMDA, and anti-MOG antibodies suggests that receptor-mediated neurotransmission and broader myelin integrity remain largely preserved, pointing to an early stage of autoimmune involvement.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Neuroprotective Support Protocol</h3>
        </div>

        <div className="protocols-list">
          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Glutamine</span>
              <span className="protocol-dosage">500 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Glutamine supports GABA synthesis by providing a precursor for glutamate, which is then converted into GABA. Glutamine can be converted to glutamate through the action of the enzyme glutaminase.</li>
              <li>Following this, glutamate serves as the substrate for the enzyme glutamate decarboxylase (GAD), which catalyzes the conversion of glutamate to GABA.</li>
              <li>Therefore, oral intake of glutamine supports the synthesis of GABA and helps improve its levels.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Coenzyme Q10</span>
              <span className="protocol-dosage">100 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Studies have reported that Coenzyme Q10 supplementation reduced glutamate excitotoxicity and oxidative stress.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">PUFAs</span>
              <span className="protocol-dosage">950 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>PUFAs reduce inflammation by reducing the levels of proinflammatory cytokines and animal studies showed that PUFAs prevent demyelination and promotes remyelination and neuronal protection.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Vitamin D</span>
              <span className="protocol-dosage">600 IU/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Vitamin D influences neurodegenerative disease risk and progression, and a few studies have suggested its role in the development and function of the CNS.</li>
              <li>Studies have reported that adequate levels of vitamin D prevent demyelination and stimulate remyelination.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Magnesium</span>
              <span className="protocol-dosage">400 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Magnesium is crucial for the proper functioning of the nervous system.</li>
              <li>Magnesium is used to treat pain in various conditions. Studies have reported low levels of magnesium in patients with migraine.</li>
              <li>Magnesium prevents glutamate toxicity by blocking the glutamate receptors.</li>
            </ul>
          </div>
        </div>

        {/* padding at the bottom */}
        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

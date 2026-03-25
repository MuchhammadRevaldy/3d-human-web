import React from 'react';

export default function NeurotransmitterPanel() {
  return (
    <>
      <h1 className="panel-title">
        The Neurotransmitter Imbalance<br/>& Mood-Cognitive Pattern
      </h1>
      
      <div className="panel-body-text">
        <p style={{fontSize: '18px', color: '#5b9cf6', fontWeight: 600, marginTop: '-20px', marginBottom: '32px'}}>
          When Barrier Function Breaks Down
        </p>

        <div className="section-header">
          <span className="section-icon">∴</span> 
          <h3>The Clinical Picture</h3>
        </div>

        <p>Sarah, a 32-year-old marketing executive, began experiencing persistent low mood, difficulty concentrating during meetings, and disrupted sleep patterns.</p>
        <p>She noticed increased anxiety before presentations and found herself relying more heavily on caffeine to maintain focus throughout the day.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Key Biomarkers Working Together</h3>
        </div>

        <div className="biomarkers-list">
          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Serotonin (5-HIAA) (51.2-127.9 mcg/g)</div>
              <div className="bm-desc">DEGRADING COMMENSAL</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 46.5
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Morning Cortisol (6.2-19.4 μg/dL)</div>
              <div className="bm-desc">ELEVATED INTESTINAL PERMEABILITY MARKER</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> ELEVATED
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Dopamine (125.2-254.7 mcg/g)</div>
              <div className="bm-desc">INTESTINAL INFLAMMATION</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 119.2
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Homovanillic Acid (HVA) (3535 - 8455 mg/24hr)</div>
              <div className="bm-desc">GLUTEN SENSITIVITY</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 3178
            </div>
          </div>
        </div>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>The Clinical Insight</h3>
        </div>

        <p>This pattern reveals a complex neurotransmitter network dysfunction affecting mood regulation, stress response, and cognitive performance.</p>
        <p>Significantly low serotonin metabolites indicate compromised mood stability and sleep regulation, while markedly elevated cortisol suggests chronic stress activation disrupting normal neurotransmitter synthesis.</p>
        <p>Mildly reduced GABA activity contributes to heightened anxiety and difficulty with relaxation, while dopamine dysfunction (evidenced by low dopamine and significantly reduced HVA) affects motivation and reward processing.</p>
        <p>This interconnected imbalance creates a cycle where stress depletes neurotransmitters, leading to further mood and cognitive symptoms.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Neurotransmitter Balance Support Protocol</h3>
        </div>

        <div className="protocols-list">
          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">L-Tryptophan</span>
              <span className="protocol-dosage">500 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>L-Tryptophan serves as the precursor to serotonin synthesis.</li>
              <li>It crosses the blood-brain barrier and is converted to 5-hydroxytryptophan (5-HTP) by tryptophan hydroxylase, then to serotonin by aromatic L-amino acid decarboxylase.</li>
              <li>Adequate tryptophan availability supports mood stability, sleep quality, and emotional regulation.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">GABA</span>
              <span className="protocol-dosage">10 billion CFU/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>GABA is the brain's primary inhibitory neurotransmitter, promoting calmness and reducing anxiety.</li>
              <li>While oral GABA has limited blood-brain barrier penetration, studies suggest it may influence the enteric nervous system and potentially support central GABA activity through vagal pathways, helping to restore the excitatory-inhibitory balance.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Tyrosine</span>
              <span className="protocol-dosage">500 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>L-Tyrosine is the precursor for dopamine, norepinephrine, and epinephrine synthesis.</li>
              <li>Tyrosine hydroxylase converts tyrosine to L-DOPA, which is then converted to dopamine.</li>
              <li>This supports motivation, focus, and stress resilience, particularly during periods of high cognitive or physical demand.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Phosphatidylserine</span>
              <span className="protocol-dosage">100 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Phosphatidylserine maintains neuronal membrane integrity and supports acetylcholine receptor function. It enhances memory formation, cognitive processing, and helps regulate cortisol response to stress, supporting both neurotransmitter function and stress hormone balance.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Magnesium</span>
              <span className="protocol-dosage">400-500 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Magnesium acts as a cofactor in over 300 enzymatic reactions, including those involved in neurotransmitter synthesis and function.</li>
              <li>It modulates NMDA receptors, supports GABA activity, and helps regulate the HPA axis.</li>
              <li>The glycinate form enhances absorption and provides additional calming effects through glycine's inhibitory neurotransmitter properties.</li>
            </ul>
          </div>
        </div>

        {/* padding at the bottom */}
        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

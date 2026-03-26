import React from 'react';
import MobileInlineVideo from '../MobileInlineVideo';

export default function NeurotransmitterOverviewPanel({ activeVideo }) {
  return (
    <>
      <h1 className="panel-title">
        Comprehensive Neurotransmitter Balance Assessment for Mental & Cognitive Health
      </h1>

      <div className="panel-body-text">
        <p>The Neurotransmitters Panel evaluates the levels of neurotransmitters and their metabolites in the body, which are essential for mood regulation, cognitive function, and stress response.</p>

        <p>Neurotransmitter imbalances underlie many mental health conditions, yet standard psychiatric evaluations don't measure them directly.</p>

        <p>This test provides objective data to guide targeted amino acid therapy, nutritional support, and medication selection.</p>

        <p>By understanding both neurotransmitter levels and their metabolic patterns, practitioners can identify whether issues stem from inadequate production, excessive breakdown, or receptor dysfunction.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Symptoms to Consider This Test</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>Depression, anxiety, or panic attacks</li>
          <li>Insomnia or sleep disturbances</li>
          <li>ADHD, focus, or concentration issues</li>
          <li>Chronic fatigue or low motivation</li>
          <li>Mood swings or irritability</li>
          <li>Addiction or compulsive behaviors</li>
        </ul>

        <MobileInlineVideo activeVideo={activeVideo} />
        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Key Highlight Markers</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>Key neurotransmitters, including serotonin, dopamine, and GABA</li>
          <li>Excitatory neurotransmitters: Glutamate, epinephrine, norepinephrine, PEA</li>
          <li>Inhibitory neurotransmitters: GABA, glycine, serotonin</li>
          <li>Neurotransmitter metabolites: HVA, 5-HIAA, VMA, DOPAC</li>
          <li>Amino acid precursors: Tryptophan, tyrosine, taurine</li>
          <li>Histamine and methylation markers</li>
        </ul>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Main Product Highlights</h3>
        </div>
        <ul className="protocol-bullets">
          <li>Measures urinary levels of key neurotransmitters and their metabolites</li>
          <li>Non-invasive urine testing that can be done at home</li>
          <li>Measures both the levels of neurotransmitters and their metabolites, providing deeper insights into brain chemistry</li>
          <li>Comprehensive evaluation of synthesis, metabolism, and clearance patterns</li>
          <li>Identifies specific imbalances driving mental health symptoms</li>
        </ul>

        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

import React from 'react';

export default function NeuralOverviewPanel() {
  return (
    <>
      <h1 className="panel-title">
        Comprehensive Neurological Autoimmunity & Brain Health Assessment
      </h1>
      
      <div className="panel-body-text">
        <p>The Neural Zoomer Plus evaluates immune reactivity to neurological antigens associated with neuroinflammation, cognitive decline, and autoimmune-related brain disorders.</p>

        <p>This test identifies autoimmune activity years before clinical diagnosis, enabling early intervention when treatments are most effective. By detecting both autoantibodies and infectious triggers, it provides a complete picture of neuroinflammation causes.</p>

        <p>The panel is particularly valuable for patients with unexplained neurological symptoms, helping differentiate between various conditions and guide targeted therapeutic approaches.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Symptoms to Consider This Test</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>Memory loss, brain fog, or cognitive decline</li>
          <li>Unexplained neurological symptoms (numbness, tingling, weakness)</li>
          <li>Mood disorders (depression, anxiety, bipolar)</li>
          <li>Movement disorders or balance problems</li>
          <li>Suspected PANDAS/PANS or autoimmune encephalitis</li>
          <li>Family history of Alzheimer's, Parkinson's, or Multiple Sclerosis</li>
        </ul>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Key Highlight Markers</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>24 neurological autoimmunity & inflammation markers</li>
          <li>48 neurological antigens including anti-myelin, anti-ganglioside antibodies</li>
          <li>Alzheimer's markers: Anti-amyloid beta, anti-tau antibodies</li>
          <li>Neurotransmitter receptor antibodies: Dopamine, glutamate, GABA receptors</li>
          <li>Infections that most commonly act as the trigger, including Group A Strep, Epstein Barr Virus</li>
          <li>Cytomegalovirus, and the Herpes virus family</li>
          <li>Optional ApoE genotype testing for Alzheimer's risk</li>
        </ul>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Main Product Highlights</h3>
        </div>
        <ul className="protocol-bullets">
          <li>Utilizing advanced bio-chip microarray technology, this panel provides a deeper analysis of nervous system health</li>
          <li>Multiplex protein microarray technology ensures highly accurate detection of a wide range of pathogens and immune responses</li>
          <li>Comprehensive assessment of both neurological autoimmunity and infectious triggers</li>
          <li>Early detection of neurodegenerative processes before clinical symptoms</li>
          <li>Useful for complex neurological cases with unclear etiology</li>
        </ul>
        
        {/* padding at the bottom */}
        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

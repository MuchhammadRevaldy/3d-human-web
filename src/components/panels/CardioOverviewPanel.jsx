import React from 'react';
import MobileInlineVideo from '../MobileInlineVideo';

export default function CardioOverviewPanel({ activeVideo }) {
  return (
    <>
      <h1 className="panel-title">
        Comprehensive Cardiovascular Risk Assessment — Beyond Standard Lipid Panels
      </h1>

      <div className="panel-body-text">

        <p>The Cardiac Zoomer Panel aids in detecting key lipid, apolipoprotein, inflammation, and myocardial stress markers associated with cardiovascular disease risk.</p>
        <p>This test goes beyond traditional lipid panels by evaluating oxidative stress, endothelial dysfunction, and genetic predispositions that standard tests miss.</p>
        <p>Early identification of cardiovascular risk factors enables preventive interventions before irreversible damage occurs, potentially preventing heart attacks and strokes.</p>
        <p>The comprehensive nature of this panel allows for personalized treatment strategies targeting specific risk factors rather than one-size-fits-all approaches.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Symptoms to Consider This Test</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>Chest pain, shortness of breath, or irregular heartbeat</li>
          <li>Family history of heart disease, stroke, or sudden cardiac death</li>
          <li>High blood pressure or cholesterol despite treatment</li>
          <li>Unexplained fatigue or decreased exercise tolerance</li>
          <li>Diabetes or metabolic syndrome</li>
          <li>Inflammatory conditions affecting cardiovascular health</li>
        </ul>

        <MobileInlineVideo activeVideo={activeVideo} />
        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Key Highlight Markers</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>Advanced Lipid Panel: ApoB, Lp(a), oxidized LDL, small dense LDL particles, ceramides, sterols</li>
          <li>Inflammatory Markers: hs-CRP, MPO, PLAC, Lp-PLA2</li>
          <li>Metabolic Markers: Insulin, HbA1c, adiponectin</li>
          <li>Genetic Risk Factors: ApoE genotype, 9p21 genetic variants</li>
          <li>Myocardial Stress Markers: NT-proBNP, troponin</li>
          <li>Endothelial Function: ADMA, SDMA, homocysteine</li>
        </ul>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Main Product Highlights</h3>
        </div>
        <ul className="protocol-bullets">
          <li>Measures key biomarkers like cholesterol, triglycerides, and hs-CRP, offering a clear picture of heart health and inflammation levels</li>
          <li>Uses cutting-edge analyzers, microarrays, and chemiluminescence technology to identify heart disease risks earlier and with greater precision than traditional methods</li>
          <li>Early detection capabilities for silent cardiovascular issues before symptoms appear</li>
          <li>Comprehensive evaluation beyond standard cholesterol testing</li>
          <li>Personalized risk stratification based on genetic and biochemical markers</li>
        </ul>

        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

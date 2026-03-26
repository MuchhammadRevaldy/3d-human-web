import React from 'react';

export default function GeneticsOverviewPanel({ activeVideo }) {
  return (
    <>
      <h1 className="panel-title">
        Comprehensive Genetic Blueprint for Personalized Health Optimization
      </h1>

      <div className="panel-body-text">
        <p>The Methylation Panel evaluates genetic and biochemical pathways involved in detoxification, DNA repair, and overall cellular function. Genetic testing reveals inherited predispositions that explain why standard treatments fail for some patients.</p>

        <p>The Toxin Genetics Test provides insights into detoxification pathways, helping identify genetic predispositions that may influence toxin-related health risks.</p>

        <p>This comprehensive genetic analysis enables truly personalized medicine, optimizing interventions based on individual biochemistry rather than population averages.</p>

        <p>Understanding genetic variants guides targeted supplementation, dietary modifications, and lifestyle interventions for optimal health expression.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Symptoms to Consider This Test</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>Family history of chronic disease</li>
          <li>Treatment-resistant conditions</li>
          <li>Multiple chemical sensitivities</li>
          <li>Poor response to medications or supplements</li>
          <li>Unexplained chronic symptoms</li>
          <li>Interest in preventive/personalized medicine</li>
        </ul>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Key Highlight Markers</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>Cardiovascular Genetics: ApoE, MTHFR, ACE, 9p21 variants</li>
          <li>Toxin Genetics: SNPs (single nucleotide polymorphisms) in detoxification genes, Phase I & II pathways</li>
          <li>Methylation Panel: Key genetic variations that affect methylation pathways, MTHFR, COMT, CBS</li>
          <li>Oxidative Stress Genetics: 32 genetic variants in antioxidant enzymes</li>
          <li>Nutrition Genetics: Vitamin metabolism, mineral absorption genes</li>
        </ul>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Main Product Highlights</h3>
        </div>
        <ul className="protocol-bullets">
          <li>Real-Time PCR Technology enables precise and highly sensitive detection of genetic variations</li>
          <li>Comprehensive coverage of health-relevant genetic variants</li>
          <li>Actionable results with specific intervention strategies</li>
          <li>One-time testing provides lifetime insights</li>
          <li>Guides personalized supplementation and lifestyle</li>
        </ul>

        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

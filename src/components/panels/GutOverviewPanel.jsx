import React from 'react';

export default function GutOverviewPanel({ activeVideo }) {
  return (
    <>
      <h1 className="panel-title">
        The Most Comprehensive Gut Microbiome & Digestive Health Analysis — 300+ Markers
      </h1>

      <div className="panel-body-text">
        <p>The Gut Zoomer provides the most comprehensive assessment of gut health available, measuring beneficial bacteria, pathogens, inflammation, permeability, and metabolic function in one test.</p>

        <p>Gut Zoomer helps you understand your risk of heart disease and reveals the role genetics play in your cardiac health through the gut-heart axis.</p>

        <p>This test identifies specific dysbiosis patterns that standard stool tests miss, enabling targeted interventions rather than generic protocols.</p>

        <p>By evaluating the gut ecosystem comprehensively, it reveals connections between gut health and systemic conditions from autoimmunity to mental health.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Symptoms to Consider This Test</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>Chronic diarrhea, constipation, or IBS symptoms</li>
          <li>Bloating, gas, and abdominal pain</li>
          <li>Food sensitivities or unexplained reactions</li>
          <li>Autoimmune conditions</li>
          <li>Skin issues (eczema, acne, rosacea)</li>
          <li>Mental health issues (anxiety, depression, brain fog)</li>
        </ul>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Key Highlight Markers</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>100+ beneficial bacteria species (commensals)</li>
          <li>75+ pathogenic organisms (bacteria, viruses, parasites, fungi)</li>
          <li>7 inflammatory markers (calprotectin, lactoferrin, lysozyme)</li>
          <li>6 gut antibodies (ASCA, anti-tTG, anti-gliadin)</li>
          <li>14 metabolites (SCFAs, bile acids, β-glucuronidase)</li>
          <li>Digestive markers (pancreatic elastase, zonulin, sIgA)</li>
        </ul>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Main Product Highlights</h3>
        </div>
        <ul className="protocol-bullets">
          <li>Most comprehensive gut test available with 300+ biomarkers</li>
          <li>Multiple testing technologies: DNA sequencing, ELISA, mass spectrometry</li>
          <li>Identifies root causes of chronic symptoms beyond standard testing</li>
          <li>Includes pathogen detection often missed by culture methods</li>
          <li>Provides specific probiotic and prebiotic recommendations</li>
        </ul>

        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

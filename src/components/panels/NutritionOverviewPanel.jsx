import React from 'react';

export default function NutritionOverviewPanel({ activeVideo }) {
  return (
    <>
      <h1 className="panel-title">
        Comprehensive Cellular Nutrition Assessment — 40+ Nutrients
      </h1>

      <div className="panel-body-text">
        <p>The Micronutrient Panel provides insights into nutrient status, absorption, and potential deficiencies, helping guide personalized supplementation and dietary strategies. Nutrient deficiencies are epidemic yet often subclinical, contributing to chronic disease and suboptimal health.</p>

        <p>This test measures both intracellular (long-term) and extracellular (current) nutrient status, providing a complete picture that standard serum tests miss. The NutriPro version adds genetic analysis, revealing why certain nutrients are chronically low despite supplementation.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Symptoms to Consider This Test</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>Chronic fatigue or low energy</li>
          <li>Frequent infections or poor immunity</li>
          <li>Poor wound healing</li>
          <li>Hair loss or brittle nails</li>
          <li>Mood disorders or cognitive issues</li>
          <li>Osteoporosis or muscle weakness</li>
        </ul>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Key Highlight Markers</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>Intracellular and extracellular levels of essential vitamins, minerals, antioxidants, fatty acids, and amino acids</li>
          <li>Vitamins: A, B-complex, C, D, E, K1, K2</li>
          <li>Minerals: Magnesium, zinc, selenium, iron, copper</li>
          <li>Antioxidants: CoQ10, glutathione, alpha-lipoic acid</li>
          <li>Fatty acids: Omega-3 and omega-6 profiles</li>
          <li>Amino acids: All essential and conditionally essential</li>
        </ul>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Main Product Highlights</h3>
        </div>
        <ul className="protocol-bullets">
          <li>Utilizing advanced liquid chromatography–mass spectrometry (LC-MS/MS) technology</li>
          <li>Measures intracellular & extracellular micronutrient levels to assess the body’s functional need</li>
          <li>NutriPro adds genetic testing for nutrient metabolism</li>
          <li>Most comprehensive nutrient assessment available</li>
          <li>Identifies both deficiencies and functional insufficiencies</li>
        </ul>

        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

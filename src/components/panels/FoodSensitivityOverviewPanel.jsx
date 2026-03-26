import React from 'react';

export default function FoodSensitivityOverviewPanel({ activeVideo }) {
  return (
    <>
      <h1 className="panel-title">
        Comprehensive Food Sensitivity Testing — 209 Foods & 57 Additives
      </h1>

      <div className="panel-body-text">
        <p>The Food Sensitivity Complete test identifies IgG- and IgA-mediated immune responses to a broad range of foods, helping you uncover hidden triggers.</p>

        <p>Many chronic symptoms stem from unidentified food sensitivities that create ongoing inflammation and immune activation.</p>

        <p>This comprehensive panel identifies specific trigger foods, enabling targeted elimination diets rather than broad restrictions.</p>

        <p>By measuring both IgG and IgA responses, it captures different types of immune reactions, providing a complete picture of food reactivity.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Symptoms to Consider This Test</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>Digestive issues (bloating, gas, diarrhea, constipation)</li>
          <li>Chronic fatigue or brain fog</li>
          <li>Headaches or migraines</li>
          <li>Joint pain or inflammation</li>
          <li>Skin problems (eczema, acne, hives)</li>
          <li>Unexplained weight gain or difficulty losing weight</li>
        </ul>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Key Highlight Markers</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>IgG- and IgA-mediated immune responses to a broad range of foods</li>
          <li>209 foods and additives tested</li>
          <li>Common allergens: Gluten, dairy, eggs, nuts, soy</li>
          <li>Food additives: Preservatives, artificial sweeteners, food dyes</li>
          <li>Spices and herbs</li>
          <li>Nightshades and lectins</li>
        </ul>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Main Product Highlights</h3>
        </div>
        <ul className="protocol-bullets">
          <li>Utilizing protein microarray technology, this comprehensive panel helps identify potential food sensitivities</li>
          <li>The test uses high-density microarray technology proven over 95–100% accuracy for detecting IgG and IgA antibodies</li>
          <li>Most extensive food panel available</li>
          <li>Includes both immediate and delayed reactions</li>
          <li>Tests food additives often overlooked in other panels</li>
        </ul>

        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

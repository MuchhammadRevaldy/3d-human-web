import React from 'react';
import MobileInlineVideo from '../MobileInlineVideo';

export default function ToxinsOverviewPanel({ activeVideo }) {
  return (
    <>
      <h1 className="panel-title">
        Total Toxic Burden Assessment — 87+ Toxins
      </h1>
      
      <div className="panel-body-text">
        <p>Toxin Testing provides detailed insights into toxin accumulation and exposure, helping guide personalized detoxification strategies.</p>

        <p>Environmental toxins are ubiquitous and accumulate over time, contributing to chronic disease and accelerated aging.</p>

        <p>This comprehensive panel identifies specific toxins, allowing for targeted removal strategies rather than generic detox protocols.</p>

        <p>Understanding total toxic burden is essential for patients with unexplained chronic illness, as toxins often underlie treatment-resistant conditions.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Symptoms to Consider This Test</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>Chronic fatigue or fibromyalgia</li>
          <li>Brain fog or cognitive decline</li>
          <li>Respiratory issues or chronic sinusitis</li>
          <li>Hormonal imbalances</li>
          <li>Autoimmune conditions</li>
          <li>Unexplained neurological symptoms</li>
        </ul>

        <MobileInlineVideo activeVideo={activeVideo} />
        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Key Highlight Markers</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>29 mycotoxins, 20 heavy metals, and 38 environmental chemicals</li>
          <li>Heavy metals: Mercury, lead, arsenic, cadmium, aluminum</li>
          <li>Mycotoxins: Aflatoxin, ochratoxin, trichothecenes</li>
          <li>PFAS chemicals: PFOA, PFOS, and related compounds</li>
          <li>Pesticides, herbicides, and plasticizers</li>
          <li>Volatile organic compounds (VOCs)</li>
        </ul>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Main Product Highlights</h3>
        </div>
        <ul className="protocol-bullets">
          <li>Utilizing advanced liquid chromatography-mass spectrometry (LC-MS/MS) technology</li>
          <li>Wide Range of Toxins Measured: assesses mycotoxins, heavy metals, PFAS, and environmental chemicals, offering a complete view of toxic exposure</li>
          <li>Single test for comprehensive toxic burden assessment</li>
          <li>Highly sensitive detection of low-level exposures</li>
          <li>Guides targeted detoxification protocols</li>
        </ul>
        
        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

import React from 'react';
import MobileInlineVideo from '../MobileInlineVideo';

export default function HormoneOverviewPanel({ activeVideo }) {
  return (
    <>
      <h1 className="panel-title">
        Complete Hormone Metabolism & Balance Assessment
      </h1>

      <div className="panel-body-text">
        <p>The Hormone Zoomer provides insights into hormonal imbalances, circadian rhythm function, and stress response.</p>

        <p>This comprehensive approach evaluates not just hormone levels but how they're metabolized and cleared, revealing why some patients don't respond to hormone therapy.</p>

        <p>The Hormone Zoomer offers a comprehensive evaluation of hormone levels, including cortisol, estrogen, progesterone, testosterone, and endocrine disruptors.</p>

        <p>By identifying toxic interference and metabolic patterns, it enables truly personalized hormone optimization strategies.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Symptoms to Consider This Test</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>Fatigue, low energy, or burnout</li>
          <li>Weight gain or difficulty losing weight</li>
          <li>Mood swings, anxiety, or depression</li>
          <li>Irregular menstrual cycles or PMS/PMDD</li>
          <li>Low libido or sexual dysfunction</li>
          <li>Sleep disturbances or insomnia</li>
        </ul>

        <MobileInlineVideo activeVideo={activeVideo} />
        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Key Highlight Markers</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          <li>Cortisol, estrogen, progesterone, and testosterone at multiple time points</li>
          <li>Estrogen, progesterone, testosterone, DHEA, cortisol, melatonin, and their metabolites</li>
          <li>Estrogen metabolism pathways (2-OH, 4-OH, 16-OH)</li>
          <li>Endocrine disruptors (e.g., BPA, phthalates), bone turnover markers (DPD, PYD), and oxidative stress (8OHdG)</li>
          <li>Methylation markers affecting hormone metabolism</li>
          <li>Diurnal cortisol and melatonin patterns</li>
        </ul>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>Main Product Highlights</h3>
        </div>
        <ul className="protocol-bullets">
          <li>Utilizing liquid chromatography-tandem mass spectrometry (LC-MS/MS) technology for precision</li>
          <li>Combines salivary (bioavailable) and urinary (metabolites) testing</li>
          <li>Uses LC-MS/MS and GC-MS/MS methods for highly sensitive, lab-grade hormone and toxin detection</li>
          <li>Evaluates both hormone levels and detoxification pathways</li>
          <li>Identifies endocrine disruptors interfering with hormone function</li>
        </ul>

        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

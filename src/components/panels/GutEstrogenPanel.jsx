import React from 'react';

export default function GutEstrogenPanel() {
  return (
    <>
      <h1 className="panel-title">
        The Estrogen Dominance<br/>& Gut Dysbiosis Pattern
      </h1>
      
      <div className="panel-body-text">
        <div className="section-header">
          <span className="section-icon">∴</span> 
          <h3>The Clinical Picture</h3>
        </div>
        
        <p>Rebecca, a 44-year-old marketing director, presented with heavy menstrual bleeding, breast tenderness, mood swings, and weight gain despite hormone replacement therapy.</p>
        <p>Her comprehensive gut and hormone testing revealed impaired estrogen clearance due to dysbiotic gut bacteria.</p>
        
        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Key Biomarkers Working Together</h3>
        </div>

        <div className="biomarkers-list">
          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">β-Glucuronidase Activity (≤2300.0 U/mL)</div>
              <div className="bm-desc">ESTROGEN REACTIVATION</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 2784.0
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Deoxycholic Acid (DCA) (24.25-75.84 %)</div>
              <div className="bm-desc">GUT INFLAMMATION</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 76.8
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Lithocholic Acid (LCA) (24.16-75.75%)</div>
              <div className="bm-desc">IMPAIRED BILE ACID METABOLISM</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 11.7
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Butyrate-producing Bacteria</div>
              <div className="bm-desc">REDUCED SCFA PRODUCTION / IMPAIRED GUT BARRIER</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> LOW
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Enterobacteriaceae (10.0-20.0)</div>
              <div className="bm-desc">INTESTINAL PERMEABILITY</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 23.2
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Total Short Chain Fatty Acids (45.4-210.1 micromol/g)</div>
              <div className="bm-desc">GUT DYSBIOSIS</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 35.3
            </div>
          </div>
        </div>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>The Clinical Insight</h3>
        </div>

        <p>This pattern reveals dysbiotic bacteria driving estrogen recirculation through excessive β-glucuronidase production. Depleted beneficial bacteria cannot produce adequate SCFAs to maintain gut barrier integrity.</p>
        
        <p>Elevated DCA from bacterial overgrowth creates intestinal inflammation, while low LCA indicates impaired bile acid metabolism.</p>
        
        <p>The combination of poor estrogen elimination and inflammatory gut environment perpetuates hormone imbalance despite external hormone therapy.</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>Targeted Supplementation Strategy</h3>
        </div>

        <div className="protocols-list">
          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Calcium-D-Glucarate</span>
              <span className="protocol-dosage">200 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Oral supplementation of calcium-D-glucarate can inhibit β-glucuronidase, produced by colonic microflora, thereby preventing the deconjugation of detoxified compounds.</li>
              <li>This supplement may be effective in reducing fecal β-glucuronidase levels and supporting detoxification pathways.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Lactobacillus rhamnosus GG</span>
              <span className="protocol-dosage">10 billion CFU/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Studies have shown that supplementation with Lactobacillus strains reduced β-glucuronidase activity in the gut, which may help reduce the reactivation of toxins and improve gut microbiome balance.</li>
              <li>This supplementation could be considered for lowering β-glucuronidase levels and promoting gut health.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Butyrate (Tributyrin)</span>
              <span className="protocol-dosage">300 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Tributyrin is a dietary supplement of butyrate. Oral intake of tributyrin can significantly elevate butyrate levels.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Vitamin D</span>
              <span className="protocol-dosage">600 IU/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Vitamin D influences bile acid metabolism and can help regulate its synthesis in the liver. Therefore, its intake can be considered beneficial for improving bile acid metabolism.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Inulin</span>
              <span className="protocol-dosage">10 g/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Inulin is a naturally occurring compound derived from plants and is used as a prebiotic.</li>
              <li>Oral intake of inulin has the potential to increase the abundance of SCFA-producing bacteria, thereby helping to raise acetate, propionate, and butyrate levels in the gut.</li>
            </ul>
          </div>
        </div>
        
        {/* padding at the bottom */}
        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

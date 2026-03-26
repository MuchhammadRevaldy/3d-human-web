import React from 'react';
import { useTranslation } from 'react-i18next';
import MobileInlineVideo from '../MobileInlineVideo';

export default function MildDemyelinationPanel({ onGoToOverview, activeVideo }) {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="panel-title">
        {t('explore.panels.mild_demyelination.title')}
      </h1>

      <div className="panel-body-text">
        <div className="section-header">
          <span className="section-icon">∴</span>
          <h3>{t('explore.panels.mild_demyelination.clinical_picture')}</h3>
        </div>

        <p>{t('explore.panels.mild_demyelination.case_history')}</p>
        <MobileInlineVideo activeVideo={activeVideo} />
        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>{t('explore.panels.mild_demyelination.biomarkers_title')}</h3>
        </div>

        <div className="biomarkers-list">
          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Anti-Myelin Basic Protein (≤ 10)</div>
              <div className="bm-desc">DEMYELINATION AND OLIGODENDROCYTE STRESS</div>
            </div>
            <div className="bm-value val-high">
              <span className="arrow-up">↑</span> 17.8
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Anti-GABA Receptor (≤ 10)</div>
              <div className="bm-desc">IMPAIRED INHIBITORY NEUROTRANSMISSION</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 5.9
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Anti-AChR (≤ 10)</div>
              <div className="bm-desc">IMPAIRED NEUROMUSCULAR SIGNALLING</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 8.3
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Anti-NMDA Receptor (≤ 10)</div>
              <div className="bm-desc">IMPAIRED EXCITATORY NEUROTRANSMISSION</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 6.5
            </div>
          </div>

          <div className="biomarker-card">
            <div className="bm-info">
              <div className="bm-name">Anti-MOG (≤ 10)</div>
              <div className="bm-desc">IMPAIRED MYELIN INTEGRITY</div>
            </div>
            <div className="bm-value val-normal">
              <span className="arrow-down">↓</span> 7.1
            </div>
          </div>
        </div>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>{t('explore.panels.mild_demyelination.clinical_insight')}</h3>
        </div>

        <p>{t('explore.panels.mild_demyelination.insight_desc1')}</p>
        <p>{t('explore.panels.mild_demyelination.insight_desc2')}</p>
        <p>{t('explore.panels.mild_demyelination.insight_desc3')}</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span>
          <h3>{t('explore.panels.mild_demyelination.protocol_title')}</h3>
        </div>

        <div className="protocols-list">
          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Glutamine</span>
              <span className="protocol-dosage">500 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Glutamine supports GABA synthesis by providing a precursor for glutamate, which is then converted into GABA. Glutamine can be converted to glutamate through the action of the enzyme glutaminase.</li>
              <li>Following this, glutamate serves as the substrate for the enzyme glutamate decarboxylase (GAD), which catalyzes the conversion of glutamate to GABA.</li>
              <li>Therefore, oral intake of glutamine supports the synthesis of GABA and helps improve its levels.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Coenzyme Q10</span>
              <span className="protocol-dosage">100 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Studies have reported that Coenzyme Q10 supplementation reduced glutamate excitotoxicity and oxidative stress.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">PUFAs</span>
              <span className="protocol-dosage">950 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>PUFAs reduce inflammation by reducing the levels of proinflammatory cytokines and animal studies showed that PUFAs prevent demyelination and promotes remyelination and neuronal protection.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Vitamin D</span>
              <span className="protocol-dosage">600 IU/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Vitamin D influences neurodegenerative disease risk and progression, and a few studies have suggested its role in the development and function of the CNS.</li>
              <li>Studies have reported that adequate levels of vitamin D prevent demyelination and stimulate remyelination.</li>
            </ul>
          </div>

          <div className="protocol-card">
            <div className="protocol-header">
              <span className="protocol-name">Magnesium</span>
              <span className="protocol-dosage">400 mg/day</span>
            </div>
            <ul className="protocol-bullets">
              <li>Magnesium is crucial for the proper functioning of the nervous system.</li>
              <li>Magnesium is used to treat pain in various conditions. Studies have reported low levels of magnesium in patients with migraine.</li>
              <li>Magnesium prevents glutamate toxicity by blocking the glutamate receptors.</li>
            </ul>
          </div>
        </div>

        <div className="next-button-container" onClick={onGoToOverview}>
          <div className="next-content">
            <span className="next-label">{t('explore.panels.mild_demyelination.next_label')}</span>
            <span className="next-title">{t('explore.panels.mild_demyelination.next_title')}</span>
          </div>
          <div className="next-arrow-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>

        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

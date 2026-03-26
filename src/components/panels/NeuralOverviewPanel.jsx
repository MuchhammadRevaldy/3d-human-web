import React from 'react';
import { useTranslation } from 'react-i18next';
import MobileInlineVideo from '../MobileInlineVideo';

export default function NeuralOverviewPanel({ activeVideo }) {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="panel-title">
        {t('explore.panels.neural.title')}
      </h1>
      
      <div className="panel-body-text">
        <p>{t('explore.panels.neural.desc1')}</p>
        <p>{t('explore.panels.neural.desc2')}</p>
        <p>{t('explore.panels.neural.desc3')}</p>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>{t('explore.panels.neural.symptoms_title')}</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          {t('explore.panels.neural.symptoms', { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <MobileInlineVideo activeVideo={activeVideo} />
        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>{t('explore.panels.neural.markers_title')}</h3>
        </div>
        <ul className="protocol-bullets" style={{marginBottom: '32px'}}>
          {t('explore.panels.neural.markers', { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="section-header" style={{marginTop: '48px'}}>
          <span className="section-icon">∴</span> 
          <h3>{t('explore.panels.neural.highlights_title')}</h3>
        </div>
        <ul className="protocol-bullets">
          {t('explore.panels.neural.highlights', { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        
        {/* padding at the bottom */}
        <div style={{height: '100px'}}></div>
      </div>
    </>
  );
}

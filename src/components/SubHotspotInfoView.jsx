import React, { useEffect, useRef, useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MildDemyelinationPanel from './panels/MildDemyelinationPanel'
import NeurotransmitterPanel from './panels/NeurotransmitterPanel'
import HormonePanel from './panels/HormonePanel'
import CardioEndothelialPanel from './panels/CardioEndothelialPanel'
import CardioMetabolicPanel from './panels/CardioMetabolicPanel'
import ToxinsPanel from './panels/ToxinsPanel'
import GutPermeabilityPanel from './panels/GutPermeabilityPanel'
import GutEstrogenPanel from './panels/GutEstrogenPanel'
import OxidativeStressPanel from './panels/OxidativeStressPanel'
import NeuralOverviewPanel from './panels/NeuralOverviewPanel'
import NeurotransmitterOverviewPanel from './panels/NeurotransmitterOverviewPanel'
import HormoneOverviewPanel from './panels/HormoneOverviewPanel'
import CardioOverviewPanel from './panels/CardioOverviewPanel'
import ToxinsOverviewPanel from './panels/ToxinsOverviewPanel'
import OxidativeStressOverviewPanel from './panels/OxidativeStressOverviewPanel'
import NutritionOverviewPanel from './panels/NutritionOverviewPanel'
import AutoimmunityOverviewPanel from './panels/AutoimmunityOverviewPanel'
import GeneticsOverviewPanel from './panels/GeneticsOverviewPanel'
import FoodSensitivityOverviewPanel from './panels/FoodSensitivityOverviewPanel'
import GutOverviewPanel from './panels/GutOverviewPanel'

gsap.registerPlugin(ScrollTrigger)

export default function SubHotspotInfoView({ subHotspotId, categoryData, onClose, isMobile }) {
  const { t } = useTranslation()
  
  // Memoized Video Map with translated labels
  const VIDEO_MAP = useMemo(() => ({
    'oxi': { src: '/models/OxidativeStressV03.mp4', label: t('explore.video_labels.rna_damage') },
    'toxins_panel': { src: '/models/ToxinsV03.mp4', label: t('explore.video_labels.toxins_load') },
    'neural': { src: '/models/NeuralHealthV03.mp4', label: t('explore.video_labels.neural_health') },
    'neurotrans': { src: '/models/Neurotransmiters.mp4', label: t('explore.video_labels.synapse_activity') },
    'gutzoomer': { src: '/models/MasterGutZoomerV03.mp4', label: t('explore.video_labels.microbiome_flora') },
    'cardio': { src: '/models/CardioZoomerNew.mp4', label: t('explore.video_labels.arterial_plaque') },
    'hormone_z': { src: '/models/Hormones3D.mp4', label: t('explore.video_labels.steroid_pathways') }
  }), [t])

  const subData = categoryData?.subHotspots?.find(s => s.id === subHotspotId) || {}
  const activeVideo = VIDEO_MAP[subData.id]
  const videoRef = useRef(null)
  const videoElementRef = useRef(null)
  const wrapperRef = useRef(null)
  const labelRef = useRef(null)
  const scrollerRef = useRef(null)
  const contentRef = useRef(null)
  const [activeCardioTab, setActiveCardioTab] = useState('endothelial')
  const [activeGutTab, setActiveGutTab] = useState('permeability')
  const [showOverview, setShowOverview] = useState(false)
  const [panelKey, setPanelKey] = useState(0)

  // Helper to change tab/overview and trigger animation
  const switchTo = (fn) => {
    fn()
    setPanelKey(k => k + 1)
  }

  useEffect(() => {
    setActiveCardioTab('endothelial')
    setActiveGutTab('permeability')
    setShowOverview(false)
    setPanelKey(k => k + 1)
  }, [subHotspotId])

  // Explicit Video Loader to aggressively bypass Browser AutoPlay safety blocks
  useEffect(() => {
    if (activeVideo && videoElementRef.current) {
      videoElementRef.current.src = activeVideo.src
      videoElementRef.current.load()
      
      const playPromise = videoElementRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn(`Browser autoplay blocked or video load failed for ${activeVideo.src}:`, error)
        })
      }
    }
  }, [activeVideo])

  // GSAP Scroll-Triggered Morphing Logic
  useEffect(() => {
    // Apabila tombol tidak memiliki mapping video, animasi timeline dilewati
    if (!activeVideo || !videoRef.current || !wrapperRef.current || !labelRef.current || !scrollerRef.current || !contentRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        scroller: scrollerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2
      }
    })

    // Phase 1: Grow & Morph dari Circle 250px ke Rounded Rectangle 45vw
    tl.to(wrapperRef.current, { width: '45vw', height: '75vh', right: '4%', duration: 1, ease: 'power1.inOut' }, 'grow')
      .to(videoRef.current, { borderRadius: '32px', duration: 1, ease: 'power1.inOut' }, 'grow')
      .to(labelRef.current, { bottom: '25%', left: '15%', scale: 1.5, duration: 1, ease: 'power1.inOut' }, 'grow')

    // Phase 2: Shrink & Morph kembali menjadi Circle
    tl.to(wrapperRef.current, { width: '250px', height: '250px', right: '18%', duration: 1, ease: 'power1.inOut' }, 'shrink')
      .to(videoRef.current, { borderRadius: '50%', duration: 1, ease: 'power1.inOut' }, 'shrink')
      .to(labelRef.current, { bottom: '8%', left: '8%', scale: 1.0, duration: 1, ease: 'power1.inOut' }, 'shrink')

    return () => {
      tl.kill()
    }
  }, [activeVideo])

  return (
    <div className="sub-info-overlay">
      
      <button className="sub-info-back-btn" onClick={onClose} aria-label="Back">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        <span className="mobile-back-text mobile-only">{subData?.label?.toUpperCase()}</span>
      </button>

      <div className="sub-info-top-navbar">
        {subData.id === 'cardio' ? (
          <div className="nav-pill-container">
            <span className="nav-subtitle">Cardio Zoomer:</span>
            {showOverview ? (
              <>
                <span className="nav-inactive-btn" onClick={() => switchTo(() => { setActiveCardioTab('endothelial'); setShowOverview(false); })}>{t('explore.ui.endothelial')}</span>
                <span className="nav-inactive-btn" onClick={() => switchTo(() => { setActiveCardioTab('metabolic'); setShowOverview(false); })}>{t('explore.ui.metabolic')}</span>
                <div className="nav-active-btn">{t('explore.ui.test_overview')}</div>
              </>
            ) : activeCardioTab === 'endothelial' ? (
              <>
                <div className="nav-active-btn">{t('explore.ui.endothelial')}</div>
                <span className="nav-inactive-btn" onClick={() => switchTo(() => setActiveCardioTab('metabolic'))}>{t('explore.ui.metabolic')}</span>
                <span className="nav-inactive-btn" onClick={() => switchTo(() => setShowOverview(true))}>{t('explore.ui.test_overview')}</span>
              </>
            ) : (
              <>
                <span className="nav-inactive-btn" onClick={() => switchTo(() => setActiveCardioTab('endothelial'))}>{t('explore.ui.endothelial')}</span>
                <div className="nav-active-btn">{t('explore.ui.metabolic')}</div>
                <span className="nav-inactive-btn" onClick={() => switchTo(() => setShowOverview(true))}>{t('explore.ui.test_overview')}</span>
              </>
            )}
          </div>
        ) : subData.id === 'gutzoomer' ? (
          <div className="nav-pill-container">
            <span className="nav-subtitle">Gut Zoomer:</span>
            {showOverview ? (
              <>
                <span className="nav-inactive-btn" onClick={() => switchTo(() => { setActiveGutTab('permeability'); setShowOverview(false); })}>{t('explore.ui.intestinal_perm')}</span>
                <span className="nav-inactive-btn" onClick={() => switchTo(() => { setActiveGutTab('estrogen'); setShowOverview(false); })}>{t('explore.ui.estrogen_dom')}</span>
                <div className="nav-active-btn">{t('explore.ui.test_overview')}</div>
              </>
            ) : activeGutTab === 'permeability' ? (
              <>
                <div className="nav-active-btn">{t('explore.ui.intestinal_perm')}</div>
                <span className="nav-inactive-btn" onClick={() => switchTo(() => setActiveGutTab('estrogen'))}>{t('explore.ui.estrogen_dom')}</span>
                <span className="nav-inactive-btn" onClick={() => switchTo(() => setShowOverview(true))}>{t('explore.ui.test_overview')}</span>
              </>
            ) : (
              <>
                <span className="nav-inactive-btn" onClick={() => switchTo(() => setActiveGutTab('permeability'))}>{t('explore.ui.intestinal_perm')}</span>
                <div className="nav-active-btn">{t('explore.ui.estrogen_dom')}</div>
                <span className="nav-inactive-btn" onClick={() => switchTo(() => setShowOverview(true))}>{t('explore.ui.test_overview')}</span>
              </>
            )}
          </div>
        ) : subData.id === 'nutri' ? (
          <div className="nav-pill-container">
            <span className="nav-subtitle">Micronutrient Panel:</span>
            <div className="nav-active-btn">Test Overview</div>
          </div>
        ) : subData.id === 'auto' ? (
          <div className="nav-pill-container">
            <span className="nav-subtitle">Autoimmune Zoomer:</span>
            <div className="nav-active-btn">Test Overview</div>
          </div>
        ) : subData.id === 'genetics_test' ? (
          <div className="nav-pill-container">
            <span className="nav-subtitle">Genetics Testing Suite:</span>
            <div className="nav-active-btn">Test Overview</div>
          </div>
        ) : subData.id === 'food' ? (
          <div className="nav-pill-container">
            <span className="nav-subtitle">Food Sensitivity:</span>
            <div className="nav-active-btn">Test Overview</div>
          </div>
        ) : (
          <div className="nav-pill-container">
            <span className="nav-subtitle">
              {subData.id === 'hormone_z' ? t('explore.hotspots.hormone_z') + ':' : 
               subData.id === 'toxins_panel' ? t('explore.hotspots.toxins_panel') + ':' : 
               subData.id === 'oxi' ? t('explore.hotspots.oxi') + ':' : 
               subData.id === 'neurotrans' ? t('explore.hotspots.neurotrans') + ':' :
               t('explore.hotspots.neural') + ':'}
            </span>
            {showOverview ? (
              <>
                <span className="nav-inactive-btn" onClick={() => switchTo(() => setShowOverview(false))}>
                  {subData.id === 'neurotrans' ? t('explore.ui.neurotransmitter') :
                   subData.id === 'hormone_z' ? t('explore.ui.hormone_def') :
                   subData.id === 'toxins_panel' ? t('explore.ui.tox_burden') :
                   subData.id === 'oxi' ? t('explore.ui.oxi_damage') :
                   subData.id === 'neural' ? t('explore.ui.demyelination') :
                   subData.label || t('explore.ui.demyelination')}
                </span>
                <div className="nav-active-btn">{t('explore.ui.test_overview')}</div>
              </>
            ) : (
              <>
                <div className="nav-active-btn">
                  {subData.id === 'neurotrans' ? t('explore.ui.neurotransmitter') :
                   subData.id === 'hormone_z' ? t('explore.ui.hormone_def') :
                   subData.id === 'toxins_panel' ? t('explore.ui.tox_burden') :
                   subData.id === 'oxi' ? t('explore.ui.oxi_damage') :
                   subData.id === 'neural' ? t('explore.ui.demyelination') :
                   subData.label || t('explore.ui.demyelination')}
                </div>
                <span className="nav-inactive-btn" onClick={() => switchTo(() => setShowOverview(true))}>{t('explore.ui.test_overview')}</span>
              </>
            )}
          </div>
        )}
      </div>

      {activeVideo && (
        <div className="oxi-video-position-wrapper desktop-only" ref={wrapperRef}>
          <div className="oxi-video-container" ref={videoRef}>
            <video 
              ref={videoElementRef}
              autoPlay 
              loop 
              muted 
              playsInline
              className="oxi-video-element"
            />
            <div className="oxi-label" ref={labelRef}>
              {activeVideo.label.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i === 0 && <br/>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Left Main Content Panel */}
      <div className={isMobile ? "sub-info-side-panel-mobile" : "sub-info-side-panel-desktop"}>
        <div className="panel-scroll-area" ref={scrollerRef}>
          <div key={panelKey} className="scroll-content-wrapper panel-transition-enter" ref={contentRef}>
            {showOverview ? (
              subData.id === 'neural' ? <NeuralOverviewPanel activeVideo={activeVideo} /> :
              subData.id === 'neurotrans' ? <NeurotransmitterOverviewPanel activeVideo={activeVideo} /> :
              subData.id === 'hormone_z' ? <HormoneOverviewPanel activeVideo={activeVideo} /> :
              subData.id === 'cardio' ? <CardioOverviewPanel activeVideo={activeVideo} /> :
              subData.id === 'toxins_panel' ? <ToxinsOverviewPanel activeVideo={activeVideo} /> :
              subData.id === 'oxi' ? <OxidativeStressOverviewPanel activeVideo={activeVideo} /> :
              subData.id === 'nutri' ? <NutritionOverviewPanel activeVideo={activeVideo} /> :
              subData.id === 'auto' ? <AutoimmunityOverviewPanel activeVideo={activeVideo} /> :
              subData.id === 'genetics_test' ? <GeneticsOverviewPanel activeVideo={activeVideo} /> :
              subData.id === 'food' ? <FoodSensitivityOverviewPanel activeVideo={activeVideo} /> :
              subData.id === 'gutzoomer' ? <GutOverviewPanel activeVideo={activeVideo} /> :
              <div style={{padding: '40px', fontFamily: 'Inter', fontSize: '18px', color: '#1a1a3a'}}>Test overview coming soon...</div>
            ) : subData.id === 'nutri' ? (
              <NutritionOverviewPanel activeVideo={activeVideo} />
            ) : subData.id === 'auto' ? (
              <AutoimmunityOverviewPanel activeVideo={activeVideo} />
            ) : subData.id === 'genetics_test' ? (
              <GeneticsOverviewPanel activeVideo={activeVideo} />
            ) : subData.id === 'food' ? (
              <FoodSensitivityOverviewPanel activeVideo={activeVideo} />
            ) : subData.id === 'neurotrans' ? (
              <NeurotransmitterPanel activeVideo={activeVideo} onGoToOverview={() => setShowOverview(true)} />
            ) : subData.id === 'hormone_z' ? (
              <HormonePanel activeVideo={activeVideo} onGoToOverview={() => setShowOverview(true)} />
            ) : subData.id === 'toxins_panel' ? (
              <ToxinsPanel activeVideo={activeVideo} onGoToOverview={() => setShowOverview(true)} />
            ) : subData.id === 'oxi' ? (
              <OxidativeStressPanel activeVideo={activeVideo} onGoToOverview={() => setShowOverview(true)} />
            ) : subData.id === 'cardio' ? (
              activeCardioTab === 'endothelial' ? <CardioEndothelialPanel activeVideo={activeVideo} onGoToOverview={() => setActiveCardioTab('metabolic')} /> : <CardioMetabolicPanel activeVideo={activeVideo} onGoToOverview={() => setShowOverview(true)} />
            ) : subData.id === 'gutzoomer' ? (
              activeGutTab === 'permeability' ? <GutPermeabilityPanel activeVideo={activeVideo} onGoToOverview={() => setShowOverview(true)} /> : <GutEstrogenPanel activeVideo={activeVideo} onGoToOverview={() => setShowOverview(true)} />
            ) : (
              <MildDemyelinationPanel activeVideo={activeVideo} onGoToOverview={() => setShowOverview(true)} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useEffect, useRef, useState } from 'react'
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

gsap.registerPlugin(ScrollTrigger)

// Master Library pemetaan Video berdasarkan ID dari subHotspot
const VIDEO_MAP = {
  'oxi': { src: '/models/OxidativeStressV03.mp4', label: 'RNA\nDamage' },
  'toxins_panel': { src: '/models/ToxinsV03.mp4', label: 'Toxins\nLoad' },
  'neural': { src: '/models/NeuralHealthV03.mp4', label: 'Neural\nHealth' },
  'neurotrans': { src: '/models/Neurotransmiters.mp4', label: 'Synapse\nActivity' },
  'gutzoomer': { src: '/models/MasterGutZoomerV03.mp4', label: 'Microbiome\nFlora' },
  'cardio': { src: '/models/CardioZoomerNew.mp4', label: 'Arterial\nPlaque' },
  'hormone_z': { src: '/models/Hormones3D.mp4', label: 'Steroid\nPathways' }
}

export default function SubHotspotInfoView({ subHotspotId, categoryData, onClose }) {
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

  useEffect(() => {
    setActiveCardioTab('endothelial')
    setActiveGutTab('permeability')
    setShowOverview(false)
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a3a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div className="sub-info-top-navbar">
        {subData.id === 'cardio' ? (
          <div className="nav-pill-container">
            <span className="nav-subtitle">Cardio Zoomer:</span>
            {showOverview ? (
              <>
                <span className="nav-inactive-btn" onClick={() => setShowOverview(false)} style={{cursor: 'pointer'}}>
                  {activeCardioTab === 'endothelial' ? 'The Endothelial Dysfunction' : 'The Metabolic Syndrome'}
                </span>
                <div className="nav-active-btn">Test Overview</div>
              </>
            ) : activeCardioTab === 'endothelial' ? (
              <>
                <div className="nav-active-btn">The Endothelial Dysfunction</div>
                <span className="nav-inactive-btn" onClick={() => setActiveCardioTab('metabolic')} style={{cursor: 'pointer'}}>The Metabolic Syndrome</span>
                <span className="nav-inactive-btn" onClick={() => setShowOverview(true)} style={{cursor: 'pointer'}}>Test Overview</span>
              </>
            ) : (
              <>
                <span className="nav-inactive-btn" onClick={() => setActiveCardioTab('endothelial')} style={{cursor: 'pointer'}}>The Endothelial Dysfunction</span>
                <div className="nav-active-btn">The Metabolic Syndrome</div>
                <span className="nav-inactive-btn" onClick={() => setShowOverview(true)} style={{cursor: 'pointer'}}>Test Overview</span>
              </>
            )}
          </div>
        ) : subData.id === 'gutzoomer' ? (
          <div className="nav-pill-container">
            <span className="nav-subtitle">Gut Zoomer:</span>
            {showOverview ? (
              <>
                <span className="nav-inactive-btn" onClick={() => setShowOverview(false)} style={{cursor: 'pointer'}}>
                  {activeGutTab === 'permeability' ? 'The Intestinal Permeability Pattern' : 'The Estrogen Dominance'}
                </span>
                <div className="nav-active-btn">Test Overview</div>
              </>
            ) : activeGutTab === 'permeability' ? (
              <>
                <div className="nav-active-btn">The Intestinal Permeability Pattern</div>
                <span className="nav-inactive-btn" onClick={() => setActiveGutTab('estrogen')} style={{cursor: 'pointer'}}>The Estrogen Dominance</span>
                <span className="nav-inactive-btn" onClick={() => setShowOverview(true)} style={{cursor: 'pointer'}}>Test Overview</span>
              </>
            ) : (
              <>
                <span className="nav-inactive-btn" onClick={() => setActiveGutTab('permeability')} style={{cursor: 'pointer'}}>The Intestinal Permeability Pattern</span>
                <div className="nav-active-btn">The Estrogen Dominance</div>
                <span className="nav-inactive-btn" onClick={() => setShowOverview(true)} style={{cursor: 'pointer'}}>Test Overview</span>
              </>
            )}
          </div>
        ) : (
          <div className="nav-pill-container">
            <span className="nav-subtitle">
              {subData.id === 'hormone_z' ? 'Hormone Zoomer:' : 
               subData.id === 'toxins_panel' ? 'Tox Zoomer:' : 
               subData.id === 'oxi' ? 'Oxi Zoomer:' : 
               'Neural Zoomer Plus:'}
            </span>
            {showOverview ? (
              <>
                <span className="nav-inactive-btn" onClick={() => setShowOverview(false)} style={{cursor: 'pointer'}}>
                  {subData.id === 'neurotrans' ? 'The Neurotransmitter' :
                   subData.id === 'hormone_z' ? 'The Hormone Deficiency' :
                   subData.id === 'toxins_panel' ? 'The Total Tox Burden' :
                   subData.id === 'oxi' ? 'The Multi-System Oxidative Damage' :
                   subData.id === 'neural' ? 'The Mild Demyelination' :
                   subData.label || 'The Mild Demyelination'}
                </span>
                <div className="nav-active-btn">Test Overview</div>
              </>
            ) : (
              <>
                <div className="nav-active-btn">
                  {subData.id === 'neurotrans' ? 'The Neurotransmitter' :
                   subData.id === 'hormone_z' ? 'The Hormone Deficiency' :
                   subData.id === 'toxins_panel' ? 'The Total Tox Burden' :
                   subData.id === 'oxi' ? 'The Multi-System Oxidative Damage' :
                   subData.id === 'neural' ? 'The Mild Demyelination' :
                   subData.label || 'The Mild Demyelination'}
                </div>
                <span className="nav-inactive-btn" onClick={() => setShowOverview(true)} style={{cursor: 'pointer'}}>Test Overview</span>
              </>
            )}
          </div>
        )}
      </div>

      {activeVideo && (
        <div className="oxi-video-position-wrapper" ref={wrapperRef}>
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
      <div className="sub-info-side-panel">
        <div className="panel-scroll-area" ref={scrollerRef}>
          <div className="scroll-content-wrapper" ref={contentRef}>
            {showOverview ? (
              (subData.id === 'neural' || subData.id === 'neurotrans') ? <NeuralOverviewPanel /> : 
              <div style={{padding: '40px', fontFamily: 'Inter', fontSize: '18px', color: '#1a1a3a'}}>Test overview coming soon...</div>
            ) : subData.id === 'neurotrans' ? (
              <NeurotransmitterPanel />
            ) : subData.id === 'hormone_z' ? (
              <HormonePanel />
            ) : subData.id === 'toxins_panel' ? (
              <ToxinsPanel />
            ) : subData.id === 'oxi' ? (
              <OxidativeStressPanel />
            ) : subData.id === 'cardio' ? (
              activeCardioTab === 'endothelial' ? <CardioEndothelialPanel /> : <CardioMetabolicPanel />
            ) : subData.id === 'gutzoomer' ? (
              activeGutTab === 'permeability' ? <GutPermeabilityPanel /> : <GutEstrogenPanel />
            ) : (
              <MildDemyelinationPanel />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

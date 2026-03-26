import { useState, Suspense, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, Environment, Stars } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { easing } from 'maath'
import BodyModel from '../components/BodyModel'
import OrganHotspots from '../components/OrganHotspots'
import Sidebar from '../components/Sidebar'
import InternalOrgans from '../components/InternalOrgans'
import SubHotspotInfoView from '../components/SubHotspotInfoView'
import BubbleBg from '../components/BubbleBg'
import CrosshairCursor from '../components/CrosshairCursor'
import SplashScreen from '../components/SplashScreen'
import '../index.css'
import { useNavigate } from 'react-router-dom'
import { Home } from 'lucide-react'
const ORGAN_MODELS = [
  {
    id: 'brain',
    file: '/models/human-brain.glb',
    position: [0, 1.75, 0.05],
    scale: 0.15,
    rotation: [0, -1.5, 0],
    color: '#ff66c4',
    emissive: '#ff2288'
  },
  {
    id: 'heart',
    file: '/models/realistic_human_heart.glb',
    position: [0, 1.1, 0.10],
    scale: 0.15,
    color: '#aa1144',
    emissive: '#ff5588'
  },
  {
    id: 'liver',
    file: '/models/human_liver_and_gallbladder.glb',
    position: [-0.07, 0.80, 0.1],
    rotation: [0, -1.5, 0],
    scale: 1,
    color: '#dd3366',
    emissive: '#ff77aa'
  },
  {
    id: 'kidney',
    file: '/models/human_kidney.glb',
    position: [0, 0.67, 0.04],
    scale: 0.1,
    color: '#550000',
    emissive: '#880011'
  },
  {
    id: 'intestine',
    file: '/models/small_and_large_intestine.glb',
    position: [-0.16, 0.45, 0.1],
    scale: 0.3,
    color: '#aa1144',
    emissive: '#ff5588'
  },
  {
    id: 'dna',
    file: '/models/dna.glb',
    position: [-0.50, 0.85, -0.13],
    rotation: [0.6, 0.75, 1.4],
    scale: 0.00007,
    color: '#ff2288',
    emissive: '#ff44aa'
  },
  {
    id: 'cell',
    file: '/models/eukaryotic_cell.glb',
    position: [0.55, 0.85, 0.0],
    rotation: [0, 1.5, 1.5],
    scale: 0.06,
    color: '#0044ff',
    emissive: '#0088ff'
  }
]

const CATEGORIES = [
  {
    id: 'neurology',
    label: 'Neurology',
    icon: '🧠',
    position: [0, 1.75, 0.05],
    shows: ['brain'],
    mobileOffsetY: 0.1, // Look even lower to push the brain up
    subHotspots: [
      { id: 'neural', label: 'Neural Zoomer', position: [0.08, 1.83, 0.15], focusOrgan: 'brain' },
      { id: 'neurotrans', label: 'Neurotransmitters', position: [0.08, 1.71, 0.15], focusOrgan: 'brain' }
    ]
  },
  {
    id: 'hormones',
    label: 'Hormones',
    icon: '♂️',
    position: [0, 1.21, 0.04],
    shows: ['brain', 'kidney'],
    zoomOffset: 4.8, // Ditarik lebih jauh lagi mundurnya karena otak+ginjal terlalu besar pas di-zoom
    subHotspots: [
      { id: 'hormone_z', label: 'Hormones Zoomer', position: [0.12, 1.65, 0.15], focusOrgan: 'brain' } // Pituitary gland
    ]
  },
  {
    id: 'cardiovascular',
    label: 'Cardiovascular',
    icon: '🤍',
    position: [0, 1.1, 0.10],
    shows: ['heart'],
    mobileOffsetY: 0.1, // Push heart up slightly
    subHotspots: [
      { id: 'cardio', label: 'Cardio Zoomer', position: [0.08, 1.15, 0.15], focusOrgan: 'heart' }
    ]
  },
  {
    id: 'toxins',
    label: 'Toxins',
    icon: '🧪',
    position: [-0.07, 0.80, 0.1],
    shows: ['liver', 'kidney'],
    mobileOffsetY: 0, // Push toxins panel up slightly
    subHotspots: [
      { id: 'toxins_panel', label: 'Toxins Panel', position: [-0.15, 0.72, 0.15], focusOrgan: 'liver' }
    ]
  },
  {
    id: 'gut_health',
    label: 'Gut Health',
    icon: '🦠',
    position: [-0.05, 0.65, 0.1], // Pusat kamera dinaikkan ke atas
    shows: ['intestine', 'kidney', 'liver'],
    mobileOffsetY: -0.1, // Push toxins panel up slightly
    zoomOffset: 2, // Ditarik mundur sedikit agar gabungan organ saluran cerna tidak kepotong
    subHotspots: [
      { id: 'food', label: 'Food Sensitivity', position: [-0.05, 0.82, 0.12], focusOrgan: 'intestine' },
      { id: 'gutzoomer', label: 'Gut Zoomer', position: [0.08, 0.65, 0.12], focusOrgan: 'intestine' }
    ]
  },
  {
    id: 'genetics',
    label: 'Genetics',
    icon: '🧬',
    position: [-0.50, 0.85, -0.1],
    shows: ['dna'],
    mobileOffsetX: -0.1, // Geser kamera lebih ke kiri agar DNA yang melengkung bisa pas di tengah
    subHotspots: [
      { id: 'genetics_test', label: 'Genetics Testing Suite', position: [-0.38, 0.85, 0.0], focusOrgan: 'dna' }
    ]
  },
  {
    id: 'longevity',
    label: 'Longevity',
    icon: '🧫',
    position: [0.55, 0.85, 0.0],
    shows: ['cell'],
    zoomOffset: 0.25, // Diubah ke 0.25 karena pembatas minimum jarak kamera sudah di lepas
    subHotspots: [
      { id: 'oxi', label: 'Oxidative Stress', position: [0.54, 0.85, 0.08], focusOrgan: 'cell' },
      { id: 'nutri', label: 'Nutrition', position: [0.53, 0.83, 0.08], focusOrgan: 'cell' },
      { id: 'auto', label: 'Autoimmunity', position: [0.55, 0.81, 0.08], focusOrgan: 'cell' }
    ]
  }
]

// Component to handle smooth camera flying to active targets
function CameraAnimator({ activeCategoryId, activeSubHotspotId, categories, controlsRef }) {
  const targetPos = useRef(new THREE.Vector3(0, 0.4, 5.0))
  const targetLook = useRef(new THREE.Vector3(0, 0.8, 0))
  const isAnimating = useRef(false)

  useEffect(() => {
    const activeData = categories.find(c => c.id === activeCategoryId)
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768

    if (activeData) {
      const zoomZ = activeData.zoomOffset !== undefined ? activeData.zoomOffset : 1.0

      const customOffsetY = activeData.mobileOffsetY || 0
      const customOffsetX = activeData.mobileOffsetX || 0

      if (activeSubHotspotId) {
        if (isMobile) {
          // Mobile: organ stays centered — no X-shift except explicit per-organ horizontal custom shifts.
          targetLook.current.set(activeData.position[0] + customOffsetX, activeData.position[1] - 0.25 + customOffsetY, activeData.position[2])
          // Zoom in closer (1.1) so the organ looks big and clear
          targetPos.current.set(activeData.position[0] + customOffsetX, activeData.position[1] - 0.25 + customOffsetY, activeData.position[2] + zoomZ * 1.1)
        } else {
          const dynamicShift = 0.18 * zoomZ
          const shiftX = Math.min(Math.max(dynamicShift, 0.05), 0.20)
          targetLook.current.set(activeData.position[0] - shiftX, activeData.position[1], activeData.position[2])
          targetPos.current.set(activeData.position[0] - shiftX, activeData.position[1] - 0.05, activeData.position[2] + zoomZ * 0.44)
        }
      } else {
        targetLook.current.set(activeData.position[0], activeData.position[1], activeData.position[2])
        targetPos.current.set(activeData.position[0], activeData.position[1] - 0.05, activeData.position[2] + zoomZ)
      }
    } else {
      // In overview mode, aim camera slightly higher on mobile to ensure the head isn't clipped
      const overviewY = isMobile ? 1.05 : 0.8
      targetLook.current.set(0, overviewY, 0)
      targetPos.current.set(0, overviewY - 0.4, 5.0)
    }
    isAnimating.current = true
  }, [activeCategoryId, activeSubHotspotId, categories])

  useFrame((state, delta) => {
    if (!controlsRef.current) return

    if (isAnimating.current) {
      const step = 0.12
      state.camera.position.lerp(targetPos.current, step)
      controlsRef.current.target.lerp(targetLook.current, step)

      if (
        state.camera.position.distanceTo(targetPos.current) < 0.02 &&
        controlsRef.current.target.distanceTo(targetLook.current) < 0.02
      ) {
        isAnimating.current = false
      }
    } else {
      const swayFactor = activeSubHotspotId ? 0.3 : 0.015
      const parallaxX = state.pointer.x * swayFactor
      const parallaxY = state.pointer.y * swayFactor

      const finalPosX = targetPos.current.x + parallaxX
      const finalPosY = targetPos.current.y + parallaxY

      easing.damp3(state.camera.position, [finalPosX, finalPosY, targetPos.current.z], 0.2, delta)
      controlsRef.current.target.copy(targetLook.current)
    }

    controlsRef.current.update()
  })

  return null
}

function ParallaxGroup({ isZoomed, children }) {
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (!groupRef.current) return

    // Kunci rotasi ke 0,0,0 (diam total) kalau lagi nge-zoom organ biar button-nya nggak lari-lari
    if (isZoomed) {
      easing.dampE(groupRef.current.rotation, [0, 0, 0], 0.15, delta)
      return
    }

    // Goyangan parallax tipis pas layar utama Explore penuh
    const factor = 35

    // Y inverted for natural up/down tilt, X for left/right
    const targetX = (state.pointer.y * Math.PI) / factor
    const targetY = (state.pointer.x * Math.PI) / factor

    easing.dampE(
      groupRef.current.rotation,
      [targetX, targetY, 0],
      0.15,
      delta
    )
  })

  return <group ref={groupRef}>{children}</group>
}

export default function Explore() {
  const navigate = useNavigate()
  const [sex, setSex] = useState('female')
  const [activeOrgan, setActiveOrgan] = useState(null)
  const [hoveredOrgan, setHoveredOrgan] = useState(null)
  const [activeSubHotspot, setActiveSubHotspot] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [isMobileView, setIsMobileView] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  )

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Custom artificial delay to let user admire the splash screen
  const [minDelayPassed, setMinDelayPassed] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinDelayPassed(true)
    }, 2800)
    return () => clearTimeout(timer)
  }, [])

  const isAppReady = loaded && minDelayPassed

  const controlsRef = useRef()

  // Background Music BGM Logic (Web Audio API to bypass IDM download hijackers)
  const [isSoundOn, setIsSoundOn] = useState(true)
  const audioCtxRef = useRef(null)
  const isMusicLoaded = useRef(false)

  // Auto-start music when app becomes ready
  useEffect(() => {
    if (!isAppReady) return
    const autoPlay = async () => {
      if (isMusicLoaded.current) return
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)()
        audioCtxRef.current = ctx
        const response = await fetch('/models/Music.mp3')
        const arrayBuffer = await response.arrayBuffer()
        const audioBuffer = await ctx.decodeAudioData(arrayBuffer)
        const sourceNode = ctx.createBufferSource()
        sourceNode.buffer = audioBuffer
        sourceNode.loop = true
        sourceNode.connect(ctx.destination)
        sourceNode.start(0)
        isMusicLoaded.current = true
        // ctx starts in 'running' state — music plays immediately
      } catch (e) {
        console.warn("BGM autoplay failed (browser policy):", e)
        setIsSoundOn(false)
      }
    }
    autoPlay()
  }, [isAppReady])

  const toggleSound = async () => {
    if (!audioCtxRef.current) return
    if (isSoundOn) {
      if (audioCtxRef.current.state === 'running') await audioCtxRef.current.suspend()
      setIsSoundOn(false)
    } else {
      if (audioCtxRef.current.state === 'suspended') await audioCtxRef.current.resume()
      setIsSoundOn(true)
    }
  }

  // Handle Tab Switch (Pause Audio strictly via AudioContext suspension)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!audioCtxRef.current || !isMusicLoaded.current) return
      if (document.hidden) {
        audioCtxRef.current.suspend()
      } else if (isSoundOn) {
        audioCtxRef.current.resume()
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [isSoundOn])

  // Navigation Logic
  const activeIndex = activeOrgan ? CATEGORIES.findIndex(c => c.id === activeOrgan) : -1
  const prevCat = activeIndex <= 0 ? CATEGORIES[CATEGORIES.length - 1] : CATEGORIES[activeIndex - 1]
  const nextCat = activeIndex >= CATEGORIES.length - 1 || activeIndex === -1 ? CATEGORIES[0] : CATEGORIES[activeIndex + 1]

  const handlePrev = () => setActiveOrgan(prevCat.id)
  const handleNext = () => setActiveOrgan(nextCat.id)

  const closeSubHotspot = () => setActiveSubHotspot(null)
  const closeOrganZoom = () => { setActiveOrgan(null); setActiveSubHotspot(null); }

  return (
    <div className={`app-wrapper explore-page${activeSubHotspot ? ' subhotspot-active' : ''}`}>
      {/* SplashScreen Preloader Overlay */}
      <SplashScreen isLoading={!isAppReady} />

      {/* Crosshair cursor – top of everything, only show when loaded */}
      {isAppReady && <CrosshairCursor />}

      {/* Animated bubble gradient background */}
      <BubbleBg showBubbles={!activeOrgan} />

      {/* Logo */}
      <div className="logo">
        <div className="logo-icon">
          <img src="/somalab_logo.png" alt="SomaLab" style={{ height: '32px', objectFit: 'contain' }} />
        </div>
        <div className="logo-text">Soma<span>Lab</span></div>
      </div>

      {/* ══ DESKTOP LAYOUT ══ */}

      {/* Floating Home Button – desktop only */}
      {!activeOrgan && (
        <button className="home-btn-float desktop-only" onClick={() => navigate('/')} title="Kembali ke Landing Page">
          <Home size={22} strokeWidth={2.5} />
        </button>
      )}

      {/* Sex toggle header – desktop only */}
      {!activeSubHotspot && (
        <div className="header explore-header desktop-only">
          <div className="sex-toggle">
            <button className={`sex-btn${sex === 'female' ? ' active' : ''}`} onClick={() => setSex('female')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="8" r="5" /><line x1="12" y1="13" x2="12" y2="21" /><line x1="9" y1="18" x2="15" y2="18" />
              </svg>
              Female
            </button>
            <button className={`sex-btn${sex === 'male' ? ' active' : ''}`} onClick={() => setSex('male')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="10" cy="14" r="5" /><line x1="14" y1="10" x2="21" y2="3" /><polyline points="16 3 21 3 21 8" />
              </svg>
              Male
            </button>
          </div>
        </div>
      )}

      {/* Back to Body button – desktop only */}
      <div className={`back-zoom-overlay desktop-only ${activeOrgan && !activeSubHotspot ? 'visible' : ''}`}>
        <button className="back-zoom-btn" onClick={closeOrganZoom}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          Back to Body
        </button>
      </div>

      {/* Sound toggle – desktop only */}
      <div className="footer-left desktop-only">
        <div className="sound-toggle" onClick={toggleSound} style={{ cursor: 'pointer' }}>
          {isSoundOn ? (
            <div className="music-wave-container">
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
            </div>
          ) : (
            <span className="dots">. . . . . . </span>
          )}
          <div className="sound-pill">SOUND {isSoundOn ? 'ON' : 'OFF'}</div>
        </div>
      </div>

      {/* ══ MOBILE LAYOUT — Unified Control Pill ══ */}
      {!activeSubHotspot && (
        <div className="mobile-ctrl-pill mobile-only">
          {/* Left icon: Back (when zoomed) or Home (when not) */}
          {activeOrgan ? (
            <button className="mob-icon-btn" onClick={closeOrganZoom} aria-label="Back to body">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          ) : (
            <button className="mob-icon-btn" onClick={() => navigate('/')} aria-label="Go home">
              <Home size={15} strokeWidth={2.5} />
            </button>
          )}

          {/* Divider */}
          <div className="mob-divider" />

          {/* Sex toggle — flat buttons inside the pill */}
          <button
            className={`mob-sex-btn${sex === 'female' ? ' active' : ''}`}
            onClick={() => setSex('female')}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="8" r="5" /><line x1="12" y1="13" x2="12" y2="21" /><line x1="9" y1="18" x2="15" y2="18" />
            </svg>
            Female
          </button>
          <button
            className={`mob-sex-btn${sex === 'male' ? ' active' : ''}`}
            onClick={() => setSex('male')}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="10" cy="14" r="5" /><line x1="14" y1="10" x2="21" y2="3" /><polyline points="16 3 21 3 21 8" />
            </svg>
            Male
          </button>

          {/* Divider */}
          <div className="mob-divider" />

          {/* Music icon */}
          <button
            className={`mob-icon-btn mob-music-btn ${isSoundOn ? 'music-on' : 'music-off'}`}
            onClick={toggleSound}
            aria-label={isSoundOn ? 'Mute music' : 'Play music'}
          >
            {isSoundOn ? (
              <div className="music-wave-mini">
                <span /><span /><span /><span />
              </div>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="1" y1="1" x2="23" y2="23" /><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
                <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Dynamic Content based on active state */}
      <Sidebar
        organs={CATEGORIES}
        activeOrgan={activeOrgan}
        onSelect={setActiveOrgan}
        onHover={setHoveredOrgan}
      />

      {/* THREE.js Canvas for Body Model */}
      <div className="canvas-container">
        <Canvas
          camera={{ position: [0, 0.4, 5.0], fov: 38 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} color="#c8d8ff" />
            <directionalLight position={[3, 5, 3]} intensity={0.3} color="#ffffff" />
            <pointLight position={[0, 3, 2]} intensity={0.2} color="#a0c0ff" />

            <Environment preset="studio" />

            <CameraAnimator
              activeCategoryId={activeOrgan}
              activeSubHotspotId={activeSubHotspot}
              categories={CATEGORIES}
              controlsRef={controlsRef}
            />

            <ParallaxGroup isZoomed={!!activeOrgan}>
              <group visible={!activeSubHotspot}>
                <BodyModel
                  sex={sex}
                  onLoaded={() => setLoaded(true)}
                  activeOrgan={activeOrgan}
                  hoveredOrgan={hoveredOrgan}
                />
              </group>

              <InternalOrgans
                models={ORGAN_MODELS}
                categories={CATEGORIES}
                activeCategoryId={activeOrgan}
                hoveredCategoryId={hoveredOrgan}
                activeSubHotspotId={activeSubHotspot}
              />

              <group visible={!activeSubHotspot}>
                <OrganHotspots
                  organs={CATEGORIES}
                  activeOrgan={activeOrgan}
                  onSelect={setActiveOrgan}
                  onHover={setHoveredOrgan}
                  onSubSelect={setActiveSubHotspot}
                  activeSubHotspotId={activeSubHotspot}
                />
              </group>
            </ParallaxGroup>

            {/* Always mount EffectComposer to prevent WebGL pipeline crashes when resizing from Desktop to Mobile, but zero out the intensities on mobile to disable the blur. */}
            <EffectComposer>
              <Bloom
                intensity={isMobileView ? 0 : 0.6}
                luminanceThreshold={0.4}
                luminanceSmoothing={0.9}
                radius={0.8}
              />
              <Vignette eskil={false} offset={0.15} darkness={isMobileView ? 0 : 0.4} />
            </EffectComposer>

            <OrbitControls
              ref={controlsRef}
              enablePan={false}
              enableZoom={!activeSubHotspot}
              enableRotate={false}
              minPolarAngle={Math.PI * 0.1}
              maxPolarAngle={Math.PI * 0.9}
              // Removed the restricting 1.2 minDistance to allow extreme zoom on cell
              minDistance={0.15}
              maxDistance={3.8}
              autoRotate={!activeOrgan && !hoveredOrgan}
              autoRotateSpeed={0.4}
              // Sighted the pivot target at the chest level
              target={[0, 0.8, 0]}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="footer-center">
        Created BY <strong>Team WIWYM.</strong>
      </div>

      {/* Main Glass Bottom Bar */}
      <div className={`bottom-bar-container ${activeOrgan && !activeSubHotspot ? 'visible' : ''}`}>
        <div className="bottom-bar-glass">
          <button className="nav-action-btn solid mobile-only" onClick={handlePrev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div className="active-pill-solid">
            {activeOrgan && (
              <>
                <span className="icon desktop-only">{CATEGORIES[activeIndex].icon}</span>
                <span className="label mobile-text-center">{CATEGORIES[activeIndex].label}</span>
              </>
            )}
          </div>

          <div className="nav-controls desktop-only">
            <div className="nav-btn-wrapper">
              <div className="nav-tooltip">
                <span className="tooltip-sub">PREV</span>
                <span className="tooltip-title">{prevCat.label}</span>
              </div>
              <button className="nav-action-btn solid" onClick={handlePrev}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
            </div>
            <div className="nav-btn-wrapper">
              <div className="nav-tooltip">
                <span className="tooltip-sub">NEXT</span>
                <span className="tooltip-title">{nextCat.label}</span>
              </div>
              <button className="nav-action-btn solid" onClick={handleNext}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>

          <button className="nav-action-btn solid mobile-only" onClick={handleNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>

      {/* Sub-Hotspot Info Sidebar */}
      {activeSubHotspot && (
        <SubHotspotInfoView
          subHotspotId={activeSubHotspot}
          categoryData={CATEGORIES.find(c => c.id === activeOrgan)}
          onClose={closeSubHotspot}
        />
      )}
    </div>
  )
}

import { useState, Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, Environment, Stars } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { easing } from 'maath'
import BodyModel from './components/BodyModel'
import OrganHotspots from './components/OrganHotspots'
import Sidebar from './components/Sidebar'
import InternalOrgans from './components/InternalOrgans'
import SubHotspotInfoView from './components/SubHotspotInfoView'
import ParticleBg from './components/ParticleBg'
import './index.css'

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
    zoomOffset: 3.2, // Ditarik mundur supaya tidak terlalu dekat
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
    if (activeData) {
      const zoomZ = activeData.zoomOffset !== undefined ? activeData.zoomOffset : 1.0

      if (activeSubHotspotId) {
        // Shift camera proportionally to the zoom level so extremely zoomed models (like the Longevity Cell) aren't pushed completely off the visible screen frustum
        const dynamicShift = 0.35 * zoomZ
        const shiftX = Math.min(Math.max(dynamicShift, 0.08), 0.35)

        targetLook.current.set(activeData.position[0] - shiftX, activeData.position[1], activeData.position[2])
        targetPos.current.set(activeData.position[0] - shiftX, activeData.position[1] - 0.05, activeData.position[2] + zoomZ * 0.9)
      } else {
        targetLook.current.set(...activeData.position)
        targetPos.current.set(activeData.position[0], activeData.position[1] - 0.05, activeData.position[2] + zoomZ)
      }
    } else {
      targetLook.current.set(0, 0.8, 0)
      targetPos.current.set(0, 0.4, 5.0)
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
      // Apply smooth Camera Positional Sway Parallax (No Object Rotation)
      // Sengaja dikunci sangat kaku (0.015) saat belum Overview agar tombol yang letaknya di pinggir seperti Longevity gampang diklik (menghindari "cat and mouse")
      const swayFactor = activeSubHotspotId ? 0.3 : 0.015

      const parallaxX = state.pointer.x * swayFactor
      const parallaxY = state.pointer.y * swayFactor

      const finalPosX = targetPos.current.x + parallaxX
      const finalPosY = targetPos.current.y + parallaxY

      // Damp camera position directly with snappy time configuration (0.2)
      easing.damp3(state.camera.position, [finalPosX, finalPosY, targetPos.current.z], 0.2, delta)
      controlsRef.current.target.copy(targetLook.current)
    }

    controlsRef.current.update()
  })

  return null
}

// Component to handle smooth mouse parallax tracking
// Refactored to transfer physics back to CameraAnimator instead of Obj-Rotation
function ParallaxGroup({ isOverview, children }) {
  return <group>{children}</group>
}

export default function App() {
  const [sex, setSex] = useState('female')
  const [activeOrgan, setActiveOrgan] = useState(null)
  const [hoveredOrgan, setHoveredOrgan] = useState(null)
  const [activeSubHotspot, setActiveSubHotspot] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const controlsRef = useRef()

  // Background Music BGM Logic (Web Audio API to bypass IDM download hijackers)
  const [isSoundOn, setIsSoundOn] = useState(false)
  const audioCtxRef = useRef(null)
  const isMusicLoaded = useRef(false)

  const toggleSound = async () => {
    // Initialize Web Audio Context dynamically on first user interaction
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }

    if (!isMusicLoaded.current) {
      try {
        const response = await fetch('/models/Music.mp3')
        const arrayBuffer = await response.arrayBuffer()
        const audioBuffer = await audioCtxRef.current.decodeAudioData(arrayBuffer)
        
        const sourceNode = audioCtxRef.current.createBufferSource()
        sourceNode.buffer = audioBuffer
        sourceNode.loop = true
        sourceNode.connect(audioCtxRef.current.destination)
        sourceNode.start(0)
        isMusicLoaded.current = true
        
        // Start in suspended mode so we can resume explicitly
        await audioCtxRef.current.suspend()
      } catch (e) {
        console.error("Gagal memuat BGM via Web Audio API:", e)
      }
    }

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
    <div className="app-wrapper">
      {/* Loading screen */}
      <div className={`loading-screen${loaded ? ' hidden' : ''}`}>
        <div className="loading-spinner" />
        <div className="loading-text">Loading 3D Experience…</div>
      </div>

      {/* Particle CSS background */}
      <ParticleBg />

      {/* Logo */}
      <div className="logo">
        <div className="logo-icon">
          {/* A simple placeholder logo icon matching VibrantWellness (3 dots) */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="6" r="3" fill="#1a1a3a" />
            <circle cx="6" cy="16" r="3" fill="#1a1a3a" />
            <circle cx="18" cy="16" r="3" fill="#1a1a3a" />
            <path d="M12 9L7 14M12 9L17 14M7 14L17 14" stroke="#1a1a3a" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="logo-text">Vibrant<span>Wellness</span></div>
      </div>

      {/* Sex toggle header */}
      <div className="header">
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

            <ParallaxGroup isOverview={!!activeSubHotspot}>
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

            <EffectComposer>
              <Bloom
                intensity={0.6}
                luminanceThreshold={0.4}
                luminanceSmoothing={0.9}
                radius={0.8}
              />
              <Vignette eskil={false} offset={0.15} darkness={0.4} />
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

      <div className="footer-left">
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

      <div className="footer-right">
        CREATED BY <strong>noomo</strong> <em>agency</em>
      </div>

      {/* Top Left Back Button when Zoomed In */}
      <div className={`back-zoom-overlay ${activeOrgan && !activeSubHotspot ? 'visible' : ''}`}>
        <button className="back-zoom-btn" onClick={closeOrganZoom}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          Back to Body
        </button>
      </div>

      {/* Main Glass Bottom Bar */}
      <div className={`bottom-bar-container ${activeOrgan && !activeSubHotspot ? 'visible' : ''}`}>
        <div className="bottom-bar-glass">
          <div className="active-pill-solid">
            {activeOrgan && (
              <>
                <span className="icon">{CATEGORIES[activeIndex].icon}</span>
                <span className="label">{CATEGORIES[activeIndex].label}</span>
              </>
            )}
          </div>

          <div className="nav-controls">
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

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Content from './pages/Content'
import Contact from './pages/Contact'
import Explore from './pages/Explore'

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/content" element={<Content />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
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

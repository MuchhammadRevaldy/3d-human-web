import React, { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import PageTransition from '../components/PageTransition';
import BodyModel from '../components/BodyModel';
import ParticleBg from '../components/ParticleBg';
import '../index.css';

export default function Home() {
  const [modelSex, setModelSex] = useState('female');

  return (
    <PageTransition>
      <div className="home-scroll-page">
        {/* HERO SECTION */}
        <div className="home-page-container">
          <ParticleBg />
          <div className="home-bg-glow"></div>
          
          <div className="home-content">
            <div className="home-text-section">
              <h1 className="home-headline">
                Explore Human Anatomy at <span className="highlight">Your Fingertips</span>
              </h1>
              <p className="home-value-prop">
                Interactive 3D visualization provides a profound understanding of the human body. Gain valuable insights into organ systems, identify early biomarkers, and explore complex systemic conditions through our comprehensive, medically-accurate 3D platform.
              </p>
              <div className="home-cta-group">
                <Link to="/explore" className="btn-primary-large">
                  Start 3D Exploration
                </Link>
                <Link to="/about" className="btn-secondary-large">
                  Learn More
                </Link>
              </div>
              
              <div className="home-features-pill">
                <div className="pill-item">
                  <span className="pill-icon">🧠</span> Precise Models
                </div>
                <div className="pill-item">
                  <span className="pill-icon">🧬</span> In-depth Systems
                </div>
                <div className="pill-item">
                  <span className="pill-icon">🔬</span> Clinical Insights
                </div>
              </div>
            </div>
            
            <div className="home-3d-preview">
              <div className="preview-canvas-wrapper">
                <div className="preview-glow-bg"></div>
                <Canvas
                  camera={{ position: [0, 0.6, 3.5], fov: 40 }}
                  gl={{ antialias: true, alpha: true }}
                  style={{ zIndex: 10 }}
                >
                  <Suspense fallback={null}>
                    <ambientLight intensity={0.4} color="#c8d8ff" />
                    <directionalLight position={[3, 5, 3]} intensity={0.5} color="#ffffff" />
                    <pointLight position={[0, 3, 2]} intensity={0.3} color="#a0c0ff" />
                    <Environment preset="studio" />
                    
                    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                      <group position={[0, -0.6, 0]}>
                        <BodyModel sex={modelSex} />
                      </group>
                    </Float>
                    
                    <OrbitControls 
                      enableZoom={false} 
                      enablePan={false} 
                      autoRotate 
                      autoRotateSpeed={1.5}
                      minPolarAngle={Math.PI / 2.5}
                      maxPolarAngle={Math.PI / 1.5}
                    />
                  </Suspense>
                </Canvas>
                
                <div className="preview-glass-overlay" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                  <div className="gender-toggle-container">
                    <button 
                      className={`gender-btn ${modelSex === 'male' ? 'active' : ''}`}
                      onClick={() => setModelSex('male')}
                    >
                      Male
                    </button>
                    <button 
                      className={`gender-btn ${modelSex === 'female' ? 'active' : ''}`}
                      onClick={() => setModelSex('female')}
                    >
                      Female
                    </button>
                  </div>
                  <div className="glass-indicator">
                    <div className="indicator-dot"></div> Live 3D Render
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .gender-toggle-container {
            display: flex;
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 30px;
            padding: 4px;
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
            z-index: 20;
          }
          
          .gender-btn {
            background: transparent;
            border: none;
            padding: 8px 20px;
            border-radius: 26px;
            font-size: 0.9rem;
            font-weight: 700;
            color: #4a5a7a;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .gender-btn:hover {
            color: #1a1a3a;
          }
          
          .gender-btn.active {
            background: #ffffff;
            color: #0077ff;
            box-shadow: 0 4px 12px rgba(0, 119, 255, 0.15);
          }
        `}</style>

        {/* FEATURES SECTION */}
        <section className="discover-section">
          <div className="discover-content">
            <div className="discover-header">
              <h2>Why Choose SomaLab?</h2>
              <p>Our platform goes beyond traditional 2D textbooks, offering an unprecedented level of clinical depth and interactivity.</p>
            </div>
            
            <div className="features-grid">
              <div className="feature-box">
                <div className="feature-icon-wrapper">🔬</div>
                <h3>Zoom to Cellular Level</h3>
                <p>Seamlessly transition from macro organ structures to microscopic cellular activity and neurotransmitter pathways.</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon-wrapper">⚕️</div>
                <h3>Clinical Biomarkers</h3>
                <p>Visualize early signs of oxidative stress, toxins, and autoimmune markers before clinical diagnosis.</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon-wrapper">🧬</div>
                <h3>Accurate Anatomy</h3>
                <p>Interact with highly detailed 3D models of the brain, heart, liver, digestive tract, and DNA.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER SECTION */}
        <footer className="home-footer">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Soma<span>Lab</span></h3>
              <p>Empowering preventative healthcare through immersive 3D clinical visualization.</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Platform</h4>
                <Link to="/explore">3D Explorer</Link>
                <Link to="/about">About Us</Link>
              </div>
              <div className="footer-col">
                <h4>Resources</h4>
                <Link to="/content">Clinical Articles</Link>
                <Link to="/contact">Contact Support</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} SomaLab. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
}

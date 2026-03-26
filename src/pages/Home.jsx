import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import PageTransition from '../components/PageTransition';
import BodyModel from '../components/BodyModel';
import ParticleBg from '../components/ParticleBg';
import useReveal from '../hooks/useReveal';
import Footer from '../components/Footer';
import '../index.css';

export default function Home() {
  const { t } = useTranslation();
  const heroRef = useReveal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.99 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <PageTransition>
      <div className="home-scroll-page">
        {/* HERO SECTION */}
        <div className="home-page-container">
          <ParticleBg />
          <div className="home-bg-glow"></div>
          
          <div className="home-content" ref={heroRef}>
            <div className="home-text-section">
              <h1 className="home-headline reveal-item reveal-delay-1">
                {t('home.headline')} <span className="highlight">{t('home.highlight')}</span>
              </h1>
              <p className="home-value-prop reveal-item reveal-delay-2">
                {t('home.value_prop')}
              </p>
              <div className="home-cta-group reveal-item reveal-delay-3">
                <Link to="/explore" className="btn-primary-large shimmer-btn">
                  <span>{t('home.cta_explore')}</span>
                  <ArrowRight size={22} className="btn-icon-right" />
                </Link>
                <Link to="/about" className="btn-secondary-large">
                  {t('home.cta_learn')}
                </Link>
              </div>
              
              <div className="home-features-pill">
                <div className="pill-item reveal-item reveal-delay-4">
                  <span className="pill-icon">🧠</span> {t('home.pill_precise')}
                </div>
                <div className="pill-item reveal-item reveal-delay-5">
                  <span className="pill-icon">🧬</span> {t('home.pill_depth')}
                </div>
                <div className="pill-item reveal-item reveal-delay-6">
                  <span className="pill-icon">🔬</span> {t('home.pill_clinical')}
                </div>
              </div>
            </div>
            
            <div className="home-3d-preview reveal-item reveal-delay-2">
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
                        <BodyModel sex="female" />
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
                
                <div className="preview-glass-overlay">
                  <div className="glass-indicator">
                    <div className="indicator-dot"></div> Live 3D Render
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <section className="discover-section">
          <motion.div 
            className="discover-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="discover-header">
              <motion.h2 variants={itemVariants}>{t('home.why_title')}</motion.h2>
              <motion.p variants={itemVariants}>{t('home.why_subtitle')}</motion.p>
            </div>
            
            <div className="features-grid">
              <motion.div className="feature-box" variants={itemVariants}>
                <div className="feature-icon-wrapper">🔬</div>
                <h3>{t('home.feat1_title')}</h3>
                <p>{t('home.feat1_desc')}</p>
              </motion.div>
              <motion.div className="feature-box" variants={itemVariants}>
                <div className="feature-icon-wrapper">⚕️</div>
                <h3>{t('home.feat2_title')}</h3>
                <p>{t('home.feat2_desc')}</p>
              </motion.div>
              <motion.div className="feature-box" variants={itemVariants}>
                <div className="feature-icon-wrapper">🧬</div>
                <h3>{t('home.feat3_title')}</h3>
                <p>{t('home.feat3_desc')}</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Global Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
}

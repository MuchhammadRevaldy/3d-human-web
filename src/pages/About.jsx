import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import { Eye, Target, Lightbulb, ArrowRight, Microscope, BookOpen } from 'lucide-react';
import Footer from '../components/Footer';
import useReveal from '../hooks/useReveal';

export default function About() {
  const { t } = useTranslation();
  const heroRef = useReveal();
  const storyRef = useReveal();

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
      <div className="about-page-container">
        {/* Decorative Background Blobs */}
        <div className="about-bg-blob blob-1"></div>
        <div className="about-bg-blob blob-2"></div>
        
        <div className="about-content-wrapper">
          
          {/* Hero Section */}
          <div className="about-hero" ref={heroRef}>
            <div className="about-badge reveal-item">{t('about.badge')}</div>
            <div className="hero-content">
              <div className="hero-icon-wrapper reveal-item reveal-delay-1">
                <BookOpen size={48} />
              </div>
              <h1 className="about-title reveal-item reveal-delay-2">
                {t('about.title')} <span className="text-gradient">{t('about.title_highlight')}</span> {t('about.title_suffix')}
              </h1>
              <p className="about-subtitle reveal-item reveal-delay-3">
                {t('about.subtitle')}
              </p>
            </div>
          </div>

          {/* Main Story Section */}
          <div className="about-story-grid" ref={storyRef}>
            <div className="story-text-card glass-panel reveal-item">
              <h2 className="story-heading">{t('about.story_title')}</h2>
              <p>
                {t('about.story_p1')}
              </p>
              <p>
                {t('about.story_p2')}
              </p>
            </div>
            <div className="story-visual-card reveal-item reveal-delay-2">
               <div className="visual-glass-element">
                  <Microscope className="visual-icon" size={64} />
                  <div className="visual-text" dangerouslySetInnerHTML={{ __html: t('about.visual_explore').replace(' ', '<br/>') }}></div>
               </div>
            </div>
          </div>

          {/* Core Pillars */}
          <motion.div 
            className="about-pillars-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="about-pillars-header">
              <motion.h2 variants={itemVariants}>{t('about.pillars_title')}</motion.h2>
              <motion.p variants={itemVariants}>{t('about.pillars_subtitle')}</motion.p>
            </div>

            <div className="about-pillars-grid">
              <motion.div className="pillar-card glass-panel interactive-card" variants={itemVariants}>
                <div className="pillar-icon-wrapper bg-blue-tint">
                  <Eye size={28} className="text-blue" />
                </div>
                <h3>{t('about.vision_title')}</h3>
                <p>
                  {t('about.vision_desc')}
                </p>
              </motion.div>
              
              <motion.div className="pillar-card glass-panel interactive-card" variants={itemVariants}>
                <div className="pillar-icon-wrapper bg-purple-tint">
                  <Target size={28} className="text-purple" />
                </div>
                <h3>{t('about.mission_title')}</h3>
                <ul className="mission-list">
                  <li><ArrowRight size={16} /> {t('about.mission_item1')}</li>
                  <li><ArrowRight size={16} /> {t('about.mission_item2')}</li>
                  <li><ArrowRight size={16} /> {t('about.mission_item3')}</li>
                </ul>
              </motion.div>

              <motion.div className="pillar-card glass-panel interactive-card" variants={itemVariants}>
                <div className="pillar-icon-wrapper bg-cyan-tint">
                  <Lightbulb size={28} className="text-cyan" />
                </div>
                <h3>{t('about.why_title')}</h3>
                <p>
                  {t('about.why_desc')}
                </p>
              </motion.div>
            </div>
          </motion.div>
          
        </div>

        <style>{`
          .about-page-container {
            position: relative;
            min-height: 100vh;
            padding: 120px 20px 80px;
            font-family: 'Inter', sans-serif;
          }

          .about-bg-blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            z-index: 0;
            opacity: 0.6;
            pointer-events: none;
          }
          .blob-1 { top: -50px; left: -100px; width: 450px; height: 450px; background: rgba(91, 156, 246, 0.35); }
          .blob-2 { bottom: 50px; right: -100px; width: 500px; height: 500px; background: rgba(167, 139, 250, 0.25); }

          .about-content-wrapper {
            position: relative;
            z-index: 10;
            max-width: 1100px;
            margin: 0 auto;
          }

          .about-hero {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 70px;
          }
          .about-badge {
            display: inline-block;
            padding: 6px 18px;
            background: rgba(255, 255, 255, 0.6);
            border: 1px solid rgba(255, 255, 255, 1);
            border-radius: 30px;
            font-size: 0.85rem;
            font-weight: 700;
            color: #0077ff;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            margin-bottom: 24px;
            backdrop-filter: blur(12px);
            box-shadow: 0 4px 15px rgba(0, 119, 255, 0.1);
          }
          .about-title {
            font-size: 3.8rem;
            font-weight: 800;
            line-height: 1.15;
            color: #1a1a3a;
            margin-bottom: 24px;
            letter-spacing: -0.02em;
          }
          .text-gradient {
            background: linear-gradient(135deg, #0077ff 0%, #a78bfa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
          }
          .about-subtitle {
            font-size: 1.25rem;
            line-height: 1.7;
            color: #4a5a7a;
            max-width: 700px;
            margin: 0 auto;
          }

          .glass-panel {
            background: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            border-radius: 28px;
            box-shadow: 0 20px 50px rgba(0, 50, 150, 0.04);
          }

          .about-story-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 30px;
            margin-bottom: 100px;
          }
          @media (max-width: 850px) {
            .about-story-grid { grid-template-columns: 1fr; }
            .about-title { font-size: 2.8rem; }
            .story-text-card { padding: 30px !important; }
          }
          .story-text-card { padding: 50px; }
          .story-heading { font-size: 2.2rem; font-weight: 800; color: #1a1a3a; margin-bottom: 24px; }
          .story-text-card p { font-size: 1.1rem; line-height: 1.75; color: #4a5a7a; margin-bottom: 20px; }
          
          .story-visual-card {
            background: linear-gradient(135deg, #0077ff 0%, #00d2ff 100%);
            border-radius: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            min-height: 350px;
            box-shadow: 0 24px 50px rgba(0, 119, 255, 0.25);
          }
          .visual-glass-element {
            z-index: 2;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            padding: 40px;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 210px;
            height: 210px;
            color: white;
            transition: transform 0.3s ease;
          }
          .visual-icon { margin-bottom: 16px; opacity: 0.9; }
          .visual-text { font-weight: 700; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; text-align: center; }

          .about-pillars-header { text-align: center; margin-bottom: 40px; }
          .about-pillars-header h2 { font-size: 2.8rem; font-weight: 800; color: #1a1a3a; margin-bottom: 12px; }
          .about-pillars-header p { font-size: 1.15rem; color: #5a6a8a; }

          .about-pillars-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
          @media (max-width: 950px) { .about-pillars-grid { grid-template-columns: 1fr; } }
          
          .pillar-card {
            padding: 45px 35px;
            display: flex;
            flex-direction: column;
            border: 1px solid rgba(255, 255, 255, 0.9);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .interactive-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 30px 60px rgba(0, 50, 150, 0.08);
            background: rgba(255, 255, 255, 0.9);
          }
          .pillar-icon-wrapper {
            width: 64px; height: 64px; border-radius: 18px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 24px;
          }
          .bg-blue-tint { background: rgba(0, 119, 255, 0.12); }
          .text-blue { color: #0077ff; }
          .bg-purple-tint { background: rgba(167, 139, 250, 0.15); }
          .text-purple { color: #8b5cf6; }
          .bg-cyan-tint { background: rgba(0, 210, 255, 0.15); }
          .text-cyan { color: #00b8d4; }

          .pillar-card h3 { font-size: 1.6rem; font-weight: 800; color: #1a1a3a; margin-bottom: 16px; }
          .pillar-card p { font-size: 1.05rem; line-height: 1.7; color: #4a5a7a; }
          .mission-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .mission-list li { display: flex; align-items: flex-start; gap: 12px; font-size: 1.05rem; color: #4a5a7a; }
          .mission-list li svg { color: #8b5cf6; flex-shrink: 0; margin-top: 4px; }
        `}</style>
      </div>
      <Footer />
    </PageTransition>
  );
}

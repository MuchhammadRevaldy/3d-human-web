import PageTransition from '../components/PageTransition';
import { Eye, Target, Lightbulb, ArrowRight, Microscope, BookOpen } from 'lucide-react';
import Footer from '../components/Footer';

export default function About() {
  return (
    <PageTransition>
      <div className="about-page-container">
        {/* Decorative Background Blobs */}
        <div className="about-bg-blob blob-1"></div>
        <div className="about-bg-blob blob-2"></div>
        
        <div className="about-content-wrapper">
          
          {/* Hero Section */}
          <div className="about-hero">
            <div className="about-badge">Discover SomaLab</div>
            <div className="hero-content">
              <div className="hero-icon-wrapper">
                <BookOpen size={48} />
              </div>
              <h1 className="about-title">
                Bridging the Gap Between <span className="text-gradient">Medical Science</span> and You.
              </h1>
              <p className="about-subtitle">
                SomaLab is an interactive digital anatomy and health educational platform designed to provide a deep, accurate, and accessible visualization of the human body's structures and functions.
              </p>
            </div>
          </div>

          {/* Main Story Section */}
          <div className="about-story-grid">
            <div className="story-text-card glass-panel">
              <h2 className="story-heading">Empowering Through Knowledge</h2>
              <p>
                This platform was created to bridge the gap between complex medical information and general public comprehension. We believe that knowledge of one's own body is the first step toward a healthier lifestyle. 
              </p>
              <p>
                SomaLab brings modern 3D technology to your fingertips—empowering students, educators, medical professionals, and the general public to explore the wonders of the human body without limits.
              </p>
            </div>
            <div className="story-visual-card">
               {/* Decorative glassmorphic visual representation */}
               <div className="visual-glass-element">
                  <Microscope className="visual-icon" size={64} />
                  <div className="visual-text">Explore<br/>Without Limits</div>
               </div>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="about-pillars-header">
            <h2>Our Core Pillars</h2>
            <p>The foundations that drive our platform forward.</p>
          </div>

          <div className="about-pillars-grid">
            <div className="pillar-card glass-panel interactive-card">
              <div className="pillar-icon-wrapper bg-blue-tint">
                <Eye size={28} className="text-blue" />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading interactive anatomy learning platform that democratizes medical knowledge, enabling individuals from all backgrounds to better recognize and understand their bodies.
              </p>
            </div>
            
            <div className="pillar-card glass-panel interactive-card">
              <div className="pillar-icon-wrapper bg-purple-tint">
                <Target size={28} className="text-purple" />
              </div>
              <h3>Our Mission</h3>
              <ul className="mission-list">
                <li><ArrowRight size={16} /> Present accurate yet lightweight and interactive 3D medical models.</li>
                <li><ArrowRight size={16} /> Transform rigid biology learning into a fun exploration experience.</li>
                <li><ArrowRight size={16} /> Provide reliable science-based information to improve public health literacy.</li>
              </ul>
            </div>

            <div className="pillar-card glass-panel interactive-card">
              <div className="pillar-icon-wrapper bg-cyan-tint">
                <Lightbulb size={28} className="text-cyan" />
              </div>
              <h3>Why We Built It</h3>
              <p>
                Textbooks and 2D illustrations are often insufficient to represent the complexity of a living, moving body. SomaLab was built to create a virtual laboratory where your curiosity can be answered visually, in detail, and in real-time.
              </p>
            </div>
          </div>
          
        </div>

        <style>{`
          /* Scoped CSS for About Page */
          .about-page-container {
            position: relative;
            min-height: 100vh;
            padding: 120px 20px 80px;
            overflow: hidden;
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
          .blob-1 {
            top: -50px;
            left: -100px;
            width: 450px;
            height: 450px;
            background: rgba(91, 156, 246, 0.35);
          }
          .blob-2 {
            bottom: 50px;
            right: -100px;
            width: 500px;
            height: 500px;
            background: rgba(167, 139, 250, 0.25);
          }

          .about-content-wrapper {
            position: relative;
            z-index: 10;
            max-width: 1100px;
            margin: 0 auto;
          }

          /* HERO */
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

          /* GLASS PANEL UTILS */
          .glass-panel {
            background: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            border-radius: 28px;
            box-shadow: 0 20px 50px rgba(0, 50, 150, 0.04);
          }

          /* STORY GRID */
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
          .story-text-card {
            padding: 50px;
          }
          .story-heading {
            font-size: 2.2rem;
            font-weight: 800;
            color: #1a1a3a;
            margin-bottom: 24px;
            letter-spacing: -0.01em;
          }
          .story-text-card p {
            font-size: 1.1rem;
            line-height: 1.75;
            color: #4a5a7a;
            margin-bottom: 20px;
          }
          .story-text-card p:last-child { margin-bottom: 0; }
          
          .story-visual-card {
            background: linear-gradient(135deg, #0077ff 0%, #00d2ff 100%);
            border-radius: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            min-height: 350px;
            box-shadow: 0 24px 50px rgba(0, 119, 255, 0.25);
          }
          .story-visual-card::after {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at top right, rgba(255,255,255,0.4), transparent 60%);
          }
          .visual-glass-element {
            position: relative;
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
            width: 220px;
            height: 220px;
            color: white;
            box-shadow: 0 15px 35px rgba(0,0,0,0.15);
            transition: transform 0.3s ease;
          }
          .story-visual-card:hover .visual-glass-element {
            transform: scale(1.05);
          }
          .visual-icon { margin-bottom: 16px; opacity: 0.9; }
          .visual-text { 
            font-weight: 700; 
            font-size: 0.95rem; 
            text-transform: uppercase; 
            letter-spacing: 0.1em; 
            text-align: center; 
            line-height: 1.4;
          }

          /* PILLARS */
          .about-pillars-header {
            text-align: center;
            margin-bottom: 40px;
          }
          .about-pillars-header h2 {
            font-size: 2.8rem;
            font-weight: 800;
            color: #1a1a3a;
            margin-bottom: 12px;
            letter-spacing: -0.01em;
          }
          .about-pillars-header p {
            font-size: 1.15rem;
            color: #5a6a8a;
          }

          .about-pillars-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
          @media (max-width: 950px) {
             .about-pillars-grid { grid-template-columns: 1fr; }
          }
          .pillar-card {
            padding: 45px 35px;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            display: flex;
            flex-direction: column;
            border: 1px solid rgba(255, 255, 255, 0.9);
          }
          .interactive-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 30px 60px rgba(0, 50, 150, 0.08);
            background: rgba(255, 255, 255, 0.9);
          }
          .pillar-icon-wrapper {
            width: 64px;
            height: 64px;
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
          }
          .bg-blue-tint { background: rgba(0, 119, 255, 0.12); }
          .text-blue { color: #0077ff; }
          .bg-purple-tint { background: rgba(167, 139, 250, 0.15); }
          .text-purple { color: #8b5cf6; }
          .bg-cyan-tint { background: rgba(0, 210, 255, 0.15); }
          .text-cyan { color: #00b8d4; }

          .pillar-card h3 {
            font-size: 1.6rem;
            font-weight: 800;
            color: #1a1a3a;
            margin-bottom: 16px;
            letter-spacing: -0.01em;
          }
          .pillar-card p {
            font-size: 1.05rem;
            line-height: 1.7;
            color: #4a5a7a;
            flex-grow: 1;
          }
          .mission-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 14px;
            flex-grow: 1;
          }
          .mission-list li {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            font-size: 1.05rem;
            line-height: 1.6;
            color: #4a5a7a;
          }
          .mission-list li svg {
            color: #8b5cf6;
            flex-shrink: 0;
            margin-top: 4px;
          }
        `}</style>
      </div>
      <Footer />
    </PageTransition>
  );
}

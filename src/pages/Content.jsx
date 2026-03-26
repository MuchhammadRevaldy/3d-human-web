import { useState, useMemo, useRef, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Brain, Wind, Activity, X, Droplet, ShieldCheck, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// 3D Model Component for Cards
function CardModel({ path, scale, position, rotation, color, emissive }) {
  const { scene } = useGLTF(path)
  const ref = useRef()
  const cloned = useMemo(() => scene.clone(true), [scene])

  useMemo(() => {
    cloned.traverse((node) => {
      if (node.isMesh) {
        node.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color(color),
          emissive: new THREE.Color(emissive),
          emissiveIntensity: 1.2,
          roughness: 0.2,
          metalness: 0.1,
          transparent: true,
          opacity: 0.9,
          transmission: 0.3
        })
      }
    })
  }, [cloned, color, emissive])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.4
    }
  })

  return (
    <primitive ref={ref} object={cloned} scale={scale} position={position} rotation={rotation} />
  )
}

function BentoCanvas({ modelClass, path, scale, position, rotation, color, emissive, fov = 45 }) {
  return (
    <div className={`bento-canvas-wrapper ${modelClass}`}>
      <Canvas camera={{ position: [0, 0, 4], fov }} gl={{ alpha: true, antialias: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-5, -5, -5]} intensity={1} color={color} />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <CardModel path={path} scale={scale} position={position} rotation={rotation} color={color} emissive={emissive} />
          </Float>
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default function Content() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (art) => {
    if (art.route) {
      navigate(art.route);
    } else {
      setSelectedArticle(art);
    }
  };

  const articles = [
    {
      id: 1,
      title: "Cardiovascular Longevity",
      category: "Heart Health",
      icon: <Heart size={28} className="text-rose-500" />,
      shortDesc: "Advanced protocols for maintaining arterial elasticity and heart muscle resilience across your lifespan.",
      content: "The human heart beats around 100,000 times a day, pumping blood through a vast network of vessels. To maintain cardiovascular health, focus on a diet rich in omega-3 fatty acids, fiber, and antioxidants. Regular aerobic exercise (like brisk walking or swimming) for at least 150 minutes a week strengthens the heart muscle. Additionally, managing stress through mindfulness and getting 7-9 hours of sleep are crucial for preventing endothelial dysfunction and high blood pressure.",
      color: "#ff3366",
      emissive: "#aa0033",
      modelPath: "/models/realistic_human_heart.glb",
      modelScale: 0.55,
      modelPos: [0, 0, 0],
      modelRotation: [0, 0, 0],
      bgClass: "bg-rose-50",
      bentoClass: "bento-hero",
      has3D: true
    },
    {
      id: 2,
      title: "Neuroplasticity",
      category: "Brain Systems",
      icon: <Brain size={24} className="text-purple-500" />,
      shortDesc: "Biohack your brain for sustained focus.",
      content: "Your nervous system is the body's command center, consisting of the brain, spinal cord, and a complex network of nerves. It controls your movements, thoughts, and automatic responses to the world around you. Protecting your nervous system involves consuming brain-boosting nutrients like vitamins B6 and B12, challenging your brain with new learning activities to build neuroplasticity, and avoiding neurotoxins like excessive alcohol or recreational drugs. Chronic stress can lead to neuroinflammation, so daily relaxation techniques are vital.",
      color: "#a855f7",
      emissive: "#5b21b6",
      modelPath: "/models/human-brain.glb",
      modelScale: 0.3,
      modelPos: [0, -0.4, 0],
      modelRotation: [0, 0, 0],
      bgClass: "bg-purple-50",
      bentoClass: "bento-square-small",
      has3D: false
    },
    {
      id: 3,
      title: "Genetics & DNA",
      category: "Cellular Health",
      icon: <Activity size={24} className="text-blue-500" />,
      shortDesc: "Understanding the building blocks of life and how to protect your telomeres.",
      content: "Your DNA contains the instructions for every cell in your body. Protecting your genetics means minimizing DNA damage from oxidative stress. Antioxidant-rich foods, minimizing exposure to environmental toxins and UV radiation, and maintaining metabolic health are key. Fasting or caloric restriction mimetics can trigger autophagy, the body's way of clearing out damaged cells and repairing DNA.",
      color: "#3b82f6",
      emissive: "#1d4ed8",
      modelPath: "/models/dna.glb",
      modelScale: 0.0008,
      modelPos: [0, -0.5, 0],
      modelRotation: [0.3, 0, 0],
      bgClass: "bg-blue-50",
      bentoClass: "bento-tall",
      has3D: true
    },
    {
      id: 4,
      title: "Gut Microbiome",
      category: "Digestive System",
      icon: <Droplet size={24} className="text-emerald-500" />,
      shortDesc: "A vital connection between your gut bacteria and immunity.",
      content: "The gut microbiome consists of trillions of bacteria that play a profound role in digestion, immunity, and even mood regulation. To support a healthy gut, consume a diverse range of plant-based foods, which provide prebiotics (food for good bacteria). Fermented foods like yogurt, kefir, and kimchi introduce beneficial probiotics. Limit processed foods and refined sugars, which can promote the growth of harmful bacteria and lead to intestinal permeability or 'leaky gut'.",
      color: "#10b981",
      emissive: "#047857",
      modelPath: "/models/small_and_large_intestine.glb",
      modelScale: 0.7,
      modelPos: [0, -0.2, 0],
      modelRotation: [0, 0, 0],
      bgClass: "bg-emerald-50",
      bentoClass: "bento-square-small",
      has3D: false,
      route: "/article/4"
    },
    {
      id: 5,
      title: "Renal Function & Filtration",
      category: "Detoxification",
      icon: <Wind size={32} className="text-amber-500" />,
      shortDesc: "Supporting your body's natural filtration systems.",
      content: "The liver and kidneys are your body's primary detoxification organs. The liver processes nutrients and neutralizes harmful substances, while the kidneys filter waste from the blood to produce urine. You can maintain their health by drinking plenty of water, limiting sodium intake, and eating antioxidant-rich foods like berries and dark leafy greens. Avoid the overuse of over-the-counter pain medications, which can strain renal function over time.",
      color: "#f59e0b",
      emissive: "#b45309",
      modelPath: "/models/human_liver_and_gallbladder.glb",
      modelScale: 4.2,
      modelPos: [0, -0.2, 0],
      modelRotation: [0, 0, 0],
      bgClass: "bg-amber-50",
      bentoClass: "bento-wide",
      has3D: true,
      route: "/article/5"
    },
    {
      id: 6,
      title: "Cellular Immunity",
      category: "Defense System",
      icon: <ShieldCheck size={32} className="text-sky-500" />,
      shortDesc: "Building an impenetrable fortress against pathogens and oxidative stress.",
      content: "A robust immune system relies on a delicate balance of white blood cells, antibodies, and cellular defense mechanisms. High levels of oxidative stress can impair immune function, making you more susceptible to illness. Combat this with a diet high in vitamins C, D, and E, as well as zinc. Adequate sleep and routine exercise promote the efficient circulation of immune cells, allowing them to detect and neutralize threats effectively.",
      color: "#0ea5e9",
      emissive: "#0369a1",
      modelPath: "/models/eukaryotic_cell.glb",
      modelScale: 0.08,
      modelPos: [0, 0, 0],
      modelRotation: [0, 0, 0],
      bgClass: "bg-sky-50",
      bentoClass: "bento-wide",
      has3D: false,
      route: "/article/6"
    }
  ];

  const extraArticles = [
    {
      id: 7,
      title: "Respiratory Health",
      category: "Pulmonary System",
      icon: <Wind size={28} className="text-cyan-500" />,
      shortDesc: "Optimize your lung capacity and oxygenation for peak energy levels and sustained vitality.",
      content: "The lungs are responsible for oxygenating every cell in your body. Practices like diaphragmatic breathing (belly breathing) can increase lung capacity and reduce activation of the stress response. Exposure to clean air, avoiding pollutants, and regular cardio training are key. Advanced techniques like cyclic hyperventilation (Wim Hof Method) or box breathing can improve CO2 tolerance and oxygen efficiency.",
      color: "#06b6d4",
      emissive: "#0891b2",
      modelPath: "/models/human-brain.glb",
      modelScale: 0.50,
      modelPos: [0, -0.2, 0],
      modelRotation: [0, 0, 0],
      bgClass: "bg-cyan-50",
      bentoClass: "bento-hero",
      has3D: true
    },
    {
      id: 8,
      title: "Musculoskeletal System",
      category: "Structural Health",
      icon: <Activity size={28} className="text-orange-500" />,
      shortDesc: "Build a resilient framework of bones and muscles for lifelong strength and mobility.",
      content: "Your bones and muscles form the structural foundation of your body. To maintain musculoskeletal health, prioritize resistance training (2–4x/week) which promotes bone density and combats sarcopenia (age-related muscle loss). Collagen synthesis for cartilage health depends on vitamin C and adequate protein intake. Mobility work like yoga or dynamic stretching maintains joint range of motion and prevents chronic injury.",
      color: "#f97316",
      emissive: "#c2410c",
      modelPath: "/models/realistic_human_heart.glb",
      modelScale: 0.90,
      modelPos: [0, 0, 0],
      modelRotation: [0, 0, 0],
      bgClass: "bg-orange-50",
      bentoClass: "bento-tall",
      has3D: true
    },
    {
      id: 9,
      title: "Hormonal Balance",
      category: "Endocrine System",
      icon: <Brain size={28} className="text-pink-500" />,
      shortDesc: "Regulate your body's chemical messengers to master metabolism and mood.",
      content: "The endocrine system governs hormones—chemical messengers that control metabolism, growth, mood, and reproduction. Key lifestyle factors for hormonal balance include managing cortisol (the stress hormone) through sleep and mindfulness, maintaining healthy blood sugar to keep insulin stable, and supporting thyroid function with adequate iodine, selenium, and zinc.",
      color: "#ec4899",
      emissive: "#be185d",
      bgClass: "bg-pink-50",
      bentoClass: "bento-square-small",
      has3D: false
    },
    {
      id: 10,
      title: "Sleep & Recovery",
      category: "Restorative Health",
      icon: <ShieldCheck size={28} className="text-indigo-500" />,
      shortDesc: "Master the science of sleep for cellular repair, memory, and longevity.",
      content: "Sleep is where the brain consolidates memories, the body repairs tissues, and the glymphatic system flushes out metabolic waste. Optimal sleep (7–9 hours) requires a consistent schedule, a dark and cool environment, and minimizing blue light exposure. Sleep deprivation is a major driver of metabolic syndrome and accelerated aging.",
      color: "#6366f1",
      emissive: "#4338ca",
      bgClass: "bg-indigo-50",
      bentoClass: "bento-square-small",
      has3D: false
    }
  ];

  return (
    <PageTransition>
      <div className="content-page-container">

        {/* Decorative Background */}
        <div className="content-bg-blob blob-a"></div>
        <div className="content-bg-blob blob-b"></div>

        <div className="content-header text-center">
          <h1 className="content-title">Clinical <span className="text-gradient">Insights</span></h1>
          <p className="content-subtitle">Explore expertly curated articles on maintaining organ health and understanding your body's complex systems.</p>
        </div>

        <div className="bento-grid-container">
          {[...articles, ...extraArticles].map((art) => (
            <motion.div
              key={art.id}
              className={`bento-card ${art.bentoClass}`}
              whileHover={{ scale: 1.015, y: -4 }}
              onClick={() => handleCardClick(art)}
            >
              {art.has3D && (
                <BentoCanvas
                  modelClass={`canvas-layout-${art.bentoClass}`}
                  path={art.modelPath}
                  scale={art.modelScale}
                  position={art.modelPos}
                  rotation={art.modelRotation}
                  color={art.color}
                  emissive={art.emissive}
                  fov={art.bentoClass === 'bento-tall' ? 60 : 45}
                />
              )}

              <div className="bento-card-content">
                <div className="bento-card-header">
                  <div className="bento-icon-box">{art.icon}</div>
                  <span className="bento-category" style={{ color: art.color || '#0077ff' }}>{art.category}</span>
                </div>
                <div className="bento-text-body">
                  <h3 className="bento-title">{art.title}</h3>
                  <p className="bento-desc">{art.shortDesc}</p>
                </div>
                <div className="bento-footer">
                  <span className="read-more">Read Article</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay using Framer Motion */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="modal-container">
              <motion.div
                className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticle(null)}
              />
              <motion.div
                className="article-modal"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <button className="modal-close-btn" onClick={() => setSelectedArticle(null)}>
                  <X size={24} />
                </button>
                <div className="modal-header">
                  <div className="modal-icon-box" style={{ background: selectedArticle.color ? selectedArticle.color + '15' : '#f0f4f8' }}>
                    {selectedArticle.icon}
                  </div>
                  <div>
                    <div className="modal-category" style={{ color: selectedArticle.color || '#0077ff' }}>{selectedArticle.category}</div>
                    <h2 className="modal-title">{selectedArticle.title}</h2>
                  </div>
                </div>
                <div className="modal-body">
                  <p className="modal-text">{selectedArticle.content}</p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <style>{`
          .content-page-container {
            position: relative;
            min-height: 100vh;
            padding: 120px 5% 80px;
            font-family: 'Inter', sans-serif;
            max-width: 1400px;
            margin: 0 auto;
          }
          
          .content-bg-blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(100px);
            z-index: -1;
            opacity: 0.4;
          }
          .blob-a { top: 10%; left: -5%; width: 400px; height: 400px; background: #5b9cf6; }
          .blob-b { bottom: 10%; right: -5%; width: 500px; height: 500px; background: #a78bfa; }

          .content-header {
            margin-bottom: 60px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .content-title {
            font-size: 3.5rem;
            font-weight: 800;
            color: #1a1a3a;
            margin-bottom: 16px;
            letter-spacing: -0.02em;
            text-align: center;
          }
          .text-gradient {
            background: linear-gradient(135deg, #0077ff 0%, #a78bfa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .content-subtitle {
            font-size: 1.15rem;
            color: #5a6a8a;
            max-width: 600px;
            line-height: 1.6;
            text-align: center;
          }

          /* Utility Colors for Icons */
          .text-rose-500 { color: #f43f5e; }
          .text-purple-500 { color: #a855f7; }
          .text-sky-500 { color: #0ea5e9; }
          .text-emerald-500 { color: #10b981; }
          .text-amber-500 { color: #f59e0b; }
          .text-blue-500 { color: #3b82f6; }

          /* Bento Layout */
          .bento-grid-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 310px;
            gap: 24px;
            position: relative;
            z-index: 10;
          }

          @media (max-width: 1024px) {
            .bento-grid-container {
              grid-template-columns: repeat(2, 1fr);
              grid-auto-rows: auto;
            }
          }
          @media (max-width: 640px) {
            .bento-grid-container { grid-template-columns: 1fr; }
          }

          .bento-card {
            position: relative;
            border-radius: 32px;
            background: rgba(255, 255, 255, 0.65);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.9);
            overflow: hidden;
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(0, 30, 80, 0.04);
            display: flex;
            flex-direction: column;
            transition: box-shadow 0.3s ease;
          }
          .bento-card:hover {
            box-shadow: 0 20px 50px rgba(0, 119, 255, 0.1);
            border-color: #ffffff;
            background: rgba(255, 255, 255, 0.9);
          }

          .bento-hero { grid-column: span 2; grid-row: span 2; }
          .bento-square-small { grid-column: span 1; grid-row: span 1; }
          .bento-tall { grid-column: span 1; grid-row: span 2; }
          .bento-wide { grid-column: span 2; grid-row: span 1; }
          
          @media (max-width: 1024px) {
            .bento-hero, .bento-tall, .bento-wide, .bento-square-small {
              grid-column: span 2;
              grid-row: span 1;
              min-height: 280px;
            }
          }
          @media (max-width: 640px) {
            .bento-hero, .bento-tall, .bento-wide, .bento-square-small {
              grid-column: span 1;
            }
          }

          .bento-card-content {
            position: relative;
            z-index: 2;
            padding: 28px;
            display: flex;
            flex-direction: column;
            height: 100%;
            box-sizing: border-box;
          }

          .bento-hero .bento-card-content {
            width: 55%;
            padding: 40px;
          }

          @media (max-width: 768px) {
            /* Cards become vertical flex on mobile */
            .bento-card {
              overflow: hidden;
              min-height: unset !important;
              flex-direction: column;
            }

            .bento-hero .bento-card-content,
            .bento-wide .bento-card-content {
              width: 100%;
              padding: 24px;
            }

            .bento-card-content {
              padding: 24px;
              height: auto;
              width: 100%;
              box-sizing: border-box;
            }

            /* On mobile, make 3D canvas appear below content as a block */
            .bento-canvas-wrapper {
              position: relative !important;
              top: unset !important;
              left: unset !important;
              right: unset !important;
              bottom: unset !important;
              width: 100% !important;
              height: 280px !important;
              opacity: 1 !important;
              display: block;
              flex-shrink: 0;
            }
          }

          @media (min-width: 769px) {
            .bento-hero .bento-card-content { width: 55%; padding: 40px; }
          }

          @media (max-width: 1024px) and (min-width: 769px) {
            .bento-hero .bento-card-content { width: 100%; z-index: 3; }
          }

          .bento-canvas-wrapper {
            position: absolute;
            pointer-events: none;
            z-index: 1;
          }

          .canvas-layout-bento-hero {
            right: -5%;
            top: 0;
            bottom: 0;
            width: 60%;
          }
          .canvas-layout-bento-square-small {
            right: -20px;
            bottom: -20px;
            width: 160px;
            height: 160px;
            opacity: 0.3;
          }
          .canvas-layout-bento-tall {
            left: 0;
            right: 0;
            bottom: -30px;
            height: 60%;
            opacity: 0.8;
          }
          .canvas-layout-bento-wide {
            right: 0;
            top: 0;
            bottom: 0;
            width: 40%;
            opacity: 0.6;
          }
          @media (max-width: 1024px) {
            .canvas-layout-bento-hero { opacity: 0.3; width: 100%; right: 0; }
            .canvas-layout-bento-tall { opacity: 0.3; height: 100%; }
            .canvas-layout-bento-wide { opacity: 0.3; width: 100%; right: 0; }
          }

          .bento-card-header {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 24px;
          }
          .bento-tall .bento-card-header, .bento-square-small .bento-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 16px;
          }
          @media (max-width: 1024px) {
            .bento-tall .bento-card-header, .bento-square-small .bento-card-header {
              flex-direction: row;
              align-items: center;
            }
          }

          .bento-icon-box {
            width: 54px;
            height: 54px;
            border-radius: 16px;
            background: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            flex-shrink: 0;
          }

          .bento-category {
            font-weight: 700;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }

          .bento-title {
            font-size: 1.6rem;
            font-weight: 800;
            color: #1a1a3a;
            margin-bottom: 12px;
            line-height: 1.2;
          }
          .bento-hero .bento-title {
            font-size: 2.2rem;
            margin-bottom: 16px;
          }
          .bento-square-small .bento-title {
            font-size: 1.3rem;
          }

          .bento-desc {
            color: #4a5a7a;
            line-height: 1.5;
            font-size: 0.95rem;
            margin-bottom: 20px;
            flex: 1;
            /* Text ellipsis for small cards */
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .bento-hero .bento-desc {
            -webkit-line-clamp: 5;
            font-size: 1.05rem;
          }

          .bento-footer {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
            color: #1a1a3a;
            margin-top: auto;
          }

          /* MODAL STYLES */
          .modal-container {
            position: fixed;
            inset: 0;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
          .modal-backdrop {
            position: absolute;
            inset: 0;
            background: rgba(15, 20, 35, 0.4);
            backdrop-filter: blur(8px);
          }
          .article-modal {
            position: relative;
            width: 100%;
            max-width: 650px;
            max-height: 85vh;
            background: #ffffff;
            border-radius: 28px;
            padding: 40px;
            overflow-y: auto;
            box-shadow: 0 40px 80px rgba(0,0,0,0.2);
            z-index: 1001;
          }

          .modal-close-btn {
            position: absolute;
            top: 24px;
            right: 24px;
            background: #f0f4f8;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #4a5a7a;
            transition: all 0.2s;
          }
          .modal-close-btn:hover { background: #e2e8f0; color: #1a1a3a; }

          .modal-header {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 30px;
            padding-bottom: 25px;
            border-bottom: 1px solid #f0f4f8;
          }
          @media (max-width: 600px) {
            .modal-header { flex-direction: column; text-align: center; }
          }
          .modal-icon-box {
            width: 80px;
            height: 80px;
            border-radius: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .modal-category {
            font-size: 0.85rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 6px;
          }
          .modal-title {
            font-size: 2rem;
            font-weight: 800;
            color: #1a1a3a;
            line-height: 1.2;
          }
          .modal-body {
            padding-right: 10px;
          }
          .modal-text {
            font-size: 1.15rem;
            line-height: 1.8;
            color: #4a5a7a;
          }
          
          .article-modal::-webkit-scrollbar { width: 6px; }
          .article-modal::-webkit-scrollbar-track { background: transparent; }
          .article-modal::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }

          .see-more-section {
            max-width: 1250px;
            margin: 80px auto;
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 60px;
          }

          .see-more-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 16px 40px;
            background: linear-gradient(135deg, #0077ff 0%, #00d2ff 100%);
            color: white;
            border: none;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: 700;
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(0, 119, 255, 0.25);
            transition: box-shadow 0.3s ease;
          }

          .see-more-btn:hover {
            box-shadow: 0 15px 40px rgba(0, 119, 255, 0.35);
          }
        `}</style>
      </div>
      <Footer />
    </PageTransition>
  );
}

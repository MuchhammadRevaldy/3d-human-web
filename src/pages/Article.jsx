import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Share2, Bookmark, Heart, Brain, Wind, Activity, Droplet, ShieldCheck } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import '../index.css';

const ARTICLES_DATA = {
  "1": {
    title: "Cardiovascular Longevity",
    category: "Heart Health",
    readTime: "5 min read",
    author: "Dr. Sarah Jenkins",
    date: "March 2026",
    color: "from-rose-500 to-red-600",
    content: [
      "The human heart beats around 100,000 times a day, pumping blood through a vast network of vessels. To maintain cardiovascular health, focus on a diet rich in omega-3 fatty acids, fiber, and antioxidants. Regular aerobic exercise (like brisk walking or swimming) for at least 150 minutes a week strengthens the heart muscle. Additionally, managing stress through mindfulness and getting 7-9 hours of sleep are crucial for preventing endothelial dysfunction and high blood pressure.",
      "Beyond basic lifestyle changes, advanced cardiovascular protocols suggest incorporating High-Intensity Interval Training (HIIT) to improve VO2 max, and monitoring advanced lipid panels instead of just standard cholesterol. Arterial elasticity relies heavily on Nitric Oxide production, which can be stimulated by consuming nitrate-rich vegetables like beets and arugula.",
      "The future of cardiovascular longevity also encompasses personalized genetic testing to understand specific vulnerabilities to plaque buildup or arrhythmias. Through precision medicine and daily proactive habits, maintaining a biological heart age much younger than your chronological age is entirely possible."
    ]
  },
  "4": {
    title: "Gut Microbiome Secrets",
    category: "Digestive System",
    readTime: "7 min read",
    author: "Dr. Alistair Vance",
    date: "April 2026",
    color: "from-emerald-500 to-green-600",
    content: [
      "The gut microbiome consists of trillions of bacteria that play a profound role in digestion, immunity, and even mood regulation. To support a healthy gut, consume a diverse range of plant-based foods, which provide prebiotics (food for good bacteria). Fermented foods like yogurt, kefir, and kimchi introduce beneficial probiotics. Limit processed foods and refined sugars, which can promote the growth of harmful bacteria and lead to intestinal permeability or 'leaky gut'.",
      "Recent breakthroughs in the gut-brain axis research show that the microbiome produces over 90% of the body's serotonin. This means your diet directly influences your mood, anxiety levels, and cognitive clarity. Furthermore, poor gut health is increasingly linked to systemic inflammation, driving conditions ranging from autoimmune disorders to chronic fatigue syndrome.",
      "Advanced protocols for gut restoration involve an elimination diet to identify sensitivities, followed by a targeted reinoculation phase using specific probiotic strains like Akkermansia muciniphila. Managing stress is equally critical, as cortisol can directly alter the composition of gut flora within hours."
    ]
  },
  "5": {
    title: "Renal Function & Filtration",
    category: "Detoxification",
    readTime: "4 min read",
    author: "Prof. Elena Rostova",
    date: "April 2026",
    color: "from-amber-500 to-orange-600",
    content: [
      "The liver and kidneys are your body's primary detoxification organs. The liver processes nutrients and neutralizes harmful substances, while the kidneys filter waste from the blood to produce urine. You can maintain their health by drinking plenty of water, limiting sodium intake, and eating antioxidant-rich foods like berries and dark leafy greens. Avoid the overuse of over-the-counter pain medications, which can strain renal function over time.",
      "Phase 1 and Phase 2 liver detoxification pathways require an abundant supply of B-vitamins, glutathione, and sulfur-containing amino acids (found in cruciferous vegetables like broccoli and Brussels sprouts). Meanwhile, kidney filtration efficiency (eGFR) can be supported by managing blood pressure and blood sugar, the two leading causes of vascular damage in the kidneys.",
      "Modern biohacking strategies for these organs include intermittent fasting to reduce metabolic burden, and specific herbal supports such as Milk Thistle or Dandelion Root for liver regeneration. However, the golden rule remains consistent hydration to ensure metabolic byproducts are efficiently flushed from the system."
    ]
  },
  "6": {
    title: "Cellular Immunity",
    category: "Defense System",
    readTime: "6 min read",
    author: "Dr. William Thorne",
    date: "May 2026",
    color: "from-sky-500 to-blue-600",
    content: [
      "A robust immune system relies on a delicate balance of white blood cells, antibodies, and cellular defense mechanisms. High levels of oxidative stress can impair immune function, making you more susceptible to illness. Combat this with a diet high in vitamins C, D, and E, as well as zinc. Adequate sleep and routine exercise promote the efficient circulation of immune cells, allowing them to detect and neutralize threats effectively.",
      "NK (Natural Killer) cells and T-cells form the vanguard of specific cellular immunity. You can optimize their function through brief periods of acute physiological stress—also known as hormesis—such as cold plunging or sauna use. These practices stimulate the production of heat shock proteins and increase overall immune surveillance.",
      "Furthermore, chronic inflammation acts as 'background noise' that distracts the immune system. Resolving chronic inflammation through anti-inflammatory diets, emotional regulation, and avoiding environmental toxins frees up immunological resources to fight genuine threats and clear senescent (aging) cells more efficiently."
    ]
  },
  // Default fallback
  "default": {
    title: "Understanding Your Anatomy",
    category: "General Health",
    readTime: "3 min read",
    author: "Medical Team",
    date: "2026",
    color: "from-gray-500 to-slate-600",
    content: [
      "Explore the complex systems of the human body to understand how small daily choices impact your long-term health. Keep investigating the different modules of SomaLab to learn more!"
    ]
  }
};

export default function Article() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setData(ARTICLES_DATA[id] || ARTICLES_DATA["default"]);
  }, [id]);

  if (!data) return null;

  return (
    <PageTransition>
      <div className="article-reading-page">
        {/* Dynamic Background Blob */}
        <div className={`article-bg-blob bg-gradient-to-br ${data.color} opacity-20`}></div>

        <div className="article-container">
          
          <Link to="/content" className="back-link group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Insights</span>
          </Link>

          <header className="article-header">
            <span className="article-category">{data.category}</span>
            <h1 className="article-title">{data.title}</h1>
            <div className="article-meta">
              <div className="meta-item">
                <div className="author-avatar">{data.author.charAt(4)}</div>
                <span>{data.author}</span>
              </div>
              <div className="meta-item"><Clock size={16} /> {data.readTime}</div>
              <div className="meta-item">{data.date}</div>
            </div>
            
            <div className="article-actions">
              <button className="action-btn" title="Share"><Share2 size={18} /></button>
              <button className="action-btn" title="Save"><Bookmark size={18} /></button>
            </div>
          </header>

          <div className="article-body drop-cap">
            {data.content.map((paragraph, idx) => (
              <p key={idx} className="article-p">{paragraph}</p>
            ))}
          </div>

          <div className="article-footer">
            <h3>Did you find this helpful?</h3>
            <p>Explore our interactive 3D clinical models to visualize these systems in real-time.</p>
            <Link to="/explore" className="explore-cta-link">Start 3D Exploration</Link>
          </div>

        </div>

        <style>{`
          .article-reading-page {
            min-height: 100vh;
            padding: 140px 5% 80px;
            font-family: 'Inter', sans-serif;
            position: relative;
            overflow: hidden;
            background: #f8fafc;
          }
          
          .article-bg-blob {
            position: fixed;
            top: -100px;
            right: -100px;
            width: 800px;
            height: 800px;
            border-radius: 50%;
            filter: blur(150px);
            z-index: 0;
            pointer-events: none;
          }

          .article-container {
            max-width: 800px;
            margin: 0 auto;
            position: relative;
            z-index: 10;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(40px);
            -webkit-backdrop-filter: blur(40px);
            padding: 60px;
            border-radius: 32px;
            border: 1px solid rgba(255,255,255,0.9);
            box-shadow: 0 20px 60px rgba(0, 30, 80, 0.05);
          }

          @media (max-width: 768px) {
            .article-container { padding: 30px; }
          }

          .back-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #4a5a7a;
            font-weight: 600;
            text-decoration: none;
            margin-bottom: 40px;
            transition: color 0.2s;
          }
          .back-link:hover { color: #0077ff; }

          .article-category {
            display: inline-block;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #0077ff;
            margin-bottom: 16px;
            font-size: 0.9rem;
          }

          .article-title {
            font-size: 3.5rem;
            font-weight: 900;
            color: #1a1a3a;
            line-height: 1.1;
            margin-bottom: 30px;
            letter-spacing: -0.02em;
          }

          @media (max-width: 768px) {
            .article-title { font-size: 2.5rem; }
          }

          .article-meta {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 24px;
            color: #5a6a8a;
            font-size: 0.95rem;
            margin-bottom: 30px;
            padding-bottom: 30px;
            border-bottom: 1px solid rgba(0,0,0,0.06);
          }

          .meta-item {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .author-avatar {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: #1a1a3a;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 0.8rem;
          }

          .article-actions {
            display: flex;
            gap: 12px;
            margin-bottom: 40px;
          }

          .action-btn {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: 1px solid rgba(0,0,0,0.08);
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #4a5a7a;
            transition: all 0.2s;
          }
          .action-btn:hover { background: #f0f4f8; color: #1a1a3a; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.05); }

          .article-body {
            font-size: 1.25rem;
            line-height: 1.85;
            color: #334155;
            margin-bottom: 60px;
          }

          .drop-cap p:first-child::first-letter {
            float: left;
            font-size: 4.5rem;
            line-height: 0.8;
            padding-right: 12px;
            padding-top: 8px;
            font-weight: 900;
            color: #0077ff;
          }

          .article-p {
            margin-bottom: 2em;
          }

          .article-footer {
            background: linear-gradient(135deg, rgba(0, 119, 255, 0.05) 0%, rgba(167, 139, 250, 0.05) 100%);
            border-radius: 24px;
            padding: 40px;
            text-align: center;
            border: 1px solid rgba(0, 119, 255, 0.1);
          }

          .article-footer h3 {
            font-size: 1.5rem;
            font-weight: 800;
            color: #1a1a3a;
            margin-bottom: 12px;
          }

          .article-footer p {
            color: #4a5a7a;
            margin-bottom: 24px;
            font-size: 1.05rem;
          }

          .explore-cta-link {
            display: inline-block;
            background: linear-gradient(135deg, #0077ff 0%, #00d2ff 100%);
            color: white;
            font-weight: 700;
            padding: 14px 32px;
            border-radius: 30px;
            text-decoration: none;
            box-shadow: 0 10px 20px rgba(0, 119, 255, 0.2);
            transition: all 0.3s;
          }
          .explore-cta-link:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(0, 119, 255, 0.3);
          }
        `}</style>
      </div>
      <Footer />
    </PageTransition>
  )
}

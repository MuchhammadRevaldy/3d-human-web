import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import { Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useReveal from '../hooks/useReveal';

export default function Contact() {
  const { t } = useTranslation();
  const headerRef = useReveal();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const phoneNumber = "6282387775667";
    const text = `Halo SomaLab,\n\nNama: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <PageTransition>
      <div className="contact-page-container">
        
        {/* Decorative Background Blobs */}
        <div className="contact-bg-blob blob-c"></div>
        <div className="contact-bg-blob blob-d"></div>

        <div className="contact-wrapper">
          <div className="contact-header" ref={headerRef}>
            <h1 className="contact-title reveal-item">{t('contact.title')} <span className="text-gradient">{t('contact.title_highlight')}</span></h1>
            <p className="contact-subtitle reveal-item reveal-delay-1">{t('contact.subtitle')}</p>
          </div>
          
          <motion.div 
            className="contact-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            
            {/* Contact Form */}
            <motion.div className="contact-form-card glass-panel" variants={itemVariants}>
              <h2 className="form-heading"><MessageSquare className="inline-icon" /> {t('contact.form_title')}</h2>
              <form className="contact-form" onSubmit={handleWhatsAppRedirect}>
                <div className="form-group-split">
                  <div className="form-group">
                    <label>{t('contact.first_name')}</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder={t('contact.placeholder_first')} required />
                  </div>
                  <div className="form-group">
                    <label>{t('contact.last_name')}</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder={t('contact.placeholder_last')} required />
                  </div>
                </div>
                <div className="form-group">
                  <label>{t('contact.email')}</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('contact.placeholder_email')} required />
                </div>
                <div className="form-group">
                  <label>{t('contact.message')}</label>
                  <textarea name="message" rows="5" value={formData.message} onChange={handleChange} placeholder={t('contact.placeholder_msg')} required></textarea>
                </div>
                <button type="submit" className="submit-btn-premium">
                  <span>{t('contact.submit')}</span> <Send size={18} />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <div className="contact-info-panel">
              <motion.div className="info-card glass-panel" variants={itemVariants}>
                <div className="info-icon-wrapper"><MapPin size={28} /></div>
                <div>
                  <h3>{t('contact.headquarters')}</h3>
                  <p dangerouslySetInnerHTML={{ __html: t('contact.address').replace(', ', '<br/>') }}></p>
                </div>
              </motion.div>
              <motion.div className="info-card glass-panel" variants={itemVariants}>
                <div className="info-icon-wrapper"><Mail size={28} /></div>
                <div>
                  <h3>{t('contact.email_us')}</h3>
                  <p>support@somalab.com<br/>partnerships@somalab.com</p>
                </div>
              </motion.div>
              <motion.div className="info-card glass-panel" variants={itemVariants}>
                <div className="info-icon-wrapper"><Phone size={28} /></div>
                <div>
                  <h3>{t('contact.call_us')}</h3>
                  <p>+62 811 2345 6789<br/>{t('contact.hours')}</p>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>

        <style>{`
          .contact-page-container {
            position: relative;
            min-height: calc(100vh - 80px);
            padding: 120px 20px 100px;
            font-family: 'Inter', sans-serif;
            overflow: hidden;
          }

          .contact-bg-blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(100px);
            z-index: 0;
            opacity: 0.5;
            pointer-events: none;
          }
          .blob-c { top: -100px; right: -100px; width: 500px; height: 500px; background: rgba(0, 119, 255, 0.2); }
          .blob-d { bottom: -100px; left: -100px; width: 600px; height: 600px; background: rgba(167, 139, 250, 0.15); }

          .contact-wrapper { position: relative; z-index: 10; max-width: 1100px; margin: 0 auto; }

          .contact-header { text-align: center; margin-bottom: 60px; max-width: 700px; margin-left: auto; margin-right: auto; }
          .contact-title { font-size: 3.5rem; font-weight: 800; color: #1a1a3a; margin-bottom: 16px; letter-spacing: -0.02em; }
          .text-gradient { background: linear-gradient(135deg, #0077ff 0%, #a78bfa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
          .contact-subtitle { font-size: 1.15rem; color: #5a6a8a; line-height: 1.6; }

          .contact-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; }
          @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } .contact-title { font-size: 2.5rem; } }

          .glass-panel { background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.8); border-radius: 28px; box-shadow: 0 20px 50px rgba(0, 50, 150, 0.04); }

          .contact-form-card { padding: 45px; }
          .form-heading { font-size: 1.8rem; font-weight: 800; color: #1a1a3a; margin-bottom: 30px; display: flex; align-items: center; gap: 12px; }
          .inline-icon { color: #0077ff; }

          .contact-form { display: flex; flex-direction: column; gap: 20px; }
          .form-group-split { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
          @media (max-width: 600px) { .form-group-split { grid-template-columns: 1fr; } .contact-form-card { padding: 30px; } }

          .form-group { display: flex; flex-direction: column; gap: 8px; }
          .form-group label { font-size: 0.9rem; font-weight: 700; color: #1a1a3a; margin-left: 4px; }
          .form-group input, .form-group textarea { padding: 14px 20px; border-radius: 12px; border: 1px solid #e2e8f0; background: rgba(255, 255, 255, 0.8); font-family: inherit; font-size: 1rem; transition: all 0.2s; outline: none; }
          .form-group input:focus, .form-group textarea:focus { border-color: #0077ff; box-shadow: 0 0 0 4px rgba(0, 119, 255, 0.1); background: white; }

          .submit-btn-premium { background: linear-gradient(135deg, #0077ff 0%, #00bbff 100%); color: white; border: none; padding: 16px; border-radius: 14px; font-weight: 700; font-size: 1.05rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 10px; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); box-shadow: 0 10px 25px rgba(0, 119, 255, 0.25); }
          .submit-btn-premium:hover { transform: translateY(-4px); box-shadow: 0 15px 35px rgba(0, 119, 255, 0.35); filter: brightness(1.05); }

          .contact-info-panel { display: flex; flex-direction: column; gap: 20px; }
          .info-card { padding: 30px; display: flex; align-items: center; gap: 24px; transition: transform 0.3s; border: 1px solid rgba(255, 255, 255, 0.9); }
          .info-card:hover { transform: translateX(8px); }
          .info-icon-wrapper { width: 64px; height: 64px; border-radius: 18px; background: rgba(0, 119, 255, 0.1); color: #0077ff; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
          .info-card h3 { font-size: 1.25rem; font-weight: 800; color: #1a1a3a; margin-bottom: 4px; }
          .info-card p { color: #5a6a8a; line-height: 1.5; font-size: 1rem; }
        `}</style>
      </div>
      <Footer />
    </PageTransition>
  );
}

import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import { Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
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
  return (
    <PageTransition>
      <div className="contact-page-container">
        
        {/* Decorative Background Blobs */}
        <div className="contact-bg-blob blob-c"></div>
        <div className="contact-bg-blob blob-d"></div>

        <div className="contact-wrapper">
          <div className="contact-header">
            <h1 className="contact-title">Get in <span className="text-gradient">Touch</span></h1>
            <p className="contact-subtitle">Have questions about our medical visualization platform or interested in collaboration? We'd love to hear from you.</p>
          </div>
          
          <div className="contact-grid">
            
            {/* Contact Form */}
            <div className="contact-form-card glass-panel">
              <h2 className="form-heading"><MessageSquare className="inline-icon" /> Send a Message</h2>
              <form className="contact-form" onSubmit={handleWhatsAppRedirect}>
                <div className="form-group-split">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="How can we help you today?" required></textarea>
                </div>
                <button type="submit" className="submit-btn-premium">
                  <span>Send Message</span> <Send size={18} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-panel">
              <div className="info-card glass-panel">
                <div className="info-icon-wrapper"><MapPin size={28} /></div>
                <div>
                  <h3>Headquarters</h3>
                  <p>123 Medical Innovation Drive<br/>Jakarta, Indonesia 12000</p>
                </div>
              </div>
              <div className="info-card glass-panel">
                <div className="info-icon-wrapper"><Mail size={28} /></div>
                <div>
                  <h3>Email Us</h3>
                  <p>support@somalab.com<br/>partnerships@somalab.com</p>
                </div>
              </div>
              <div className="info-card glass-panel">
                <div className="info-icon-wrapper"><Phone size={28} /></div>
                <div>
                  <h3>Call Us</h3>
                  <p>+62 811 2345 6789<br/>Mon - Fri, 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <style>{`
          .contact-page-container {
            position: relative;
            min-height: 100vh;
            padding: 120px 5% 80px;
            font-family: 'Inter', sans-serif;
          }
          
          .contact-bg-blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            z-index: -1;
            opacity: 0.5;
          }
          .blob-c { top: 20%; left: -5%; width: 400px; height: 400px; background: #00d2ff; }
          .blob-d { bottom: 10%; right: 10%; width: 500px; height: 500px; background: #3a7bd5; }

          .contact-wrapper {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 10;
          }

          .contact-header {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 60px;
          }
          .contact-title {
            font-size: 3.5rem;
            font-weight: 800;
            color: #1a1a3a;
            margin-bottom: 16px;
            letter-spacing: -0.02em;
          }
          .text-gradient {
            background: linear-gradient(135deg, #0077ff 0%, #00d2ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .contact-subtitle {
            font-size: 1.15rem;
            color: #5a6a8a;
            line-height: 1.6;
          }

          .glass-panel {
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            border-radius: 24px;
            box-shadow: 0 20px 40px rgba(0, 50, 150, 0.05);
          }

          .contact-grid {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            gap: 40px;
            align-items: start;
          }
          @media (max-width: 900px) {
            .contact-grid { grid-template-columns: 1fr; }
          }

          /* Form Styles */
          .contact-form-card {
            padding: 40px;
          }
          @media (max-width: 600px) {
            .contact-form-card { padding: 25px; }
          }
          .form-heading {
            font-size: 1.8rem;
            font-weight: 800;
            color: #1a1a3a;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .inline-icon { color: #0077ff; }

          .form-group-split {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          @media (max-width: 600px) { .form-group-split { grid-template-columns: 1fr; } }
          
          .form-group {
            margin-bottom: 24px;
          }
          .form-group label {
            display: block;
            font-weight: 600;
            color: #1a1a3a;
            margin-bottom: 8px;
            font-size: 0.95rem;
          }
          .form-group input, .form-group textarea {
            width: 100%;
            padding: 14px 18px;
            border: 2px solid rgba(200, 210, 230, 0.6);
            border-radius: 14px;
            font-family: inherit;
            font-size: 1rem;
            background: rgba(255, 255, 255, 0.8);
            transition: all 0.3s ease;
            color: #1a1a3a;
            box-sizing: border-box;
          }
          .form-group input:focus, .form-group textarea:focus {
            outline: none;
            border-color: #0077ff;
            background: #ffffff;
            box-shadow: 0 0 0 4px rgba(0, 119, 255, 0.1);
          }

          .submit-btn-premium {
            width: 100%;
            background: linear-gradient(135deg, #0077ff 0%, #00bbff 100%);
            color: white;
            border: none;
            padding: 16px;
            border-radius: 14px;
            font-weight: 700;
            font-size: 1.05rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            box-shadow: 0 10px 25px rgba(0, 119, 255, 0.3);
            transition: all 0.3s ease;
          }
          .submit-btn-premium:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(0, 119, 255, 0.4);
          }

          /* Info Styles */
          .contact-info-panel {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .info-card {
            padding: 30px;
            display: flex;
            align-items: center;
            gap: 20px;
            transition: transform 0.3s ease;
          }
          .info-card:hover {
             transform: translateX(5px);
          }
          .info-icon-wrapper {
            width: 60px;
            height: 60px;
            background: rgba(0, 119, 255, 0.1);
            color: #0077ff;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .info-card h3 {
            font-size: 1.2rem;
            font-weight: 700;
            color: #1a1a3a;
            margin-bottom: 6px;
          }
          .info-card p {
            color: #4a5a7a;
            line-height: 1.5;
            font-size: 0.95rem;
          }
        `}</style>
      </div>
      <Footer />
    </PageTransition>
  );
}

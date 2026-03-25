import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Mail, MapPin } from 'lucide-react';
import '../index.css';

export default function Footer() {
  return (
    <footer className="global-footer">
      <div className="footer-glow-line"></div>
      <div className="footer-container">
        
        {/* Top Section */}
        <div className="footer-top">
          
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo">
              <img src="/somalab_logo.png" alt="SomaLab" className="footer-logo-img" />
              <span className="logo-text">Soma<span>Lab</span></span>
            </Link>
            <p className="footer-desc">
              Empowering preventative healthcare through immersive 3D clinical visualization. Bridging the gap between complex medical science and accessible public knowledge.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="social-icon" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Platform</h4>
            <ul className="footer-link-list">
              <li><Link to="/explore">3D Explorer</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/">Interactive Home</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-link-list">
              <li><Link to="/content">Clinical Articles</Link></li>
              <li><Link to="/contact">Contact Support</Link></li>
              <li><Link to="/content">Organ Guides</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>123 Medical Innovation Dr.<br/>Jakarta, Indonesia</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>support@somalab.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} SomaLab. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="#">Privacy Policy</Link>
            <span className="dot-separator">•</span>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

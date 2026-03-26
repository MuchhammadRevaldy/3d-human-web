import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../index.css';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (location.pathname === '/explore') {
    return null;
  }

  return (
    <nav className="universal-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <img src="/somalab_logo.png" alt="SomaLab" style={{ height: '28px', objectFit: 'contain' }} />
          <span className="logo-text">Soma<span>Lab</span></span>
        </Link>

        <button
          className={`navbar-toggle${isOpen ? ' is-active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`navbar-menu-wrapper ${isOpen ? 'is-open' : ''}`}>
          <div className="navbar-links">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>{t('nav.home')}</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>{t('nav.about')}</NavLink>
            <NavLink to="/content" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>{t('nav.content')}</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>{t('nav.contact')}</NavLink>
          </div>

          <div className="navbar-cta">
            <Link
              to="/explore"
              className={`cta-button primary-btn shimmer-btn ${i18n.language === 'id' ? 'lang-id' : ''}`}
            >
              <span>{t('nav.start_explore')}</span>
              <ArrowRight size={18} className="btn-icon-right" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

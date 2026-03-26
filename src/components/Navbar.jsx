import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../index.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scroll when menu is open
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
        {/* Logo Section */}
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <img src="/somalab_logo.png" alt="SomaLab" style={{ height: '32px', objectFit: 'contain' }} />
          <span className="logo-text">Soma<span>Lab</span></span>
        </Link>

        {/* Hamburger Button */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links & CTA Wrapper */}
        <div className={`navbar-menu-wrapper ${isOpen ? 'is-open' : ''}`}>
          <div className="navbar-links">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>About</NavLink>
            <NavLink to="/content" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Content</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Contact</NavLink>
          </div>

          <div className="navbar-cta">
            <Link to="/explore" className="cta-button primary-btn">
              Start 3D Exploration
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

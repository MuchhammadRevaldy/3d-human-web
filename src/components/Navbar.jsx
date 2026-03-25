import { NavLink, Link, useLocation } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';
import '../index.css';

export default function Navbar() {
  const location = useLocation();

  if (location.pathname === '/explore') {
    return null;
  }

  return (
    <nav className="universal-navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo">
          <Stethoscope className="logo-icon-svg" />
          <span className="logo-text">Vibrant<span>Wellness</span></span>
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>About</NavLink>
          <NavLink to="/content" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Konten</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Contact</NavLink>
        </div>

        {/* CTA Button */}
        <div className="navbar-cta">
          <Link to="/explore" className="cta-button primary-btn">
            Mulai Eksplorasi 3D
          </Link>
        </div>
      </div>
    </nav>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='header'>
      <h1>Jay Nursery</h1>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={menuOpen ? 'nav active' : 'nav'}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

      <div className="nav" classname={menuOpen ? 'nav active' : 'nav'}>
  <div className={`dropdown-wrapper ${servicesOpen ? 'open' : ''}`} ref={dropdownRef}>
    <span className="dropdown-toggle" onClick={() => setServicesOpen(!servicesOpen)}>
      Services 
    </span>

    {servicesOpen && (
      <div className="dropdown">
        <Link to="/services/gardening" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>Gardening services</Link>
        <Link to="/services/planting" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>Planting services</Link>
        <Link to="/services/pots" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>Pots</Link>
        <Link to="/services/indoor-plants" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>In-door plants</Link>
        <Link to="/services/flower-plants" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>Flower plants</Link>
      </div>
    )}
  </div>

  <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
</div>
    </div>
    </div>
  );
}

export default Header;

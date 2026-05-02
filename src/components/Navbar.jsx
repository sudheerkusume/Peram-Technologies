import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const serviceMenuItems = [
  { label: 'CCTV Cameras', href: '#services' },
  { label: 'Intercom Systems', href: '#services' },
  { label: 'Biometric Attendance', href: '#services' },
  { label: 'Door Access Control', href: '#services' },
  { label: 'LAN Networking', href: '#services' },
  { label: 'Intrusion Alarm Systems', href: '#services' },
  { label: 'Fire Safety & Alarms', href: '#fire-safety-alarms' },
  { label: 'PA Systems', href: '#pa-systems' },
  { label: 'Firewall & Security', href: '#firewall-security' },
  { label: 'Wi-Fi Access', href: '#wifi-access' },
  { label: 'Data Servers', href: '#data-servers' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      setServicesOpen(false);
    }
  }, [menuOpen]);

  const handleServicesClick = (e) => {
    if (window.innerWidth <= 960) {
      e.preventDefault();
      setServicesOpen((prev) => !prev);
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <img src={logo} alt="Peram Technologies Logo" className="logo-image" />
        </a>

        <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#hero" className="nav-links" onClick={() => setMenuOpen(false)}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={() => setMenuOpen(false)}>About Us</a>
          </li>
          <li className="nav-item nav-item-services">
            <a
              href="#services"
              className="nav-links services-trigger"
              onClick={handleServicesClick}
            >
              Services
            </a>
            <ul className={`services-dropdown ${servicesOpen ? 'mobile-open' : ''}`}>
              {serviceMenuItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} onClick={() => {
                    setMenuOpen(false);
                    setServicesOpen(false);
                  }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links nav-cta" onClick={() => setMenuOpen(false)}>Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

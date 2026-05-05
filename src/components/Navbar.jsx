import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo1.png';

const serviceMenuItems = [
  { id: 1, label: 'CCTV Cameras', tab: 'services' },
  { id: 2, label: 'Intercom Systems', tab: 'services' },
  { id: 3, label: 'Biometric Attendance', tab: 'services' },
  { id: 4, label: 'Door Access Control', tab: 'services' },
  { id: 5, label: 'LAN Networking', tab: 'services' },
  { id: 6, label: 'Intrusion Alarm Systems', tab: 'services' },
  { id: 7, label: 'Fire Safety & Alarms', tab: 'services' },
  { id: 8, label: 'PA Systems', tab: 'services' },
  { id: 9, label: 'Firewall & Security', tab: 'services' },
  { id: 10, label: 'Wi-Fi Access', tab: 'services' },
  { id: 11, label: 'Data Servers', tab: 'services' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToService = (id, tab) => {
    // Close menus
    setMenuOpen(false);
    setServicesOpen(false);

    // Emit global event for SolutionsHub and child components
    const navEvent = new CustomEvent('peram-nav-service', {
      detail: { id, tab }
    });
    window.dispatchEvent(navEvent);

    // Smooth scroll to the hub section
    const target = document.getElementById('solutions');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
              href="#solutions"
              className="nav-links services-trigger"
              onClick={(e) => {
                if (window.innerWidth <= 960) {
                  e.preventDefault();
                  setServicesOpen(!servicesOpen);
                }
              }}
            >
              Services
            </a>
            <ul className={`services-dropdown ${servicesOpen ? 'mobile-open' : ''}`}>
              {serviceMenuItems.map((item) => (
                <li key={item.label}>
                  <button
                    className="dropdown-link-btn"
                    onClick={() => navigateToService(item.id, item.tab)}
                  >
                    {item.label}
                  </button>
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

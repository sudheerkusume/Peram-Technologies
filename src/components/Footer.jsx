import React from 'react';
import './Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3 className="footer-brand">Peram <span>Tech</span></h3>
          <p className="footer-desc">
            Securing your world with intelligence through trusted surveillance, security, and networking solutions.
          </p>
          <div className="social-links">
            <a href="tel:+919121957508" className="social-link" aria-label="Call Peram Technologies"><FaPhoneAlt /></a>
            <a href="mailto:infoperamtech7@gmail.com" className="social-link" aria-label="Email Peram Technologies"><FaEnvelope /></a>
            <a href="https://wa.me/919121957508" target="_blank" rel="noreferrer" className="social-link" aria-label="Chat on WhatsApp"><FaWhatsapp /></a>
            <a href="#contact" className="social-link" aria-label="View location"><FaMapMarkerAlt /></a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">CCTV Cameras</a></li>
            <li><a href="#services">Biometric Attendance</a></li>
            <li><a href="#services">Door Access Control</a></li>
            <li><a href="#services">LAN Networking</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Contact Info</h4>
          <ul>
            <li><a href="tel:+919121957508">+91 9121957508</a></li>
            <li><a href="tel:+919949511553">+91 9949511553</a></li>
            <li><a href="mailto:infoperamtech7@gmail.com">infoperamtech7@gmail.com</a></li>
            <li><a href="#contact">Kukatpally, Hyderabad</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Peram Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

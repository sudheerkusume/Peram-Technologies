import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Services.css';
import Tilt from 'react-parallax-tilt';

import {
  FaVideo, FaPhoneAlt, FaFingerprint, FaDoorClosed,
  FaNetworkWired, FaBell
} from 'react-icons/fa';

const defaultHighlights = [
  'High-quality equipment from top brands',
  'Professional installation by certified technicians',
  'Regular maintenance and AMC support',
  'Scalable solutions for any business size'
];

const servicesData = [
  {
    id: 1,
    title: 'CCTV Cameras',
    description: 'HD surveillance with remote monitoring for homes, offices, and commercial spaces.',
    icon: <FaVideo />,
    color: 'blue',
    featured: true,
    category: 'Security',
    cta: 'Get Quote',
    highlights: defaultHighlights
  },
  {
    id: 2,
    title: 'Intercom Systems',
    description: 'Audio-video intercom solutions for secure visitor communication and controlled entry.',
    icon: <FaPhoneAlt />,
    color: 'purple',
    category: 'Infrastructure',
    cta: 'Get Quote',
    highlights: defaultHighlights
  },
  {
    id: 3,
    title: 'Biometric Attendance',
    description: 'Fingerprint and face attendance systems for accurate, tamper-resistant time tracking.',
    icon: <FaFingerprint />,
    color: 'green',
    category: 'Security',
    cta: 'Get Quote',
    highlights: defaultHighlights
  },
  {
    id: 4,
    title: 'Door Access Control',
    description: 'Smart entry control using cards, PINs, and biometric authentication.',
    icon: <FaDoorClosed />,
    color: 'red',
    category: 'Security',
    cta: 'Get Quote',
    highlights: defaultHighlights
  },
  {
    id: 5,
    title: 'LAN Networking',
    description: 'Structured LAN with reliable cabling, switching, and stable network performance.',
    icon: <FaNetworkWired />,
    color: 'orange',
    featured: true,
    category: 'Networking',
    cta: 'Get Quote',
    highlights: defaultHighlights
  },
  {
    id: 6,
    title: 'Intrusion Alarm Systems',
    description: 'Smart sensors and alerts that protect premises from unauthorized entry.',
    icon: <FaBell />,
    color: 'teal',
    category: 'Security',
    cta: 'Get Quote',
    highlights: defaultHighlights
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeServiceId, setActiveServiceId] = useState(1);

  const categories = ['All', 'Security', 'Networking', 'Infrastructure'];

  const filteredServices = activeTab === 'All' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeTab);
  const activeService = filteredServices.find((service) => service.id === activeServiceId) || filteredServices[0];

  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll('.cyber-card');
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <section className="services-cyber" id="services" onMouseMove={handleMouseMove}>
      {/* Ambient Background Glow */}
      <div className="cyber-orb orb-top-left"></div>
      <div className="cyber-orb orb-bottom-right"></div>
      <div className="cyber-grid-overlay"></div>

      <div className="services-container">

        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="header-badge">
            <span className="live-dot"></span> OUR SERVICES
          </div>

          <h2 className="cyber-title">
            Complete Security & IT Services
          </h2>

          <p className="cyber-subtitle">
            From supply and installation to maintenance support, we deliver reliable technology solutions for modern businesses.
          </p>

          <div className="filter-tabs">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-btn ${activeTab === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(cat);
                  const nextServices = cat === 'All'
                    ? servicesData
                    : servicesData.filter((service) => service.category === cat);
                  if (nextServices.length > 0) {
                    setActiveServiceId(nextServices[0].id);
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="cyber-bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          key={activeTab} // Retriggers animation on tab change
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div 
                key={service.id} 
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                layout
                className={`card-wrapper ${service.featured ? 'featured-wrapper' : ''}`}
                onMouseEnter={() => setActiveServiceId(service.id)}
              >
                <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.02} style={{ height: '100%' }}>
                  <div className={`cyber-card ${service.featured ? 'featured-card' : ''}`}>
                    <div className="cyber-card-content">
                      <div className={`icon-box ${service.color}`}>
                        {service.icon}
                      </div>

                      <h3 className="card-title">{service.title}</h3>

                      <p className="card-desc">{service.description}</p>

                      <a href="#contact" className="card-btn primary">
                        {service.cta}
                      </a>

                      {service.featured && (
                        <span className="enterprise-badge">Enterprise</span>
                      )}
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {activeService && (
          <motion.div
            className="service-spotlight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="spotlight-label">{activeService.title}</p>
            <h3>Premium {activeService.title} for Modern Security</h3>
            <p>{activeService.description}</p>
            <ul className="spotlight-list">
              {activeService.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <a href="#contact" className="cta-btn-large">Get a Quote for {activeService.title}</a>
          </motion.div>
        )}

        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>Need a custom enterprise solution?</h3>
          <p>Let's design a secure infrastructure tailored to your business.</p>
          <a href="#contact" className="cta-btn-large">Contact Our Experts</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
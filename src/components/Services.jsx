import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Services.css';
import Tilt from 'react-parallax-tilt';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import {
  FaVideo, FaPhoneAlt, FaFingerprint, FaDoorClosed,
  FaNetworkWired, FaBell, FaCheckCircle, FaFireExtinguisher,
  FaVolumeUp, FaShieldAlt, FaWifi, FaServer
} from 'react-icons/fa';

// Assets
import Camera1 from '../assets/Camera1.png';
import Camera2 from '../assets/Camera2.png';
import Camera3 from '../assets/Camera3.png';
import infosys1 from '../assets/infosys1.png';
import infosys2 from '../assets/infosys2.png';
import infosys3 from '../assets/infosys3.png';
import Bio1 from '../assets/Bio1.png';
import Bio2 from '../assets/Bio2.png';
import Bio3 from '../assets/Bio3.png';
import Sec1 from '../assets/Security.png';
import Sec2 from '../assets/Security1.png';
import Sec3 from '../assets/Security2.png';
import Lan1 from '../assets/Lan1.png';
import Lan2 from '../assets/Lan2.png';
import Secu1 from '../assets/secu1.png';
import Secu2 from '../assets/Secu2.png';
import Secu3 from '../assets/Secu3.png';
import fire from '../assets/Fire.png';
import Secur1 from '../assets/Secur1.png';
import Secur2 from '../assets/Secur2.png';
import Secur3 from '../assets/Secur3.png';
import firee from '../assets/firee.png';
import wifi1 from '../assets/wifi1.png';
import wifi2 from '../assets/wifi2.png';
import wifi3 from '../assets/wifi3.png';
const defaultHighlights = [
  'High-quality equipment from top brands',
  'Professional installation by certified technicians',
  'Regular maintenance and AMC support',
  'Scalable solutions for any business size'
];

const servicesData = [
  {
    id: 2,
    title: 'Intercom Systems',
    description: 'Audio-video intercom solutions for secure visitor communication and controlled entry.',
    icon: <FaPhoneAlt />,
    color: 'purple',
    category: 'Infrastructure',
    cta: 'Get Quote',
    highlights: defaultHighlights,
    images: [infosys1, infosys2, infosys3]
  },
  {
    id: 3,
    title: 'Biometric Attendance',
    description: 'Fingerprint and face attendance systems for accurate, tamper-resistant time tracking.',
    icon: <FaFingerprint />,
    color: 'green',
    category: 'Security',
    cta: 'Get Quote',
    highlights: defaultHighlights,
    images: [Bio1, Bio2, Bio3]
  },
  {
    id: 4,
    title: 'Door Access Control',
    description: 'Smart entry control using cards, PINs, and biometric authentication.',
    icon: <FaDoorClosed />,
    color: 'red',
    category: 'Security',
    cta: 'Get Quote',
    highlights: defaultHighlights,
    images: [Sec1, Sec2, Sec3]
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
    highlights: defaultHighlights,
    images: [Lan1, Lan2]
  },
  {
    id: 6,
    title: 'Intrusion Alarm Systems',
    description: 'Smart sensors and alerts that protect premises from unauthorized entry.',
    icon: <FaBell />,
    color: 'teal',
    category: 'Security',
    cta: 'Get Quote',
    highlights: defaultHighlights,
    images: [Secu1, Secu2, Secu3]
  },
  {
    id: 7,
    title: 'Fire Safety & Alarms',
    description: 'Comprehensive fire detection and alarm systems to safeguard lives and property.',
    icon: <FaFireExtinguisher />,
    color: 'red',
    category: 'Security',
    cta: 'Get Quote',
    highlights: defaultHighlights,
    images: [fire]
  },
  {
    id: 8,
    title: 'PA Systems',
    description: 'Public address systems for clear announcements and emergency notifications.',
    icon: <FaVolumeUp />,
    color: 'orange',
    category: 'Security',
    cta: 'Get Quote',
    highlights: defaultHighlights,
    images: [Secur1, Secur2, Secur3]
  },
  {
    id: 9,
    title: 'Firewall & Security',
    description: 'Enterprise-grade cybersecurity solutions to protect your digital assets.',
    icon: <FaShieldAlt />,
    color: 'blue',
    category: 'Security',
    cta: 'Get Quote',
    highlights: defaultHighlights,
    images: [firee]
  },
  {
    id: 10,
    title: 'Wi-Fi Access',
    description: 'High-speed, secure wireless connectivity for your entire facility.',
    icon: <FaWifi />,
    color: 'blue',
    category: 'Networking',
    cta: 'Get Quote',
    highlights: defaultHighlights,
    images: [wifi1, wifi2, wifi3]
  },
  {
    id: 1,
    title: 'CCTV Cameras',
    description: 'HD surveillance with remote monitoring for homes, offices, and commercial spaces.',
    spotlightTitle: 'Premium CCTV Cameras for Modern Security',
    spotlightDescription: 'High-definition surveillance systems with remote monitoring and AI detection. We offer IP cameras, PTZ cameras, and night-vision enabled systems for 24/7 security.',
    icon: <FaVideo />,
    color: 'blue',
    featured: true,
    category: 'Security',
    cta: 'Get a Quote for CCTV Cameras',
    highlights: defaultHighlights,
    images: [Camera1, Camera2, Camera3]
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

const Services = ({ isNested = false }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeService, setActiveService] = useState(servicesData[0]);
  const showcaseRef = useRef(null);

  useEffect(() => {
    const handleGlobalNav = (e) => {
      const { id, tab } = e.detail;
      if (tab === 'services') {
        const target = servicesData.find(s => s.id === id);
        if (target) {
          setActiveService(target);
          setTimeout(() => {
            showcaseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 300);
        }
      }
    };
    window.addEventListener('peram-nav-service', handleGlobalNav);
    return () => window.removeEventListener('peram-nav-service', handleGlobalNav);
  }, []);

  const categories = ['All', 'Security', 'Networking', 'Infrastructure'];

  const filteredServices = activeTab === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === activeTab);

  const handleServiceSelect = (service) => {
    setActiveService(service);
    setTimeout(() => {
      showcaseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const renderTitle = (title, highlight) => {
    if (!title) return null;
    const parts = title.split(highlight);
    if (parts.length === 2) {
      return <>{parts[0]}<span className="text-highlight">{highlight}</span>{parts[1]}</>;
    }
    return title;
  };

  const content = (
    <div className="services-container">
      {!isNested && (
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
        </motion.div>
      )}

      <div className="filter-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeTab === cat ? 'active' : ''}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

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
            >
              <Tilt glareEnable={true} glareMaxOpacity={0.05} scale={1.02} style={{ height: '100%' }}>
                <div
                  className={`cyber-card ${service.featured ? 'featured-card' : ''} ${activeService.id === service.id ? 'active-card' : ''}`}
                  onClick={() => handleServiceSelect(service)}
                >
                  <div className="cyber-card-content">
                    <div className={`icon-box ${service.color}`}>
                      {service.icon}
                    </div>

                    <h3 className="card-title">{service.title}</h3>

                    <p className="card-desc">{service.description}</p>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleServiceSelect(service);
                      }}
                      className="card-btn primary learn-more-btn"
                    >
                      View Details
                    </button>

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

      {/* --- PREMIUM PRODUCT SPOTLIGHT --- */}
      <motion.div
        ref={showcaseRef}
        className="service-showcase"
        key={activeService.id}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* LEFT: TEXT CONTENT */}
        <div className="showcase-text">
          <div className="showcase-label">
            <span className="showcase-icon-small">{activeService.icon}</span>
            {activeService.category}
          </div>

          <h3>{activeService.spotlightTitle || activeService.title}</h3>

          <p className="showcase-desc">
            {activeService.spotlightDescription || activeService.description}
          </p>

          <ul className="showcase-features">
            {activeService.highlights.map((item, idx) => (
              <li key={idx}>
                <FaCheckCircle className="check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a href="#contact" className="showcase-btn">
            {activeService.cta || 'Get a Quote'}
          </a>
        </div>

        {/* RIGHT: IMAGE SHOWCASE */}
        <div className="showcase-carousel">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            className="showcase-swiper"
          >
            {activeService.images?.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="showcase-image-wrapper">
                  <img
                    src={img}
                    alt={activeService.title}
                    className="showcase-image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>

      {!isNested && (
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
      )}
    </div>
  );

  if (isNested) return content;

  return (
    <section className="services-cyber" id="services">
      {content}
    </section>
  );
};

export default Services;
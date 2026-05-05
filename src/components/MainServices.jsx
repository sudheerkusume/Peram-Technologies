import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFire, FaBullhorn, FaShieldAlt, FaWifi, FaServer, FaCheckCircle } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './MainServices.css';

// Assets
import Camera1 from '../assets/Camera1.png';
import Camera2 from '../assets/Camera2.png';
import Camera3 from '../assets/Camera3.png';
import fire from '../assets/Fire.png';
import Secur1 from '../assets/Secur1.png';
import Secur2 from '../assets/Secur2.png';
import Secur3 from '../assets/Secur3.png';
import firee from '../assets/firee.png';
import wifi1 from '../assets/wifi1.png';
import wifi2 from '../assets/wifi2.png';
import wifi3 from '../assets/wifi3.png';

const detailedServices = [
  {
    id: 'fire-safety-alarms',
    title: 'Fire Safety & Alarms',
    category: 'Life Safety',
    description: 'Fire detection and alarm systems designed for fast response and safety compliance. We provide addressable and conventional systems.',
    icon: <FaFire />,
    highlights: [
      'Smoke & heat detection technology',
      'Automatic fire suppression triggers',
      'Compliant with international standards',
      '24/7 monitoring and AMC support'
    ],
    images: [fire]
  },
  {
    id: 'pa-systems',
    title: 'PA Systems',
    category: 'Audio Infrastructure',
    description: 'Public address systems for clear announcements and emergency communication in large commercial and industrial spaces.',
    icon: <FaBullhorn />,
    highlights: [
      'High-fidelity zonal paging',
      'Background music integration',
      'Emergency voice evacuation',
      'Wireless microphone solutions'
    ],
    images: [Secur1, Secur2, Secur3]
  },
  {
    id: 'firewall-security',
    title: 'Firewall & Security',
    category: 'Cyber Infrastructure',
    description: 'Enterprise network protection with hardened firewall systems and proactive threat control to keep your data secure.',
    icon: <FaShieldAlt />,
    highlights: [
      'Next-Gen UTM Firewalls',
      'Intrusion Prevention Systems',
      'VPN & Secure Remote Access',
      'Deep Packet Inspection'
    ],
    images: [firee]
  },
  {
    id: 'wifi-access',
    title: 'Wi-Fi Access',
    category: 'Wireless Networking',
    description: 'Secure high-speed wireless infrastructure with stable coverage and seamless roaming for high-density environments.',
    icon: <FaWifi />,
    highlights: [
      'Enterprise Wi-Fi 6 technology',
      'Seamless floor-to-floor roaming',
      'Guest network management',
      'RF Heatmapping & optimization'
    ],
    images: [wifi1, wifi2, wifi3]
  },
  {
    id: 'data-servers',
    title: 'Data Servers',
    category: 'Storage & Computing',
    description: 'Reliable server and storage setups with secure configuration, RAID redundancy, and scalable computing power.',
    icon: <FaServer />,
    highlights: [
      'Custom server configurations',
      'High-availability storage (SAN/NAS)',
      'Virtualization & Cloud hybrid',
      'Server room infrastructure setup'
    ],
    images: [Camera1, Camera2, Camera3]
  },
];

const MainServices = ({ isNested = false }) => {
  const [activeService, setActiveService] = useState(detailedServices[0]);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleGlobalNav = (e) => {
      const { id, tab } = e.detail;
      if (tab === 'main') {
        const target = detailedServices.find(s => s.id === id || s.id.includes(id));
        // Detailed services might have string IDs, but we can match them
        if (target) {
          setActiveService(target);
          setTimeout(() => {
            spotlightRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 300);
        }
      }
    };
    window.addEventListener('peram-nav-service', handleGlobalNav);
    return () => window.removeEventListener('peram-nav-service', handleGlobalNav);
  }, []);

  const handleServiceSelect = (service) => {
    setActiveService(service);
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        spotlightRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const content = (
    <div className="main-services-container">
      {!isNested && (
        <div className="main-services-header">
          <p className="main-services-badge">ADVANCED SERVICES</p>
          <h2>Infrastructure & Safety Systems</h2>
          <p>
            Explore our specialized enterprise-grade operations and safety solutions.
          </p>
        </div>
      )}

      {/* SELECTION GRID */}
      <div className="main-services-list">
        {detailedServices.map((service, index) => (
          <motion.div
            key={service.id}
            className={`main-service-card ${activeService.id === service.id ? 'active' : ''}`}
            onClick={() => handleServiceSelect(service)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="main-service-title-row">
              <span className="main-service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
            </div>
            <p className="main-service-card-desc">{service.description}</p>
            <button className="view-details-hub">View Showcase</button>
          </motion.div>
        ))}
      </div>

      {/* --- PREMIUM SPOTLIGHT SHOWCASE --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService.id}
          ref={spotlightRef}
          className="main-spotlight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
        >
          <div className="spotlight-text">
            <div className="spotlight-badge">
              {activeService.icon}
              <span>{activeService.category}</span>
            </div>
            <h3>{activeService.title}</h3>
            <p className="spotlight-desc">{activeService.description}</p>
            
            <ul className="spotlight-features">
              {activeService.highlights.map((h, i) => (
                <li key={i}>
                  <FaCheckCircle className="check-icon" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="spotlight-cta-btn">
              Inquire About {activeService.title}
            </a>
          </div>

          <div className="spotlight-visual">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              loop
              className="spotlight-swiper"
            >
              {activeService.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="spotlight-img-wrap">
                    <img src={img} alt={activeService.title} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );

  if (isNested) return content;

  return (
    <section className="main-services" id="main-services">
      {content}
    </section>
  );
};

export default MainServices;

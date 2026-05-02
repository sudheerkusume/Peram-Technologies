import React from 'react';
import { motion } from 'framer-motion';
import { FaFire, FaBullhorn, FaShieldAlt, FaWifi, FaServer } from 'react-icons/fa';
import './MainServices.css';

const detailedServices = [
  {
    id: 'fire-safety-alarms',
    title: 'Fire Safety & Alarms',
    description:
      'Fire detection and alarm systems designed for fast response and safety compliance.',
    icon: <FaFire />,
  },
  {
    id: 'pa-systems',
    title: 'PA Systems',
    description:
      'Public address systems for clear announcements and emergency communication.',
    icon: <FaBullhorn />,
  },
  {
    id: 'firewall-security',
    title: 'Firewall & Security',
    description:
      'Enterprise network protection with hardened firewall and proactive threat control.',
    icon: <FaShieldAlt />,
  },
  {
    id: 'wifi-access',
    title: 'Wi-Fi Access',
    description:
      'Secure high-speed wireless infrastructure with stable coverage and seamless roaming.',
    icon: <FaWifi />,
  },
  {
    id: 'data-servers',
    title: 'Data Servers',
    description:
      'Reliable server and storage setups with secure configuration and scalability.',
    icon: <FaServer />,
  },
];

const featurePoints = [
  'High-quality equipment from top brands',
  'Professional installation by certified technicians',
  'Regular maintenance and AMC support',
  'Scalable solutions for any business size',
];

const MainServices = () => {
  return (
    <section className="main-services" id="main-services">
      <div className="main-services-container">
        <div className="main-services-header">
          <p className="main-services-badge">ADVANCED SERVICES</p>
          <h2>Extended Security & Infrastructure Services</h2>
          <p>
            Explore the remaining specialized services delivered by Peram Technologies
            for enterprise-grade operations and safety.
          </p>
        </div>

        <div className="main-services-list">
          {detailedServices.map((service, index) => (
            <motion.article
              key={service.id}
              id={service.id}
              className="main-service-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="main-service-title-row">
                <span className="main-service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
              <ul>
                {featurePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a href="#contact" className="main-service-cta">
                Get Quote
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServices;

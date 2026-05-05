import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaVideo, FaPhoneAlt, FaFingerprint, FaDoorClosed,
  FaNetworkWired, FaBell, FaFireExtinguisher, FaVolumeUp,
  FaShieldAlt, FaWifi, FaServer, FaCheckCircle
} from "react-icons/fa";
import "./Material.css";

// Assets
import Camera1 from "../assets/Camera1.png";
import Camera2 from "../assets/Camera2.png";
import Camera3 from "../assets/Camera3.png";
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
import Secu1 from '../assets/Secu1.png';
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

const materialsData = [
  {
    id: 1,
    title: "CCTV Cameras",
    subtitle: "Premium CCTV Cameras for Modern Security",
    description: "High-definition surveillance systems with remote monitoring and AI detection. We offer IP cameras, PTZ cameras, and night-vision enabled systems for 24/7 security.",
    icon: <FaVideo />,
    highlights: [
      "High-quality equipment from top brands",
      "Professional installation by certified technicians",
      "Regular maintenance and AMC support",
      "Scalable solutions for any business size"
    ],
    images: [Camera1, Camera2, Camera3]
  },
  {
    id: 2,
    title: "Intercom Systems",
    subtitle: "Smart Communication & Entry Management",
    description: "Advanced audio-video intercom solutions for residential and commercial complexes. Ensure secure visitor identification and seamless communication.",
    icon: <FaPhoneAlt />,
    highlights: [
      "Crystal clear audio & HD video",
      "Multi-apartment support",
      "Mobile app integration",
      "Remote door unlocking features"
    ],
    images: [infosys1, infosys2, infosys3]
  },
  {
    id: 3,
    title: "Biometric Attendance",
    subtitle: "Precise Time Tracking & Access Control",
    description: "State-of-the-art biometric systems including fingerprint, face, and iris recognition to eliminate buddy punching and ensure accurate attendance.",
    icon: <FaFingerprint />,
    highlights: [
      "High-speed recognition (under 1s)",
      "Cloud-based data management",
      "Integration with HR/Payroll software",
      "Anti-spoofing technology"
    ],
    images: [Bio1, Bio2, Bio3]
  },
  {
    id: 4,
    title: "Door Access Control",
    subtitle: "Managed Entry for Secure Premises",
    description: "Centralized control of all entry and exit points. Use RFID cards, PINs, or biometrics to manage who enters your sensitive areas.",
    icon: <FaDoorClosed />,
    highlights: [
      "Real-time monitoring & logging",
      "Time-based access schedules",
      "Emergency override & lockdown",
      "Scalable for multi-location offices"
    ],
    images: [Sec1, Sec2, Sec3]
  },
  {
    id: 5,
    title: "LAN Networking",
    subtitle: "Reliable & High-Speed Data Infrastructure",
    description: "Professional structured cabling and network design. We provide end-to-end LAN solutions including server racking, switching, and routing.",
    icon: <FaNetworkWired />,
    highlights: [
      "CAT6/CAT6A & Fiber Optic cabling",
      "Professional rack management",
      "Redundant network design",
      "Fluke testing & certification"
    ],
    images: [Lan1, Lan2]
  },
  {
    id: 6,
    title: "Intrusion Alarm Systems",
    subtitle: "Proactive Theft & Break-in Protection",
    description: "Smart sensors and motion detectors that trigger instant alerts upon unauthorized entry. Protect your assets 24/7 with reliable alarm monitoring.",
    icon: <FaBell />,
    highlights: [
      "Wireless & Wired configurations",
      "Glass break & door contact sensors",
      "Silent & Panic alarm features",
      "Mobile app notification system"
    ],
    images: [Secu1, Secu2, Secu3]
  },
  {
    id: 7,
    title: "Fire Safety & Alarms",
    subtitle: "Early Detection & Life Safety Systems",
    description: "Advanced smoke, heat, and flame detectors integrated with fire alarm panels. Compliant with international safety standards for maximum protection.",
    icon: <FaFireExtinguisher />,
    highlights: [
      "Addressable & Conventional systems",
      "Voice evacuation integration",
      "Automatic fire suppression triggers",
      "Regular safety audits & AMC"
    ],
    images: [fire]
  },
  {
    id: 8,
    title: "PA Systems",
    subtitle: "Professional Audio & Announcement Systems",
    description: "Public Address systems for background music and critical announcements in malls, schools, factories, and commercial buildings.",
    icon: <FaVolumeUp />,
    highlights: [
      "Zonal paging & announcements",
      "High-fidelity ceiling & wall speakers",
      "Integration with fire alarm systems",
      "Wireless microphone solutions"
    ],
    images: [Secur1, Secur2, Secur3]
  },
  {
    id: 9,
    title: "Firewall & Security",
    subtitle: "Next-Gen Protection Against Cyber Threats",
    description: "Advanced network security solutions to protect your data from hacking, malware, and unauthorized access. Unified threat management (UTM).",
    icon: <FaShieldAlt />,
    highlights: [
      "Intrusion Prevention Systems (IPS)",
      "VPN for secure remote work",
      "Web & Content filtering",
      "Deep packet inspection"
    ],
    images: [firee]
  },
  {
    id: 10,
    title: "Wi-Fi Access",
    subtitle: "Seamless High-Speed Wireless Coverage",
    description: "Enterprise-grade Wi-Fi solutions for seamless roaming and high-density user environments. Perfect for large offices and warehouses.",
    icon: <FaWifi />,
    highlights: [
      "Wi-Fi 6 technology support",
      "Seamless roaming across floors",
      "Guest network & portal management",
      "Heatmapping for optimal coverage"
    ],
    images: [wifi1, wifi2, wifi3]
  },
  {
    id: 11,
    title: "Data Servers",
    subtitle: "Scalable Computing Power & Storage",
    description: "Robust server infrastructure for running your critical business applications and storing data securely with high availability.",
    icon: <FaServer />,
    highlights: [
      "Custom server configurations",
      "RAID & Redundant storage",
      "Server virtualization solutions",
      "Efficient cooling & power management"
    ],
    images: [Camera1, Camera2, Camera3]
  }
];

const Material = ({ isNested = false }) => {
  const [activeId, setActiveId] = useState(1);
  const activeMaterial = materialsData.find(m => m.id === activeId);
  const materialShowcaseRef = useRef(null);

  const handleMaterialSelect = (id) => {
    setActiveId(id);
    // On mobile/tablet, scroll down to the content
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        materialShowcaseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const content = (
    <div className="material-container">
      {!isNested && (
        <motion.div 
          className="material-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="material-badge">OUR HARDWARE PORTFOLIO</div>
          <h2 className="material-title">Premium Equipment & Materials</h2>
          <p className="material-subtitle-main">
            We supply and install top-tier hardware from industry-leading global brands.
          </p>
        </motion.div>
      )}

      <div className="material-grid">
        
        {/* LEFT: VERTICAL NAVIGATION */}
        <div className="material-nav-column">
          <div className="material-nav-list">
            {materialsData.map((item) => (
              <button
                key={item.id}
                className={`material-nav-item ${activeId === item.id ? "active" : ""}`}
                onClick={() => handleMaterialSelect(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.title}</span>
                {activeId === item.id && (
                  <motion.div 
                    className="nav-active-indicator"
                    layoutId="nav-indicator"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: CONTENT SHOWCASE */}
        <div className="material-content-column">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              ref={materialShowcaseRef}
              className="material-showcase-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="showcase-inner-grid">
                
                {/* TEXT CONTENT (col-lg-6 equivalent) */}
                <div className="showcase-text">
                  <div className="active-icon-bg">{activeMaterial.icon}</div>
                  <h4 className="active-subtitle">{activeMaterial.subtitle}</h4>
                  <h3 className="active-title">{activeMaterial.title}</h3>
                  <p className="active-desc">{activeMaterial.description}</p>
                  
                  <ul className="active-highlights">
                    {activeMaterial.highlights.map((h, i) => (
                      <li key={i}>
                        <FaCheckCircle className="h-check" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="material-quote-btn">
                    Request Material Quote
                  </a>
                </div>

                {/* CAROUSEL (col-lg-6 equivalent) */}
                <div className="showcase-carousel-box">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={15}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    loop={true}
                    className="material-swiper"
                  >
                    {activeMaterial.images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="material-img-wrapper">
                          <img src={img} alt={activeMaterial.title} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );

  if (isNested) return content;

  return (
    <section className="material-section" id="material">
      {content}
    </section>
  );
};

export default Material;

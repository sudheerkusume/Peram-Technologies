import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Services from './Services';
import Material from './Material';
import MainServices from './MainServices';
import './SolutionsHub.css';
import { FaShieldAlt, FaTools, FaMicrochip } from 'react-icons/fa';

const SolutionsHub = () => {
  const [activeTab, setActiveTab] = useState('services');

  React.useEffect(() => {
    const handleGlobalNav = (e) => {
      const { tab } = e.detail;
      if (tab) {
        setActiveTab(tab);
      }
    };
    window.addEventListener('peram-nav-service', handleGlobalNav);
    return () => window.removeEventListener('peram-nav-service', handleGlobalNav);
  }, []);

  const tabs = [
    {
      id: 'services',
      label: 'Security Solutions',
      icon: <FaShieldAlt />,
      description: 'Advanced surveillance & monitoring'
    },
    {
      id: 'material',
      label: 'Hardware & Products',
      icon: <FaMicrochip />,
      description: 'Premium safety & IT equipment'
    },
    {
      id: 'main',
      label: 'Support & Infrastructure',
      icon: <FaTools />,
      description: 'AMC, maintenance & networking'
    }
  ];

  return (
    <section className="solutions-hub-section" id="solutions">
      <div className="hub-container">
        
        {/* Hub Header */}
        <div className="hub-header">
          <span className="hub-badge">OUR ECOSYSTEM</span>
          <h2 className="hub-title">Comprehensive Tech & Security Hub</h2>
          <p className="hub-subtitle">
            Explore our end-to-end solutions, from high-quality hardware to professional installation and maintenance.
          </p>
        </div>

        {/* Premium Tab Switcher */}
        <div className="hub-switcher-wrapper">
          <div className="hub-switcher">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`hub-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="tab-icon">{tab.icon}</div>
                <div className="tab-text">
                  <span className="tab-label">{tab.label}</span>
                  <span className="tab-desc">{tab.description}</span>
                </div>
                {activeTab === tab.id && (
                  <motion.div 
                    className="tab-active-bg" 
                    layoutId="hub-active-bg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="hub-content-area">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="hub-render-wrap"
            >
              {activeTab === 'services' && <Services isNested={true} />}
              {activeTab === 'material' && <Material isNested={true} />}
              {activeTab === 'main' && <MainServices isNested={true} />}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default SolutionsHub;

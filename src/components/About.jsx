import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  FaCheckCircle,
  FaProjectDiagram,
  FaGlobe,
  FaHeadset,
  FaRocket,
  FaShieldAlt
} from "react-icons/fa";
import "./About.css";
import aboutImg from "../assets/about-security.webp"; // Optimized image

const Counter = ({ from, to, duration = 2 }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value);
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{from}</span>;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 }
  })
};

const About = () => {
  return (
    <section className="about" id="about">
      {/* Background Orbs for Premium feel */}
      <div className="about-orb orb-1"></div>
      <div className="about-orb orb-2"></div>
      
      <div className="about-container">

        {/* TOP SECTION: Split Layout (Text + Image) */}
        <div className="about-hero">
          <motion.div
            className="about-header"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h4 variants={fadeUp} custom={1} className="section-subtitle">
              <span className="subtitle-line"></span>ABOUT PERAM TECHNOLOGIES
            </motion.h4>

            <motion.h2 variants={fadeUp} custom={2} className="section-title">
              Your Trusted Partner in <br />
              <span className="highlight-text">Advanced Security Solutions.</span>
            </motion.h2>

            <motion.p variants={fadeUp} custom={3} className="about-description">
              At Peram Technologies, we believe that security is not just a service, but a commitment to peace of mind. With over a decade of experience, we specialize in delivering cutting-edge surveillance, networking, and safety solutions tailored to the unique needs of our clients.
            </motion.p>
            
            <motion.div variants={fadeUp} custom={4} className="about-features-inline">
              <div className="feature-inline">
                <FaShieldAlt className="feature-icon" />
                <span>Uncompromising Security</span>
              </div>
              <div className="feature-inline">
                <FaGlobe className="feature-icon" />
                <span>Future-Ready Tech</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-glass-container">
              <img src={aboutImg} alt="Advanced Security Solutions" className="about-image" />
              <div className="image-floating-badge">
                <FaShieldAlt /> 100% Safe
              </div>
            </div>
          </motion.div>
        </div>

        {/* GRID SECTION */}
        <div className="bento-grid">

          {/* SERVICES MAIN CARD */}
          <motion.div
            className="bento-card span-2 highlight-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
          >
            <div className="card-glow"></div>
            <div className="icon-wrapper blue"><FaRocket /></div>
            <h3>Our Services</h3>
            <p className="card-desc">We deliver intelligent security and networking solutions designed for modern businesses and homes.</p>

            <ul className="about-list">
              <li><FaCheckCircle className="check-icon" /> Expert Sales & Consultation</li>
              <li><FaCheckCircle className="check-icon" /> Professional Installation & Setup</li>
              <li><FaCheckCircle className="check-icon" /> Comprehensive AMC Services</li>
              <li><FaCheckCircle className="check-icon" /> 24/7 Technical Support</li>
            </ul>
          </motion.div>

          {/* STAT CARDS */}
          <motion.div className="bento-card stat-card glass" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}>
            <span className="stat-number"><Counter from={0} to={10} /><span className="plus">+</span></span>
            <span className="stat-label">Years of Experience</span>
          </motion.div>

          <motion.div className="bento-card stat-card dark-glass" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}>
            <FaProjectDiagram className="bg-icon" />
            <div className="stat-content">
              <span className="stat-number"><Counter from={0} to={500} /><span className="plus">+</span></span>
              <span className="stat-label">Projects</span>
            </div>
          </motion.div>

          <motion.div className="bento-card stat-card glass" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={4}>
            <FaShieldAlt className="bg-icon" />
            <div className="stat-content">
              <span className="stat-number"><Counter from={0} to={100} /><span className="plus">%</span></span>
              <span className="stat-label">Safety</span>
            </div>
          </motion.div>

          <motion.div className="bento-card stat-card blue-gradient" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={5}>
            <FaHeadset className="bg-icon" />
            <div className="stat-content">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </motion.div>

        </div>

        {/* MARQUEE */}
        <motion.div 
          className="tech-marquee-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="marquee-title">COMPREHENSIVE SECURITY SOLUTIONS</p>

          <div className="marquee">
            <div className="marquee-content">
              {[
                "CCTV Surveillance",
                "Biometrics",
                "Access Control",
                "Networking",
                "Intercom",
                "Fire Alarms",
                "Video Door Phones",
                "Smart Home"
              ].map((item, i) => (
                <span key={i}>
                  {item} <span className="dot">•</span>
                </span>
              ))}

              {/* duplicate for loop */}
              {[
                "CCTV Surveillance",
                "Biometrics",
                "Access Control",
                "Networking",
                "Intercom",
                "Fire Alarms",
                "Video Door Phones",
                "Smart Home"
              ].map((item, i) => (
                <span key={"dup" + i}>
                  {item} <span className="dot">•</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
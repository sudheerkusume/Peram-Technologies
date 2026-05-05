// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import '../components/Hero.css'

// const slides = [
//   {
//     id: 1,
//     title: "Securing Your World with",
//     highlight: "Intelligence",
//     desc: "Advanced CCTV and surveillance solutions for homes, offices, and enterprises.",
//     img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070",
//   },
//   {
//     id: 2,
//     title: "Reliable Protection with",
//     highlight: "Smart Security",
//     desc: "End-to-end security and networking services from consultation to AMC support.",
//     img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070",
//   },
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleMouseMove = (e) => {
//     const x = (e.clientX / window.innerWidth - 0.5) * 20;
//     const y = (e.clientY / window.innerHeight - 0.5) * 20;
//     setMouse({ x, y });
//   };

//   return (
//     <section className="hero" id="hero" onMouseMove={handleMouseMove}>
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           className="slide"
//           initial={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
//           animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
//           exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//         >
//           {/* Background */}
//           <motion.div
//             className="bg"
//             style={{ 
//               backgroundImage: `url(${slides[index].img})`,
//               transform: `translate(${mouse.x}px, ${mouse.y}px)`
//             }}
//             initial={{ scale: 1.2 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 6 }}
//           />

//           <div className="overlay" />

//           {/* Content */}
//           <div className="content">
//             <motion.div 
//               className="glass-panel"
//               initial={{ x: -50, opacity: 0, backdropFilter: "blur(0px)" }}
//               animate={{ x: 0, opacity: 1, backdropFilter: "blur(20px)" }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <motion.h1 className="hero-title">
//                 {slides[index].title.split(" ").map((word, i) => (
//                   <motion.span
//                     key={i}
//                     initial={{ y: 30, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.4 + i * 0.1 }}
//                     style={{ display: "inline-block", marginRight: "12px" }}
//                   >
//                     {word}
//                   </motion.span>
//                 ))}
//                 <br />
//                 <motion.span 
//                   className="highlight"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4 + slides[index].title.split(" ").length * 0.1 }}
//                 >
//                   {slides[index].highlight}
//                 </motion.span>
//               </motion.h1>

//               <motion.p
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//               >
//                 {slides[index].desc}
//               </motion.p>

//               <motion.div
//                 className="buttons"
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 1.0 }}
//               >
//                 <a href="#services" className="primary">Explore Services</a>
//                 <a href="#contact" className="secondary">Get a Quote</a>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       <div className="progress">
//         <div key={index} className="progress-fill"></div>
//       </div>

//       {/* Premium additions: Slide Counter & Scroll Indicator */}
//       <div className="slide-counter">
//         <span className="current">0{index + 1}</span>
//         <span className="divider"></span>
//         <span className="total">0{slides.length}</span>
//       </div>

//       <a href="#about" className="scroll-indicator">
//         <div className="mouse">
//           <div className="wheel"></div>
//         </div>
//       </a>
//     </section>
//   );
// }

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import "../components/Hero.css";

// const slides = [
//   {
//     id: 1,
//     title: "Enterprise-Grade Security",
//     highlight: "Built for Modern Infrastructure",
//     desc: "CCTV, networking, and smart surveillance solutions designed for reliability, scalability, and real-time protection.",
//     img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070",
//   },
//   {
//     id: 2,
//     title: "Reliable Protection Systems",
//     highlight: "Smart. Secure. Scalable.",
//     desc: "From consultation to AMC support, we deliver complete security ecosystems tailored to your business.",
//     img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070",
//   },
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="hero" id="hero">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           className="slide"
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//         >
//           {/* Background */}
//           <div
//             className="bg"
//             style={{ backgroundImage: `url(${slides[index].img})` }}
//           />

//           {/* Overlay */}
//           <div className="overlay" />

//           {/* Content */}
//           <div className="content">
//             <motion.div
//               className="glass-panel"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 {slides[index].title}
//                 <br />
//                 <span className="highlight">
//                   {slides[index].highlight}
//                 </span>
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 {slides[index].desc}
//               </motion.p>

//               <motion.div
//                 className="buttons"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//               >
//                 <a href="#services" className="primary">
//                   Explore Services
//                 </a>
//                 <a href="#contact" className="secondary">
//                   Get a Quote
//                 </a>
//               </motion.div>

//               {/* Trust Line */}
//               <motion.div
//                 className="trust"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//               >
//                 Trusted by 100+ clients • 24/7 Support • Fast Deployment
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Progress Bar */}
//       <div className="progress">
//         <div key={index} className="progress-fill"></div>
//       </div>

//       {/* Slide Counter */}
//       <div className="slide-counter">
//         <span className="current">0{index + 1}</span>
//         <span className="divider"></span>
//         <span className="total">0{slides.length}</span>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import ParticlesCanvas from "../components/Particles";
import { FaShieldAlt, FaVideo, FaTools } from "react-icons/fa";
import "../components/Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      {/* 🌌 WebGL Background */}
      <div className="webgl-bg">
        <ParticlesCanvas />
      </div>

      {/* Overlay for readability */}
      <div className="overlay"></div>

      <div className="container">

        <div className="left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Next-Gen Security Systems
            <br />
            <span className="highlight-text">Powered by Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Experience AI-driven surveillance and networking solutions
            built for speed, scalability, and complete protection.
          </motion.p>

          <div className="buttons">
            <a href="#contact" className="primary">
              Get Free Consultation
            </a>
            <a
              href="https://wa.me/919063199821"
              target="_blank"
              rel="noreferrer"
              className="whatsapp"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="trust">
            ⭐ 500+ Clients • Fast Deployment • 24/7 Support
          </div>
        </div>

        <div className="right">
          <div className="glass-card">
            <h3>Why Choose Us</h3>
            <ul>
              <li><FaVideo className="card-icon" /> AI Monitoring</li>
              <li><FaShieldAlt className="card-icon" /> 5+ Years Experience</li>
              <li><FaTools className="card-icon" /> AMC Support</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import '../components/Hero.css'

const slides = [
  {
    id: 1,
    title: "Securing Your World with",
    highlight: "Intelligence",
    desc: "Advanced CCTV and surveillance solutions for homes, offices, and enterprises.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
  },
  {
    id: 2,
    title: "Reliable Protection with",
    highlight: "Smart Security",
    desc: "End-to-end security and networking services from consultation to AMC support.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setMouse({ x, y });
  };

  return (
    <section className="hero" id="hero" onMouseMove={handleMouseMove}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="slide"
          initial={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Background */}
          <motion.div
            className="bg"
            style={{ 
              backgroundImage: `url(${slides[index].img})`,
              transform: `translate(${mouse.x}px, ${mouse.y}px)`
            }}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6 }}
          />

          <div className="overlay" />

          {/* Content */}
          <div className="content">
            <motion.h1 className="hero-title">
              {slides[index].title.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{ display: "inline-block", marginRight: "12px" }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span 
                className="highlight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + slides[index].title.split(" ").length * 0.1 }}
              >
                {slides[index].highlight}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {slides[index].desc}
            </motion.p>

            <motion.div
              className="buttons"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <a href="#services" className="primary">Explore Services</a>
              <a href="#contact" className="secondary">Get a Quote</a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="progress">
        <div key={index} className="progress-fill"></div>
      </div>
      
      {/* Premium additions: Slide Counter & Scroll Indicator */}
      <div className="slide-counter">
        <span className="current">0{index + 1}</span>
        <span className="divider"></span>
        <span className="total">0{slides.length}</span>
      </div>

      <a href="#about" className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </a>
    </section>
  );
}
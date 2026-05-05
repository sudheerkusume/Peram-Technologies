import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SolutionsHub from './components/SolutionsHub';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <SolutionsHub />
      <Partners />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Transform Your Home with Solar Solutions</h1>
        <p>Choose from our exclusive inverter packages that cater to your specific energy needs and boost your home's efficiency.</p>
        <a href="#packages-section" className="cta-button">Explore Packages</a>
      </div>
    </section>
  );
};

export default Hero;

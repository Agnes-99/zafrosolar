import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero"        
    style={{
      backgroundImage: "url('/assets/slideimages/slideImage_3.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '85vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: '#14213d',
    }} >
      <div className="hero-content">
        <h1>Transform Your Home with Solar Solutions</h1>
        <p>Choose from our exclusive inverter packages that cater to your specific energy needs and budget.</p>
        <a href="#packages-section" className="cta-button-packages">Explore Our Packages</a>
      </div>
    </section>
  );
};

export default Hero;

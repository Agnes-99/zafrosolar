import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section
      className="hero"
      id="hero"
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
        position: 'relative',
      }}
    >
      <div className="hero-content">
        <h1>Transform Your Home with Solar Solutions</h1>
        <div className="hero-locations">
          <h2>Now Operating In:</h2>
          <ul>
            <li>Cape Town</li>
            <li>Stellenbosch</li>
            <li>Paarl</li>
            <li>Worcester</li>
            <li>East London</li>
            <li>Gqeberha</li>
            <li>Bloemfontein</li>
            <li>Welkom</li>
            <li>Johannesburg</li>
            <li>Pretoria</li>
            <li>Mbombela</li>
            <li>eMalahleni</li>
            <li>Kimberly</li>
            <li>Kuruman</li>
            <li>Durban</li>
            <li>Newcastle</li>
            <li>Pietermaritzburg</li>
            <li>Polokwane</li>
            <li>Mokopane</li>
            <li>Tzaneen</li>
            <li>Jane Furse</li>
            <li>Lebowakgomo</li>
            <li>Groblersdal</li>
      
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;

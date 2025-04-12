import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import '../styles/Header.css';

const Header = ({ openQuoteForm }) => {
  return (
    <header className="header" id="header">
      <div className="logo-container">
        <img src="/assets/logo/logo.png" className="logoImage" alt="ZafroSolar Logo" />
        <h1 className="logo-text">ZafroSolar</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/#hero">Home</Link></li>
          <li><a href="/#packages-section">Packages</a></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services"> Our Services</Link></li>
          <li><button onClick={openQuoteForm}>Request a Quote</button></li>
        </ul>
        <div className="social-icons">
          <a href="#" className="facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="#" className="x" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="#" className="instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#" className="tiktok" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

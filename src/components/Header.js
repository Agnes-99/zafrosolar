import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social icons
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>ZafroSolar</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="#home">Home</Link></li>
          <li><Link to="#packages">Packages</Link></li>
          <li><Link to="#about">About Us</Link></li>
          <li><Link to="#contact">Contact</Link></li>
          <li><Link to="#quotation">Request a Quote</Link></li>
        </ul>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

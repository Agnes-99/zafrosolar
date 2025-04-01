import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import '../styles/Header.css';

const Header = ({ openQuoteForm }) => {
  return (
    <header className="header">
      <div className="logo">
        <h1>ZafroSolar</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">HOME</a></li>
          <li><a href="/ #packages-section">PACKAGES</a></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/services">OUR SERVICES</Link></li>
          <li><button onClick={openQuoteForm} >REQUEST A QUOTE</button></li> 
        </ul>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; // Importing icons
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-about">
            <h4>About ZafroSolar</h4>
            <p>We provide high-quality inverter installation services with professional packages tailored to your needs.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-contact">
          <div className="footer-contact-details">
            <h4>Contact Us</h4>
            <p><FaPhoneAlt /> <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            <p><FaEnvelope /> <a href="mailto:info@zafrotel.com">info@zafrotel.com</a></p>
          </div>
          <div className="footer-address">
            <h4><FaMapMarkerAlt /> Address</h4>
            <p>123 Street, Surburb , City, Country</p>
          </div>
          <div className="footer-hours">
            <h4><FaClock /> Operational Hours</h4>
            <ul>
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 ZafroSolar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

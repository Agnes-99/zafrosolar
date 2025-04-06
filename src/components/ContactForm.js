import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [isContactOptionsVisible, setIsContactOptionsVisible] = useState(false);

  const toggleContactOptions = () => {
    setIsContactOptionsVisible(!isContactOptionsVisible);
  };

  return (
    <div>
    
      <button className="contact-icon" onClick={toggleContactOptions}>
        {isContactOptionsVisible ? 'Close' : 'Contact Us'}
      </button>

      
      <div className={`contact-options ${isContactOptionsVisible ? 'show' : ''}`}>
        <div className="contact-option">
          <a href="tel:+27781409668">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </div>
        <div className="contact-option">
          <a href="mailto:info@zafrosolar.co.za">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <div className="contact-option">
          <a href="https://wa.me/+27781409668">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css'; 
import Header from './Header'; // Assuming it's correctly imported
import Footer from './Footer'; // Assuming it's correctly imported

const Services = () => {
  const services = [
    { id: 1, name: 'Consultation', description: 'Personalized consultations for solar energy solutions.' },
    { id: 2, name: 'New Solar Installation (Off Grid and Backup)', description: 'Complete solar system installation, including off-grid and backup solutions.' },
    { id: 3, name: 'Solar System Maintenance', description: 'Routine maintenance to ensure your solar system runs efficiently.' },
    { id: 4, name: 'UPS Maintenance', description: 'Maintenance and repair of Uninterruptible Power Supply (UPS) systems.' },
    { id: 5, name: 'House Wiring', description: 'Electrical wiring services for residential properties.' },
    { id: 6, name: 'Electrical Fault Diagnosis', description: 'Diagnosis and repair of electrical faults in homes and businesses.' },
    { id: 7, name: 'Battery Testing and Recharging', description: 'Comprehensive battery testing and recharging services.' },
    { id: 8, name: 'Single & Three Phase Motor Starters', description: 'Installation and maintenance of single and three-phase motor starters.' },
    { id: 9, name: 'Tubing and Cable Ways', description: 'Professional installation of tubing and cable management systems.' },
  ];

  return (
    <div className="services-page">

      <section className="services-list">
        <h2>Our Services</h2>
        <div className="services">
          {services.map(service => (
            <div className="service-item" key={service.id}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Ready to go Solar?</h2>
        <p>Contact us today for a free consultation and quote!</p>
        <Link to="/contact" className="cta-button">Contact Us</Link>
      </section>


    </div>
  );
};

export default Services;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faSolarPanel, faWrench, faPlug, faBolt, faBatteryFull, faCog, faCogs, faTools } from '@fortawesome/free-solid-svg-icons';
import '../styles/Services.css';
import ContactForm from './ContactForm';

const Services = () => {
  const services = [
    { id: 1, name: 'Consultation', description: 'Personalized consultations for sizing your solar energy solutions.', icon: faComments },
    { id: 2, name: 'New Solar Installation (Off Grid and Backup)', description: 'Complete solar system installation, including off-grid and backup solutions.', icon: faSolarPanel },
    { id: 3, name: 'Solar System Maintenance', description: 'Routine maintenance to ensure your solar system runs efficiently.', icon: faWrench },
    { id: 4, name: 'UPS Maintenance', description: 'Maintenance and repair of Uninterruptible Power Supply (UPS) systems.', icon: faPlug },
    { id: 5, name: 'House Wiring', description: 'Electrical wiring services for residential properties.', icon: faBolt },
    { id: 6, name: 'Electrical Fault Diagnosis', description: 'Diagnosis and repair of electrical faults in homes and businesses.', icon: faTools },
    { id: 7, name: 'Battery Testing and Recharging', description: 'Comprehensive battery testing and recharging services.', icon: faBatteryFull },
    { id: 8, name: 'Single & Three Phase Motor Starters', description: 'Installation and maintenance of single and three-phase motor starters.', icon: faCog },
    { id: 9, name: 'Tubing and Cable Ways', description: 'Professional installation of tubing and cable management systems.', icon: faCogs },
  ];

  return (
    <div className="services-page">
      <section className="services-list">
        <h2>Our Services</h2>
        <div className="services">
          {services.map(service => (
            <div className="service-item" key={service.id}>
              <FontAwesomeIcon icon={service.icon} className="icon" />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
    
  );
};

export default Services;

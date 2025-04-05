// PackageCard.js
import React, { useState } from 'react';
import '../styles/PackageCard.css';

const PackageCard = ({ index, title, description, price, specs, images, isActive, toggleDetails }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = () => setCurrentImage((currentImage + 1) % images.length);
  const prevImage = () => setCurrentImage((currentImage - 1 + images.length) % images.length);

  return (
    <div className={`package-card ${isActive ? 'active' : ''}`}>
      <div className="package-header">
        <h2 className='package-header-h2'>{title}</h2>
        <div className="carousel-container">
          <img src={images[currentImage]} alt="Inverter" />
          <button className="carousel-btn prev-btn" onClick={prevImage}>&#8592;</button>
          <button className="carousel-btn next-btn" onClick={nextImage}>&#8594;</button>
        </div>
        <p>{description}</p>
        <p className="price">Price: {price}</p>
        <button className="toggle-btn" onClick={() => toggleDetails(index)}>
          {isActive ? 'Hide Details' : 'Show Details'}
        </button>
      </div>

      {isActive && (
        <div className="package-details">
          <ul className="specs">
            {specs.map((spec, idx) => (
              <li key={idx}>{spec}</li>
            ))}
          </ul>
          <p>(Price includes full installation)</p>
        </div>
      )}
    </div>
  );
};

export default PackageCard;

import React from 'react';
import PackageCard from './PackageCard';
import ContactForm from './ContactForm';
import usePackages from './UsePackages'; 
import '../styles/Home.css';

const Home = () => {
  const {
    activeCategory,
    setActiveCategory,
    activePackageIndices,
    togglePackageDetails,
    filterPackages,
    categories
  } = usePackages(); 

  return (
    <>
      <div className="packages-section" id="packages-section">
        <h2 className="home-heading">Our Home Solar System</h2>

        <div className="categories">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-btn ${category === activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category === 'all' ? 'All Packages' : category}
            </button>
          ))}
        </div>

        <div className="packages" id="packages">
          {filterPackages(activeCategory).map((pkg, index) => (
            <PackageCard
              key={index}
              index={index}
              isActive={activePackageIndices.includes(index)}
              title={pkg.title}
              description={pkg.description}
              price={pkg.price}
              specs={pkg.specs}
              images={pkg.images}
              toggleDetails={togglePackageDetails}
            />
          ))}
        </div>
      </div>

      <div id="contact">
        <ContactForm />
      </div>
    </>
  );
};

export default Home;

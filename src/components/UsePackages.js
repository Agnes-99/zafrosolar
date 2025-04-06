// usePackages.js
import { useState } from 'react';
import { packages, categories } from './Packages';

const usePackages = () => {
  const [activeCategory, setActiveCategory] = useState('Budget-Friendly Package');
  const [activePackageIndices, setActivePackageIndices] = useState([]); 

  const filterPackages = (category) => {
    if (category === 'all') return packages;
    return packages.filter(pkg => pkg.category === category);
  };

  const togglePackageDetails = (index) => {
    setActivePackageIndices(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return {
    activeCategory,
    setActiveCategory,
    activePackageIndices,
    togglePackageDetails,
    filterPackages,
    categories
  };
};

export default usePackages;

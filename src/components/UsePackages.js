import { useState } from 'react';
import { packages, categories } from './Packages';

const usePackages = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePackageIndex, setActivePackageIndex] = useState(null);

  const filterPackages = (category) => {
    if (category === 'all') return packages;
    return packages.filter(pkg => pkg.category === category);
  };

  const togglePackageDetails = (index) => {
    setActivePackageIndex(activePackageIndex === index ? null : index);
  };

  return {
    activeCategory,
    setActiveCategory,
    activePackageIndex,
    togglePackageDetails,
    filterPackages,
    categories
  };
};

export default usePackages;
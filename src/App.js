
import React,{useState } from 'react';
import Header from './components/Header'; 
import Hero from './components/Hero'; 
import PackageCard from './components/PackageCard'; 
import ContactForm from './components/ContactForm'; 
import Footer from './components/Footer'; 
import './styles/App.css'; 

const App = () => {

  const [activeCategory, setActiveCategory] = useState('all');
  const [activePackageIndex, setActivePackageIndex] = useState(null); 
  
  const packages = [
    {
      title: "Mecer 3KW",
      description: "Ideal for small home power backup during load shedding.",
      price: "R47,699.00",
      category: "Basic Package",
      images: [
        "/assets/inverters/Mecer_3KW_1.jpg",
        "/assets/inverters/Mecer_3KW_2.jpg",
        "/assets/inverters/Mecer_3KW_3.jpg",
      ],
      specs: [
        "Powers: House lights, fridge, gate and garage motors, fan, TV, Wi-Fi, sound system, essential plugs, and a kettle.",
        "Backup Duration: 4–6 hours during load shedding.",
        "Inverter Capacity: 3 kWh.",
        "Full installation included",
        "Solar Panel Compatibility: (590W) x2."
      ]
    },
    {
      title: "Mecer 5KW",
      description: "Perfect for medium-sized homes, offering both backup and off-grid solutions during load shedding.",
      price: "R77,937.00",
      category: "Standard Package",
      images: [
        "/assets/inverters/Mecer_5KW_1.png",
        "/assets/inverters/Mecer_5KW_2.png",
        "/assets/inverters/Mecer_5KW_3.png",
      ],
      specs: [
        "Powers: House lights, fridges, gate and garage motors, fan, TV, Wi-Fi, sound system, essential plugs, microwave, kettle, and iron.",
        "Backup Duration: 10–12 hours during load shedding, ensuring continuous power.",
        "Battery Capacity: 5 kWh.",
        "Solar Panel Compatibility: 6 x 590W panels for optimal performance.",
        "Solar-powered during daylight, reducing grid reliance.",
        "Full installation included."
      ]
    },
    {
      title: "Mecer 8KW",
      description: "Ideal for large homes, providing both backup and off-grid power solutions, capable of handling heavy-duty appliances.",
      price: "R122,708.00",
      category: "Premium Package",
      images: [
        "/assets/inverters/Mecer_8KW_1.png",
        "/assets/inverters/Mecer_8KW_2.png",
        "/assets/inverters/Mecer_8KW_3.png",
      ],
      specs: [
        "Powers: All house appliances including stove, geyser, fridge, lights, fan, TV, Wi-Fi, gate motors, and more.",
        "Backup Duration: 15–20 hours during load shedding, ensuring long-lasting power.",
        "Battery Capacity: 8 kWh.",
        "Solar Panel Compatibility: 10 x 590W panels for high-efficiency performance.",
        "Solar-powered during daylight, reducing grid dependency and optimizing energy use.",
        "Full installation included."
      ]
    },
    {
      title: "Deye 5KW",
      description: "Designed for medium-sized homes, this inverter offers both backup and off-grid solutions, handling all essential household appliances with ease.",
      price: "R89,137.00",
      category: "Standard Package",
      images: [
        "/assets/inverters/Deye_5KW_1.png",
        "/assets/inverters/Deye_5KW_2.png",
        "/assets/inverters/Deye_5KW_3.png",
      ],
      specs: [
        "Powers: All house lights, fridges, gate and garage motors, fan, TV, Wi-Fi, sound system, essential plugs, kettle, microwave, iron, and more.",
        "Backup Duration: 10–12 hours during load shedding, providing reliable power when you need it most.",
        "Battery Capacity: 5 kWh.",
        "Solar Panel Compatibility: 8 x 590W panels for high-efficiency solar energy capture.",
        "Solar-powered during daylight, reducing reliance on the grid and ensuring maximum energy independence.",
        "Full installation included."
      ]
    },
    {
      title: "Deye 8KW",
      description: "Perfect for large homes, the Deye 8KW inverter provides both backup and off-grid solutions, ensuring power for all your essential appliances.",
      price: "R135,708.00",
      category: "Premium Package",
      images: [
        "/assets/inverters/Deye_8KW_1.png",
        "/assets/inverters/Deye_8KW_2.png",
        "/assets/inverters/Deye_8KW_3.png",
      ],
      specs: [
        "Powers: All house appliances, including stove, geyser, and high-energy devices.",
        "Backup Duration: 15–20 hours during load shedding, keeping your home powered for extended periods.",
        "Battery Capacity: 8 kWh.",
        "Solar Panel Compatibility: 10 x 590W panels for maximum efficiency.",
        "During daylight, your home will rely primarily on the solar system, reducing grid dependency and optimizing energy use.",
        "Full installation included."
      ]
    },
    {
      title: "Sunsynk 5KW",
      description: "Perfect for medium-sized homes, the Sunsynk 5KW inverter offers reliable backup power and can be used for off-grid living, providing seamless energy independence.",
      price: "R99,138.00",
      category: "Standard Package",
      images: [
        "/assets/inverters/Sunsynk_5KW_1.png",
        "/assets/inverters/Sunsynk_5KW_2.png",
        "/assets/inverters/Sunsynk_5KW_3.png",
      ],
      specs: [
        "Powers: All essential home appliances, including lights, fridges, garage motors, fan, TV, Wi-Fi, sound system, kettle, microwave, and iron.",
        "Backup Duration: 10–12 hours during load shedding, ensuring continuous operation.",
        "Battery Capacity: 5 kWh.",
        "Solar Panel Compatibility: 8 x 590W panels to maximize energy capture and efficiency.",
        "During daylight hours, your home will operate primarily on solar power, reducing grid reliance and energy costs.",
        "Full installation included."
      ]
    },
    {
      title: "Sunsynk 8KW",
      description: "Ideal for large homes, the Sunsynk 8KW inverter offers substantial backup power and can function seamlessly in both back-up and off-grid scenarios.",
      price: "R145,706.00",
      category: "Premium Package",
      images: [
        "/assets/inverters/Sunsynk_8KW_1.png",
        "/assets/inverters/Sunsynk_8KW_2.png",
        "/assets/inverters/Sunsynk_8KW_3.png",
      ],
      specs: [
        "Powers: All household appliances including stove, geyser, fridges, lights, garage motors, TV, Wi-Fi, and essential home devices.",
        "Backup Duration: 15–20 hours of reliable power during load shedding.",
        "Battery Capacity: 8 kWh.",
        "Solar Panel Compatibility: 10 x 590W panels.",
        "Solar-powered during daylight, significantly reducing your electricity bills.",
        "Full installation included."
      ]
    },
  ];
  const categories = ["all","Basic Package", "Standard Package", "Premium Package"];

  const filterPackages = (category) => {
    if (category === 'all') return packages;
    return packages.filter(pkg => pkg.category === category);
  };

  const togglePackageDetails = (index) => {
    if (activePackageIndex === index) {
      setActivePackageIndex(null);
    } else {
      setActivePackageIndex(index);
    }
  };

  return (
    <>
      <Header />
      <Hero />

      <div className="packages-section">
        <h2 id="main-heading">Our Inverter Packages</h2>

        {/* Category Filters */}
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

        {/* Package Cards */}
        <div className="packages">
          {filterPackages(activeCategory).map((pkg, index) => (
            <PackageCard
              key={index}
              index={index}
              isActive={activePackageIndex === index}
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

      {/* Contact Form */}
      <div id="contact">
        <ContactForm /> 
      </div>

      <Footer />
    </>
  );
};

export default App;
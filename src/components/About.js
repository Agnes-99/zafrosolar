import React from 'react';
import '../styles/About.css';
import ContactForm from './ContactForm';

const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="hero-about">
        <div className="hero-content-about">
          <h1 className="hero-title-about">About ZafroSolar</h1>
          <p className="hero-subheading-about">Empowering the Future of Energy with Cutting-Edge Solutions</p>
        </div>
        <div className="hero-image-wrapper-about">
          <img src="/assets/slideimages/slideImage_4.jpg" alt="Solar Energy" className="hero-image-about" />
        </div>
      </section>

      <section className="company-overview">
        <div className="overview-content">
          <h2 className="section-title-about">Who We Are</h2>
          <p className="overview-text">
            ZafroSolar specializes in state-of-the-art solar energy solutions, helping businesses and homeowners harness the full potential of the sun. We deliver excellence from design to installation, ensuring maximum efficiency and long-term sustainability.
          </p>
        </div>
        <div className="overview-image-wrapper">
          <img src="/assets/logo/logo.png" alt="Company Logo" className="overview-logo" />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <h2 className="section-title-about">Our Core Values</h2>
        <div className="values-cards">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We are always looking for new ways to improve, ensuring that our solar solutions are ahead of the curve.</p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>Trust and honesty are the foundations of our business. We deliver on our promises, no matter what.</p>
          </div>
          <div className="value-card">
            <h3>Quality</h3>
            <p>Each project is built to the highest standards, using only the best materials and the latest technologies.</p>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="our-work">
        <h2 className="section-title-about">Our Work</h2>
        <div className="work-gallery">
          <div className="work-item">
            <img src="/assets/slideimages/slideImage_9.jpg" alt="XYZ Corp Solar Installation" />
            <h3>Industrial Installation</h3>
          </div>
          <div className="work-item">
            <img src="/assets/slideimages/slideImage_7.jpg" alt="Residential Solar Panels" />
          </div>
          <div className="work-item">
            <img src="/assets/slideimages/slideImage_4.jpg" alt="#" />
            <h3>Residential Installation</h3>
          </div>
        </div>
      </section>

      <section className="technologies">
        <div className="tech-icons">
          <div className="tech-icon">
            <img src="/assets/slideimages/slideImage_1.jpg" alt="Solar Panel" />
            <h3>3KW</h3>
          </div>
          <div className="tech-icon">
            <img src="/assets/slideimages/slideImage_2.jpg" alt="Battery" />
            <h3>5KW</h3>
          </div>
          <div className="tech-icon">
            <img src="/assets/slideimages/slideImage_12.jpg" alt="Monitoring" />
            <h3>20KW</h3>
          </div>
          <div className="tech-icon">
            <img src="/assets/slideimages/slideImage_3.jpg" alt="Monitoring" />
            <h3>10KW</h3>
          </div>
          <div className="tech-icon">
            <img src="/assets/slideimages/slideImage_10.jpg" alt="Monitoring" />
           <h3>10KW</h3>
          </div>
          <div className="tech-icon">
            <img src="/assets/slideimages/slideImage_11.jpg" alt="Solar Panel" />
            <h3>10KW</h3>
          </div>
          <div className="tech-icon">
            <img src="/assets/slideimages/slideImage_5.jpg" alt="Solar Panel" />
            <h3>5KW</h3>
          </div>
          <div className="tech-icon">
            <img src="/assets/slideimages/slideImage_6.jpg" alt="Solar Panel" />
            <h3>3KW</h3>
          </div>

          <div className="tech-icon">
            <img src="/assets/slideimages/slideImage_15.jpg" alt="Solar Panel" />
            <h3>3KW</h3>
          </div>

          <div className="tech-icon">
            <img src="/assets/slideimages/slideImage_8.jpg" alt="Solar Panel" />
            <h3>5KW</h3>
          </div>
        </div>
      </section>

{/* Client Testimonials Section */}
<section className="testimonials">
  <h2 className="section-title-about">What Our Clients Say</h2>
  <div className="testimonial-slider">
    <div className="testimonial-item">
      <p>"ZafroSolar made switching to solar an absolute breeze. The team was friendly, professional and knew exactly what they were doing. Our electricity bills have dropped and we’re loving the reliability."</p>
      <p><strong>- Sarah Naidoo, Small Business Owner</strong></p>
    </div>
    <div className="testimonial-item">
      <p>"We were tired of load shedding messing up our days, so we decided to go solar. Best decision ever. ZafroSolar’s service was top-notch, from start to finish. Now we’ve got power when we need it."</p>
      <p><strong>- Thabo Mokoena, Homeowner</strong></p>
    </div>
  </div>
</section>

      {/* Contact Form */}
      <div id="contact">
        <ContactForm />
      </div>
    </div>
 
  );
};

export default About;

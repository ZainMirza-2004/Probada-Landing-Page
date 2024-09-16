import React from 'react';
import arrowImage from "./assets/img/arrow.svg"
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-text-content">
            <h1 className="hero-title">
              <span style={{ fontFamily: 'Circular Std Bold', color: "rgba(16,16,17,1)", fontWeight: '700' }}>Your </span>
              <br />
              <span className='All-in-one' style={{ fontFamily: 'Circular Std Bold', color: "rgba(216,68,65,1)", fontWeight: '700' }}>All-in-One Educational </span>
              <span style={{ fontFamily: 'Circular Std Bold', color: "rgba(16,16,17,1)", fontWeight: '700' }}>Empowerment </span>
              <br />
              <span style={{ fontFamily: 'Circular Std Bold', color: "rgba(16,16,17,1)", fontWeight: '700' }}>Platform</span>
            </h1>
            <p className="hero-description">
              Document experiences, build resumes, and navigate success with verified seals.
            </p>
            <div className="navbar-button2">
              <button className="custom-button2">
                <span className="button-text">Request a meeting to learn more</span>
                <img src={arrowImage} alt="arrow" className="arrow-icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            loading="lazy"
            src="src/assets/img/hero_image.png" 
            className="hero-img"
            alt="PortfoliOH platform interface"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
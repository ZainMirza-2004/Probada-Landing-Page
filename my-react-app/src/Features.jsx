import React from 'react';
import './Features.css';
import phone1 from './assets/img/phone1.svg';
import phone2 from './assets/img/phone2.svg'; 
import tablet from './assets/img/tablet1.jpeg'; 
import arrowImage from "./assets/img/arrow.svg"

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="feature-title">
        <span className='stat'>Empowering Students:</span>
        <br />
        <span className='stat'>Easy Features for Your Success</span>
      </h2>
      <p className="feature-description">
        Embark on a journey of self-discovery and career advancement with PortfoliOH by your side.
      </p>
      <div className="feature-content">
        <div className="feature-card1">
        <div className="achieve2">
            <h3 className="achieve">
              <span>Achieve skills by</span>
              <br></br>
              <span>uploading evidences</span>
            </h3>
            
            <p className="achieve-description">Seamlessly upload evidence of your achievements, from work-based learning to earn certificates.</p>
          
          <button className="custom-button12">
                <span className="button-text">Learn more</span>
                <img src={arrowImage} alt="arrow" className="arrow-icon" />
              </button>
        </div>
          <img src={tablet} alt="Tablet" className="feature-image1" />
        </div>
        <div className="feature-card red-card">
          <div className="red-card-content">
          <div className='unlock-div'>
            <h3 className='unlock'>Unlock Seals with PortfoliOH's Gamification</h3>
          </div>
            <p className='gamify'>The gamified experience recognizes and celebrates your progress and growth every step of the way.</p>
            <div className='image-wrapper'>
            <img src={phone1} alt="Phone 1" className="feature-image-red" />
            </div>
          </div>
        </div>
        <div className="feature-card grey-card">
          <div className="red-card-content">
          <div className='unlock-div'>
            <h3 className='unlock'>Skill Enhancement</h3>
          </div>
            <p>A transformative learning experience that provides a platform for continuous skill improvement.</p>
            <div className='image-wrapper'>
            <img src={phone2} alt="Phone 2" className="feature-image-red2" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Features;

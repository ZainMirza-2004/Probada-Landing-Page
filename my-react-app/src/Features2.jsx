import React, { useState, useRef } from 'react';
import './Features_2.css';
// Import the arrow images
import arrowImage from "./assets/img/arrow.svg";
import arrowImage2 from "./assets/img/right.svg";

// Import your images
import image1 from "./assets/img/image1.png";
import image2 from "./assets/img/image2.png";
import image3 from "./assets/img/image3.png";
import image4 from "./assets/img/image4.png";
import dashboard from "./assets/img/untitled.svg"

const SeamlessEvaluation = () => {
    const [activeStep, setActiveStep] = useState('Upload Your Evidence');
    const imageRef = useRef(null);
  
    const steps = [
      { label: 'Upload Your Evidence', image: image1 },
      { label: 'Choose Evaluator', image: image2 },
      { label: 'Get Evaluated', image: image3 },
      { label: 'Achieve Goals', image: image4 }
    ];
  
    const handleStepClick = (step) => {
      setActiveStep(step);
      const stepIndex = steps.findIndex(s => s.label === step);
      if (imageRef.current) {
        imageRef.current.scrollTo({
          top: stepIndex * imageRef.current.clientHeight,
          behavior: 'smooth'
        });
      }
    };
  
    return (
      <>
        <div>
          <h2 className="feature-title">
            <span className='stat2'>Empowering Educators:</span>
            <br />
            <span className='stat2'>Connecting education to careers</span>
          </h2>
          <p className="feature-description">
          Enabling educators to effectively support students along their personal career development journeys
          </p>
        </div>
        <div className="seamless-evaluation">
          <div className="content">
            <h1>Seamless Evaluation Process</h1>
            <p className='content-sentence'>Your success begins with a smooth and seamless evaluation journey.</p>
            <ul className="steps">
              {steps.map((step) => (
                <li
                  key={step.label}
                  className={activeStep === step.label ? 'active' : ''}
                  onClick={() => handleStepClick(step.label)}
                >
                  <span className="arrow-symbol">&#8594;</span>
                  {step.label}
                </li>
              ))}
            </ul>
            <button className="custom-button11">
              <span className="button-text">Learn more</span>
              <img src={arrowImage} alt="arrow" className="arrow-icon" />
            </button>
          </div>
          
          <div className="image-carousel1" ref={imageRef}>
            {steps.map((step) => (
              <div className="image-slide" key={step.label}>
                <img src={step.image} alt={step.label} />
              </div>
            ))}
          </div>
        </div>

      <div className="dashboard-image">
        <img
          loading="lazy"
          src={dashboard} // Corrected path
          alt="PortfoliOH dashboard interface"
          className="dashboard-img"
        />
        <button className="custom-button3">
            Sign Up to Explore
            <img src={arrowImage} alt="arrow" className="arrow-icon"/>
        </button>
      </div>

      </>
    );
  };
  
  export default SeamlessEvaluation;
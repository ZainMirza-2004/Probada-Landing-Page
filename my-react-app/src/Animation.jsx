import React, { useState, useEffect, useRef } from 'react';
import arrowImage from "./assets/img/arrow.svg";

// Import your images
import activities from "./assets/img/activities.svg";
import skills from "./assets/img/skills.svg";
import skills2 from "./assets/img/skills2.svg";
import applicants from "./assets/img/applicants.svg";
import applicants2 from "./assets/img/applicants2.svg";

const images = [
  activities,
  skills,
  skills2,
  applicants2,
  applicants,
];

const titles = [
  'Building Activities',
  'Selecting the Students',
  'Sending to Students',
  'Students Applying',
  'Companies Selecting',
];

const Animation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [completedCycle, setCompletedCycle] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % images.length;
        if (newIndex === 0) {
          setCompletedCycle(true);
        } else {
          setCompletedCycle(false);
        }
        return newIndex;
      });
    }, 2300); // Duration each image is shown before animating to the next one

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.scrollTo({
        top: activeIndex * imageRef.current.clientHeight,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  const handleStepClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className='container5'>
        <div className='titleDiv'>
          <h1 className="main-title">Efficient Screening and Selection:</h1>
        </div>
        <div className="layout">
          <div className="sidebar left">
            <ul>
              {titles.map((title, index) => (
                <li
                  key={title}
                  className={`other-titles ${activeIndex === index ? 'active' : ''} ${activeIndex > index && !completedCycle ? 'activated' : ''}`}
                  onClick={() => handleStepClick(index)}
                >
                  {title}
                  <span className={`dot ${activeIndex === index || activeIndex > index && !completedCycle ? 'active' : ''}`}></span>
                  {index < titles.length - 1 && (
                    <span className={`line ${activeIndex > index && activeIndex !== 0 ? 'active' : ''}`}></span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="central">
            <div>
              <div className="tablet-mockup">
                <div className="image-carousel" ref={imageRef}>
                  {images.map((img, index) => (
                    <div className="image-slide4" key={index}>
                      <img src={img} alt={`Mockup ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar right">
            <div className='sentenceDiv'>
            <p className='sentence'>
              PortfoliOH’s data-driven approach empowers employers with valuable insights. AI algorithms analyze candidates’ skill profiles and match them with the roles that companies are looking to fill.
            </p>
            </div>
            <button className="custom-button10">
          Learn more
          <img src={arrowImage} alt="arrow" className="arrow-icon" />
        </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Animation;

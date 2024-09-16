import React, { useEffect, useRef } from "react";
import arrowImage from "./assets/img/arrow.svg";
import frame1 from "./assets/img/square.svg";
import frame2 from "./assets/img/ProbadaWebsiteFrame2.svg";
import frame3 from "./assets/img/ProbadaWebsiteFrame3.svg";
import dashboard3 from "./assets/img/Probada Website5.svg";

const Blue = () => {
  const dash3Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = dash3Ref.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        dash3Ref.current.classList.add('animate');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="dark-blue1">
      <br />
      <h1 className="feature-title2">
        <span className='stat1'>Empowering Businesses to </span>
        <br />
        <span className="stat1">Discover Top Talent with Essential Skills</span>
      </h1>
      <p className="feature-description2">
        PortfoliOH connects businesses to schools surfacing prospective employees equipped with the fundamental skills essential for excelling in their positions.
      </p>
      <button className="custom-button4">
        <span className="button-text">Explore more</span>
        <img src={arrowImage} alt="arrow" className="arrow-icon" />
      </button>
      <div className="blue-image">
      <img className="identify" src={frame1}></img>
      </div>
      <h1 className="statistic">
        <span className='statistic1'>Statistical</span>
        <br />
        <span className="statistic1">Dashboard for</span>
        <br />
        <span className="statistic1">Quick Decisions</span>
      </h1>
      <div className="AI">
        <div className="AI-sentence">
          <p>
            Schools can use PortfoliOH’s AI-driven analytics to gain insights into students’ skill development trends and areas of interest. This data informs educational strategies and interventions to better serve students.
          </p>
        </div>
        <button className="custom-button5">
          <span className="button-text">Learn More</span>
          <img src={arrowImage} alt="arrow" className="arrow-icon" />
        </button>
        <img src={dashboard3} className="dash3" ref={dash3Ref} />
      </div>
    </div>
  );
};

export default Blue;

// src/components/Header.jsx

import React from 'react';
import './Header2.css';
import arrowImage from "./assets/img/arrow.svg"


const Header = () => {
  return (
    <header className="header">
      <div className="logo-wrapper">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0c36009719dcd7f52379812a512147df52dfb1f946f2446485f30a5b117ff55?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&"
            className="logo-icon"
            alt="PortfoliOH logo icon"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aa3bf275898e6bfb8900b589645fa2b96e029810d40a88848d63415d8a462c8?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&"
            className="logo-text"
            alt="PortfoliOH logo text"
          />
      </div>
      <div className='nav_and_button'>
      <div className="nav-links">
          <a href="#students" className="nav-link">
            For Students
          </a>
          <a href="#educators" className="nav-link">
            For Educators
          </a>
          <a href="#business" className="nav-link">
            For Business
          </a>
        </div>
      <div className="navbar-button">
      <button className="custom-button0">
            <span className="button-text">Let’s Talk</span>
            <img src={arrowImage} alt="arrow" className="arrow-icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from "react";
import arrowImage from "./assets/img/arrow.svg";
import './Header2.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
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
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">For Students</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">For Educators</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">For Business</a>
              </li>
            </ul>
            <div className="navbar-button">
              <button className="custom-button0">
                <span className="button-text">Let’s Talk</span>
                <img src={arrowImage} alt="arrow" className="arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

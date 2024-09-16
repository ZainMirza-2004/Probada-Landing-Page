import React from 'react';
import Logo from './logo.svg';
import Title from './PortfoliOH.svg';


const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="PortfoliOH" />
      </div>
      <div className="navbar-logo2">
        <img src={Title} alt="Title" />
      </div>
      <ul className="navbar-menu">
        <li><a className='nav-dir' href="#students">For Students</a></li>
        <li><a className='nav-dir' href="#educators">For Educators</a></li>
        <li><a className='nav-dir' href="#business">For Business</a></li>
      </ul>
      <div className="navbar-button">
        <button className="custom-button">
          Let’s Talk <span className="arrow">→</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;

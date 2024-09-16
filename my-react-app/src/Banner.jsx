import React, { useState } from 'react';
import arrowImage from "./assets/img/arrow.svg";

const Banner = () => {
    

    return (
        <>
            <div className="red-banner">
                    <p className="banner-text1">Get in Touch</p>
                    <p className="banner-text2">Our friendly team would love to get in touch with you.</p>
                    <button className="custom-button8">
              <span className="button-text">Contact Us</span>
              <img src={arrowImage} alt="arrow" className="arrow-icon" />
            </button>
                </div>
                </>
    );
};

export default Banner;

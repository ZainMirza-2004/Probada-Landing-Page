import React from "react";
import arrowImage from "./assets/img/arrow.svg";
import picture1 from "./assets/img/picture1.svg";
import reviews from "./assets/img/reviews.svg";

const RealTime = () => {
    return (
        <div>
            <img src={picture1} className="picture" alt="Picture 1" />
            <button className="custom-button7">
                Learn More
                <img src={arrowImage} alt="arrow" className="arrow-icon" />
            </button>
            <img src={reviews} className="picture1" alt="Reviews" />
        </div>
    );
};

export default RealTime;
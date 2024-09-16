import React from "react";
import { Property } from "./Property";


export const Frame = () => {
  return (
    <div className="frame">
      <img className="image" alt="Image" src="image000000-1.png" />
      <div className="div">
        <p className="your-all-in-one">
          <span className="text-wrapper">
            Your <br />
          </span>
          <span className="span">All-in-One Educational </span>
          <span className="text-wrapper">
            Empowerment <br />
            Platform
          </span>
        </p>
        <p className="p">Document experiences, build resumes, and navigate success with verified seals.</p>
        <div className="button">
          <div className="base">
            <p className="button-2">Request a meeting to learn more</p>
            <div className="masked-icon">
              <Property className="icon-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

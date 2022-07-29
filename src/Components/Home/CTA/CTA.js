import React from "react";
import CV from "../../../assets/cv.pdf";
import "./cta.css";

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={CV} download>
        Download CV
      </a>
      <a className="btn-primary" href="#contact ">
        Let's Talk
      </a>

      <a href="#contact" className="scroll-down">
        SCROLL DOWN
      </a>
    </div>
  );
};

export default CTA;

import React from "react";
import src from "../imgs/1.png";
import src2 from "../imgs/2.png";
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-img">
        <img src={src} />
      </div>

      <div className="hero-right">
        <div className="hero-right-text">
          <h3>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h3>

          <div className="hero-para">
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </div>
        </div>
        <div className="hero-right-img">
          <img src={src2} />
        </div>

        <li>
        Government of India has awarded the <span style={{fontWeight:'bold'}}>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State..{" "}
        </li>
      </div>
    </div>
  );
};

export default Hero;

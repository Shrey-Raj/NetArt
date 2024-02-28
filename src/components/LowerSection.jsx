import React from "react";
import src from "../imgs/3.png";
const LowerSection = () => {
  return (
    <div className="lower-section">
      <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.{" "}
      </p>

      <div className="lower-section-img">
        <img src={src} />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires and Cables -
          Solar Systems - Motors
        </p>
      </div>

      <hr className="line"/>
    </div>
  );
};

export default LowerSection;

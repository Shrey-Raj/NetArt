import React from "react";

import facebook from "../imgs/facebook.png";
import globe from "../imgs/globe.png";
import phonecall from "../imgs/phone-call.png";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-p-1">
        C.R.I FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>

      <p className="footer-p-2">
        CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE
        WATER <span>|</span> OILS & GAS <span>|</span> PHARMA
        <span>|</span> SUGARS & DISTILLERIES <span>|</span> PAPER & PULP{" "}
        <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING{" "}
        <span>|</span> FOOD & BEVERAGE <span>|</span> PETROCHEMICAL & REFINERIES{" "}
        <span>|</span> SOLAR <span>|</span> BUILDING
        <span> |</span> HVAC <span>|</span> FIRE FIGHTING <span>|</span>{" "}
        AGRICULTURE & RESIDENTIAL
      </p>

      <div className="footer-info">
        <div>
          <img src={phonecall} />
          <p>
            Toll Free <span style={{ fontWeight: "bold" }}>1800 200 1234</span>
          </p>{" "}
        </div>
        <div>
          <img src={facebook} />
          <p>www.facebook.com/cricpumps</p>{" "}
        </div>
        <div>
          <img src={globe} />
          <p>www.crigroups.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

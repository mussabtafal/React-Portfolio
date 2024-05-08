import React from "react";
import "../header/header.css";
import CTA from "../header/CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm </h5>
        <h1>Mussab A. Taffal</h1>
        <TypeAnimation
          sequence={[
            "Fullstack Developer",
            2000,
            "Civil Engineer",
            2000,
            "Designer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-light"
          // style={{ fontSize: "1em", display: "inline-block" }}
          repeat={Infinity}
        />
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

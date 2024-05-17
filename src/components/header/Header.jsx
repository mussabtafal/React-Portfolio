import React from "react";
import "../header/header.css";
import CTA from "../header/CTA";
import HeaderSocials from "./HeaderSocials";
import { TypeAnimation } from "react-type-animation";
import { CiDesktopMouse2 } from "react-icons/ci";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="main">
          <div>
            <h5>Hello 👋, I'm </h5>
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
              repeat={Infinity}
            />
            <CTA />
          </div>
          <div className="me">{/* <img src={ME} alt="me" /> */}</div>
        </div>

        <HeaderSocials />

        <a href="#contact" className="scroll_down">
          <CiDesktopMouse2 className="mouse-icon" />
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

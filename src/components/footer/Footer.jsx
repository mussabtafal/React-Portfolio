import React from "react";
import "../footer/footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Mussab A. Taffal
      </a>
      <ul className="permalinks">
        <li className="permalinks-anchor">
          <a href="#">Home</a>
        </li>
        <li className="permalinks-anchor">
          <a href="#about">About</a>
        </li>
        <li className="permalinks-anchor">
          <a href="#experience">Experience</a>
        </li>
        <li className="permalinks-anchor">
          <a href="#services">Services</a>
        </li>
        <li className="permalinks-anchor">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="permalinks-anchor">
          <a href="#testimonials">Testimonials</a>
        </li>
        <li className="permalinks-anchor">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/mussab.tafal/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/mussabtafal/">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mussab A. Taffal. All rights reserved 2030.</small>
      </div>
    </footer>
  );
};

export default Footer;

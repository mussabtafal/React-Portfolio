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
        <li>
          <a className="permalinks-anchor" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="permalinks-anchor" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="permalinks-anchor" href="#journey">
            Journey
          </a>
        </li>
        <li>
          <a className="permalinks-anchor" href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a className="permalinks-anchor" href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="permalinks-anchor" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="permalinks-anchor" href="#testimonials">
            Testimonials
          </a>
        </li>
        <li>
          <a className="permalinks-anchor" href="#contact">
            Contact
          </a>
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

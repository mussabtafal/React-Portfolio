import React from "react";
import PortfolioCard from "./components/PortfolioCard";
import { FaPlus } from "react-icons/fa";

import "../portfolio/portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <PortfolioCard image={IMG1} title={"JobPal"} technologies={["Python", "Django", "HTML", "CSS", "JavaScript"]} github={"https://github.com/mussabtafal/Jobpal_Project"} link={"https://www.jobpal.work"}/>
        <PortfolioCard image={IMG1} title={"OmniFoods"} technologies={["HTML", "CSS", "JavaScript", "nodeJS", "MongoDB"]}  github={"https://github.com/mussabtafal/OmniFoods_Project"} link={"https://omnifood-mussab.netlify.app/"}/>
        <PortfolioCard image={IMG1} title={"O-Connect"} technologies={["React", "nodeJS", "HTML", "CSS", "JavaScript"]}  github={"https://www.onpassive.com/"} link={"https://www.onpassive.com/"}/>
        <PortfolioCard image={IMG1} title={"Aerdata Asset Management Solution"} technologies={["C#", "ASP.net", "Angular", "JavaScript", "SQL Server"]}  github={"#"} link={"#"} disabled/>
        <PortfolioCard image={IMG1} title={"Doctors Commuinity"} technologies={["Java", "Spring boot", "HTML", "CSS", "JavaScript"]}  github={"www.google.com"} link={"www.google.com"}/>
        <FaPlus className="plus-icon"/>
      </div>
    </section>
  );
};

export default Portfolio;

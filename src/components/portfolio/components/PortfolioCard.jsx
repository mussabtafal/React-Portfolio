import React from 'react'
import { FaLock } from "react-icons/fa";

const PortfolioCard = ({image, title, github, link, disabled=false}) => {
  return (
    <article className="portfolio__item">
    <div className="portfolio__item-image">
      <img src={image} alt="" />
    </div>
    <h3>{title}</h3>
    {!disabled ?
    <div className="portfolio__item-cta">
      <a href={github} className="btn">
        Github
      </a>
      <a
        href={link}
        target="_blank"
        className="btn btn-primary"
      >
        Live Demo
      </a>
    </div>: <FaLock className='lock-icon'/>
}
  </article>
  )
}

export default PortfolioCard
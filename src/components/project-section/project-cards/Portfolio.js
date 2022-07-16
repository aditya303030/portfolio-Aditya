import React from "react";
import '../../../App.css'
import {FaGithub} from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="project-container">
      <div className="project">
        <h1>Portfolio - Aditya</h1>
        {/* ss of the portfolio */}
        {/* <img src="" /> */}
        <p>This is a portfolio website with my introduction, projects, and a contact section.</p>
        <a href="https://github.com/aditya303030/portfolio-Aditya" rel="noreferrer" target= '_blank'>
          <FaGithub />
        </a>
      </div>
    </div>
  )
}

export default Portfolio;
import React from "react";
import '../../../App.css'

const Portfolio = () => {
  return (
    <div className="project-container">
      <h1>Portfolio - Aditya</h1>
      <p>This is a portfolio website with my introduction, projects, and a contact section.</p>
      {/* <a href="https://github.com/aditya303030/portfolio-Aditya"><FontAwesomeIcon icon="fa-brands fa-github" /></a> */}
      <a href="https://github.com/aditya303030/portfolio-Aditya" rel="noreferrer" target= '_blank'>
       <img src="../../../images/github1.png" alt="Github" />
      </a>
    </div>
  )
}

export default Portfolio;
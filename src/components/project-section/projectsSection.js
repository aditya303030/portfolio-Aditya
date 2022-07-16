import React from "react";
import Portfolio from "./project-cards/Portfolio";
import WeatherApp from "./project-cards/weather-app";

const ProjectSection = () => {
  return(
    <div className="project-section">
      <Portfolio />
      <WeatherApp />
    </div>
  )
}

export default ProjectSection;
import React from "react";
import {FaGithub} from 'react-icons/fa';

const WeatherApp = () => {
  return(
    <div className="project-container">
      <div className="project">
        <h1>Weather App</h1>
        <p>This is a weather app where the data is fetched from an API. It is made completely in React.</p>
        <a href="https://github.com/aditya303030/weather-app">
          <FaGithub />
        </a>
      </div>
    </div>
  )
}

export default WeatherApp;
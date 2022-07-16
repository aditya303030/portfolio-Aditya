import React from "react";
import '../../App.css'
import {FaTwitter,FaLinkedin} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-left">
          <h3 className="navbar-element">Intro</h3>
          <h3 className="navbar-element">Projects</h3>
          <h3 className="navbar-element">Contact</h3>
        </div>
        <div className="navbar-right">
          <div> 
            <a href="https://twitter.com/adityaraj3836" rel="noreferrer" target= "_blank">
              <FaTwitter />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/aditya-sharma-aba191203/" rel="noreferrer" target= "_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
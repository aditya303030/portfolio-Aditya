import React from "react";
import {FaTwitter} from "react-icons/fa";

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
          <a href="https://twitter.com/adityaraj3836">
            <FaTwitter />
          </a>
          
        </div>
      </div>
    </>
  )
}

export default Navbar;
import React from "react";
import "./About.css";
 import Gardening from '../../assets/gardening.webp';

const About = () => {
  return (
    <div className="hero-about">
    <div class="hero-container-about">
      <div class="column-left-about">
        <h4>About Us</h4>
        <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
             sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
      </div>
      <div class="column-right-about">
        <img
          src={Gardening}
          alt="illustration
      "
          class="hero-image-about"
        />
      </div>
    </div>
  </div>
  );
};

export default About;

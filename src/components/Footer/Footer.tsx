import React, { ReactNode } from "react";
import Logo from "../assets/logo.jpg";
import Petals from "../assets/petals3.png";
import { FacebookLogo } from "phosphor-react";
import { TwitterLogo } from "phosphor-react";
import { InstagramLogo } from "phosphor-react";
import "./Footer.css";

const Footer = (): any => {
  return (
    <div className="footer-menu">
      <div className="logo-footer">
        <img src={Logo} alt="logo" />
      </div>

      <div className="contact">
        <div className="contact-list">
          <h2>Contact us:</h2>
          <h4>
            Phone: 01932 885743 | Email: M-flowers@yahoo.com | WhatsApp: 0724
            667897
          </h4>
          <p>© 2023 All RIghts Reserved</p>
        </div>
      </div>

      <div className="img-petals">
        <img src={Petals} alt="petals" />
      </div>
    </div>
  );
};

export default Footer;

import React, { ReactNode, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Logo from "../components/assets/logo.jpg";
import BarsDark from "../components/assets/barsDark.png";

import "./Navbar.css";

const Navbar = (): any => {
  // const mobile = window.innerWidth <= 768 ? true : false;
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768 ? true : false
  );
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (isMobile === false && window.innerWidth < 768) {
        setIsMobile(true);
      } else if (window.innerWidth > 768) {
        setIsMobile(false);
      }
    });
  }, []);

  // useEffect(() => {

  // })
  return (
    <div className="navbar">
      <div className="left-menu">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
      </div>
      {menuOpened === false && isMobile === true ? (
        <div onClick={() => setMenuOpened(true)}>
          <img
            src={BarsDark}
            alt=""
            style={{ width: "5rem", height: "5rem", marginRight: "30px" }}
          />
        </div>
      ) : (
        <div className="right-menu">
          {isMobile === true ? (
            <div
              onClick={() => {
                setMenuOpened(false);
              }}
              style={{
                fontSize: "40px",
                position: "absolute",
                right: "10px",
                top: "0",
              }}
            >
              X
            </div>
          ) : (
            ""
          )}

          <div className="link">
            <Link to="/">Home</Link>
          </div>

          <div className="link">
            <Link to="/about">About</Link>
          </div>

          <div className="link">
            <Link to="/contact"> Contact </Link>
          </div>
          <div className="link">
            <Link to="/cart">
              <ShoppingCart size={32} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

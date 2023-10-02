import React, { ReactNode } from "react";

import { PRODUCTS } from "../../../PRODUCTS.js";
import Product from "./Product";
import "./Shop.css";
import { motion } from "framer-motion";

import { FacebookLogo } from "phosphor-react";
import { TwitterLogo } from "phosphor-react";
import { InstagramLogo } from "phosphor-react";

export const Shop = (): any => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="left-h">
        {/*the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "6px" : "100px" }}
            whileInView={{ left: "60px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>your flower shop </span>
        </div>
        {/*Hero Heading */}
        <div className="hero-text">
          <span>it's </span>
          <span className="stroke-text">all</span>
          <span>about</span>
          <span className="stroke-text">love</span>
        </div>

        <div className="links-media">
          <div className="links-list-media">
            <p>
              <FacebookLogo size={72} />
            </p>
            <p>
              <InstagramLogo size={72} />
            </p>
            <p>
              <TwitterLogo size={72} />
            </p>
          </div>
        </div>
      </div>

      <div className="right-h">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

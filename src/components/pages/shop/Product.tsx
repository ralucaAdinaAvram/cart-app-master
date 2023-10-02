import React, { ReactNode, useContext } from "react";
import { ShopContext } from "../../../context/shop-context";
import "./Product.css";

const Product = (props): any => {
  const { id, name, price, img } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>
          <b>{name}</b>
        </p>
        <p>£ {price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart
        {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;

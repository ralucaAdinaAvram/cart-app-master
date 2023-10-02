import React, { ReactNode, useContext } from "react";
import { PRODUCTS } from "../../../PRODUCTS";
import { ShopContext } from "../../../context/shop-context";
import { CartItem } from "./cart-item";
import "./Cart.css";
import Gardening from '../../assets/gardening.webp';

import { useNavigate } from "react-router-dom";

export const Cart = (): any => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="title-cart">
        <h1>Thank you for shopping with us!</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal : £{totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout </button>
        </div>
      ) : (
        <div className="cart_empty">
          <img src={Gardening} alt=""/>
        </div>
      )}
    </div>
  );
};

import React, { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";

export const CartItem = (props): any => {
  const { id, name, price, img } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount }: any =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={img} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>£{price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

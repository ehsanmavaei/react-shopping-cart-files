import React from "react";
import { useGlobalContext } from "../Context/Context";

const Checkout = () => {
  const { cart, dispatch } = useGlobalContext();
  let total = 0;
  cart.forEach((element) => {
    total += element.orderAmount * element.price;
  });

  return (
    <div className="checkout">
      <div className="flex space cursor">
        <h2>totall : ${Math.ceil(total)}</h2>
        <span
          onClick={() => dispatch({ type: "CLEARALL" })}
          className="clear-btn"
        >
          clear cart
        </span>
      </div>

      <hr />
      <button className="cursor">Pay</button>
    </div>
  );
};

export default Checkout;

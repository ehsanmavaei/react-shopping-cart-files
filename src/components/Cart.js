import React from "react";
import { cart } from "../Data";
import Rendercart from "./Rendercart";
import Checkout from "./Checkout";
import Suggestion from "./Suggestion";

import { useGlobalContext } from "../Context/Context";

const Cart = () => {
  const { cart } = useGlobalContext();

  return (
    <div className="main">
      <div className="wrapper">
        <div className="list card">
          {cart.map((item) => (
            <Rendercart item={item} key={item.id} />
          ))}
        </div>
        <div className="checkout card">
          <Checkout />
          <Suggestion />
        </div>
      </div>
    </div>
  );
};

export default Cart;

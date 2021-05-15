import React from "react";
import Rendercart from "./Rendercart";
import Checkout from "./Checkout";
import Suggestion from "./Suggestion";
import EmptyCart from "./EmptyCart";

import { useGlobalContext } from "../Context/Context";

const Cart = () => {
  const { cart } = useGlobalContext();

  return (
    <div className="main">
      <div className="wrapper">
        <div className="list card">
          {cart.length !== 0 ? (
            cart.map((item) => <Rendercart item={item} key={item.id} />)
          ) : (
            <EmptyCart />
          )}
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

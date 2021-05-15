import React from "react";
import { GrCart } from "react-icons/gr";
import { useGlobalContext } from "../Context/Context";

const Nav = () => {
  const { cart } = useGlobalContext();

  const showTotall = () => {
    if (Object.keys(cart).length !== 0) {
      const totall = cart.reduce((a, b) => ({
        orderAmount: a.orderAmount + b.orderAmount,
      }));

      return totall.orderAmount;
    } else {
      return 0;
    }
  };

  return (
    <nav className="nav">
      <div className="menu">
        <GrCart className="icon cart" />
        <div className="amount">{showTotall()}</div>
      </div>
    </nav>
  );
};

export default Nav;

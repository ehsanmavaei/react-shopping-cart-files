import React from "react";
import { GrCart } from "react-icons/gr";
const EmptyCart = () => {
  return (
    <div className="emptycart flex">
      <GrCart />
      <span>The cart is empty</span>
    </div>
  );
};

export default EmptyCart;

import React from "react";
import { useGlobalContext } from "../Context/Context";

const Checkout = () => {
  const { cart } = useGlobalContext();
  let total = 0;
  cart.forEach((element) => {
    total += element.orderAmount * element.price;
  });
  console.log(total);

  return (
    <div className="checkout">
      <h2>totall : ${Math.ceil(total)}</h2>
      <hr />
      <button className="cursor">Pay</button>
    </div>
  );
};

export default Checkout;

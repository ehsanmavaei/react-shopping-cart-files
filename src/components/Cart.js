import React from "react";
import Data from "../Data";
import Rendercart from './Rendercart'
const Cart = () => {
    console.log(Data)
  return (
    <div className="main">
      <div className="wrapper">
        <div className="list card">

{Data.map((item)=>(

    <Rendercart item={item}/>
))}


        </div>
        <div className="checkout card"></div>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import { RiStore2Line, RiDeleteBin6Line } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { BiPlus, BiMinus } from "react-icons/bi";

import { useGlobalContext } from "../Context/Context";

const Rendercart = ({ item }) => {
  const { dispatch } = useGlobalContext();

  const decrement = (id, amount) => {
    amount == 1
      ? dispatch({ type: "DEL", id: id })
      : dispatch({ type: "DECREMENT", id: id });
  };
  const del = (id) => {
    console.log(id);

    dispatch({ type: "DEL", id: id });
  };

  const {
    id,
    title,
    price,
    img,
    color,
    Shipped,
    totallNumber,
    orderAmount,
  } = item;
  return (
    <>
      <div className="render">
        <img src={img} alt="" />
        <div className="description">
          <h4>{title}</h4>
          <div className="flex">
            <span id="color" style={{ backgroundColor: `${color}` }}></span>
            <p>{color}</p>
          </div>
          <div className="flex">
            <RiStore2Line />
            <p>shiepped from : {Shipped}</p>
          </div>
          <div className="flex">
            <FiShoppingBag />
            <p>In Stock</p>
          </div>
          <div className="btn flex-btn">
            <button onClick={() => dispatch({ type: "INCREMENT", id: id })}>
              <BiPlus />
            </button>
            <p>{orderAmount}</p>
            <button onClick={() => decrement(id, orderAmount)}>
              <BiMinus />
            </button>
          </div>
          <div onClick={() => del(id)} className="flex cursor">
            <RiDeleteBin6Line />
            <p>delete</p>
          </div>
        </div>
        <h3> ${price * orderAmount}</h3>
      </div>
      <hr />
    </>
  );
};

export default Rendercart;

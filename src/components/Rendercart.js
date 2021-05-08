import React from "react";
import { RiStore2Line, RiDeleteBin6Line } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { BiPlus, BiMinus } from "react-icons/bi";

const Rendercart = ({ item }) => {
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
            <button>
              <BiPlus />
            </button>
            <p>{orderAmount}</p>
            <button>
              <BiMinus />
            </button>
          </div>
          <div className="flex cursor">
            <RiDeleteBin6Line />
            <p>delete</p>
          </div>
        </div>
        <h3> ${price}</h3>
      </div>
      <hr />
    </>
  );
};

export default Rendercart;

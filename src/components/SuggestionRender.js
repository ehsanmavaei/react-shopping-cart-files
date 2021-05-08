import React from "react";
import { BiPlus } from "react-icons/bi";

const SuggestionRender = ({ items }) => {
  const {
    id,
    title,
    price,
    img,
    color,
    Shipped,
    totallNumber,
    orderAmount,
  } = items;
  console.log("suggesion", title);

  return (
    <div className="flex">
      <div className="img">
        <img src={img} alt="" />
        <span className="cursor">
          <BiPlus />
        </span>
      </div>

      <div>
        <p>{title}</p>
        <h3>${price}</h3>
      </div>
    </div>
  );
};

export default SuggestionRender;

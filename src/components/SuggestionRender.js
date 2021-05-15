import React from "react";
import { BiPlus } from "react-icons/bi";

import { useGlobalContext } from "../Context/Context";

const SuggestionRender = ({ items }) => {
  const { dispatch } = useGlobalContext();

  const { id, title, price, img } = items;

  return (
    <div className="flex">
      <div className="img">
        <img src={img} alt="" />
        <span
          className="cursor"
          onClick={() => dispatch({ type: "ADDSUGGESTION", id: id })}
        >
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

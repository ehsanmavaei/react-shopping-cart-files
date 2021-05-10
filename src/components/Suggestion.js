import { getSuggestedQuery } from "@testing-library/dom";
import React from "react";

import SuggestionRender from "./SuggestionRender";

import { useGlobalContext } from "../Context/Context";

const Suggestion = () => {
  const { suggestion } = useGlobalContext();

  return (
    <div className="suggetion">
      <h3>suggestion</h3>
      <hr />
      {suggestion.map((items) => (
        <SuggestionRender items={items} key={items.id} name={"ehsan"} />
      ))}
    </div>
  );
};

export default Suggestion;

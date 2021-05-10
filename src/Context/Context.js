import React, { useContext, useState, useReducer } from "react";

import AppContext from "./AppContext";
import reducer from "../state/reducer";
import initialState from "../state/initialState";

const AppProvider = ({ children }) => {
  const [{ number, cart, suggestion }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <AppContext.Provider
      value={{
        number,
        cart,
        suggestion,
        dispatch
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalContext };

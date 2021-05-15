import React, { useContext, useReducer } from "react";

import AppContext from "./AppContext";
import reducer from "../state/reducer";
import initialState from "../state/initialState";

const AppProvider = ({ children }) => {
  const [{ cart, suggestion }, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        cart,
        suggestion,
        dispatch,
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

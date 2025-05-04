import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

const initialState = {
  user_data: {
    userDetails: JSON.parse(localStorage.getItem("user")) || {},
  },
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  React.useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user_data.userDetails));
  }, [state.user_data.userDetails]);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);

export default Store;

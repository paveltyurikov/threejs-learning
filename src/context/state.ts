import { createContext, useContext } from "react";
import { INITIAL_STATE } from "../constatnts/state";


const StateContext = createContext({
  state: INITIAL_STATE,
  setState: () => ({}),
  toggleAxesHelperEnabled: () => ({}),
});

export const useStateContext = () => {
  const value = useContext(StateContext);
  if (!value) {
    throw Error("useStateContext should be used inside StateContext.Provider");
  }
  return value;
};

export const StateContextProvider = StateContext.Provider;

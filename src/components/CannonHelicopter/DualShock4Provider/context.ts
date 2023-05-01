import { createContext, useContext } from "react";


const DualShock4HIDContext = createContext({});

export const useDualShock4HIDContext = () => {
  const value = useContext(DualShock4HIDContext);
  if (!value) {
    throw Error(
      "useDualShock4HIDContext should be used inside DualShock4HIDContext.Provider"
    );
  }
  return value;
};

export const DualShock4HIDContextProvider = DualShock4HIDContext.Provider;

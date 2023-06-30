import React from "react";
import { DualShock4 } from "webhid-ds4";
import { DualShock4HIDContextProvider } from "./context";


export type DualShock4ProviderProps = {
  children: React.ReactNode;
};

const STYLES = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
} as const;

const useDS4State = () => {
  const [controllers, setState] = React.useState<DualShock4[]>([]);
  const onClick = React.useCallback(async () => {
    const ds4 = new DualShock4();
    await ds4.init();
    setState([ds4]);
  }, []);
  return [controllers, onClick];
};
const DualShock4Provider = ({ children }: DualShock4ProviderProps) => {
  const [controllers, onClick] = useDS4State();
  return (
    <DualShock4HIDContextProvider value={controllers}>
      {children}
      {controllers.length > 0 ? null : (
        <button
          style={STYLES}
          // @ts-ignore
          onClick={onClick}
        >
          connect DualShock4
        </button>
      )}
    </DualShock4HIDContextProvider>
  );
};

export default DualShock4Provider;

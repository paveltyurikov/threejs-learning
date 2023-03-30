import { ReactNode, useCallback, useState } from "react";
import { INITIAL_STATE } from "../../constants/state";
import { StateContextProvider } from "../../context/state";


const StateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const toggleAxesHelperEnabled = useCallback(() => {
    setState((curr) => ({
      ...curr,
      isAxesHelperEnabled: !curr.isAxesHelperEnabled,
    }));
  }, []);
  return (
    // @ts-ignore
    <StateContextProvider value={{ state, setState, toggleAxesHelperEnabled }}>
      {children}
    </StateContextProvider>
  );
};

export default StateProvider;

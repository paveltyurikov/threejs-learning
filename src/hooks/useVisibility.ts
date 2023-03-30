import { useCallback, useState } from "react";


const useVisibility = (initial: boolean = false) => {
  const [visibility, setVisibility] = useState(initial);
  return {
    visibility,
    show: useCallback(() => {
      setVisibility((current) => true);
    }, []),
    hide: useCallback(() => {
      setVisibility((current) => false);
    }, []),
    toggle: useCallback(() => {
      setVisibility((current) => !current);
    }, []),
  };
};

export default useVisibility;

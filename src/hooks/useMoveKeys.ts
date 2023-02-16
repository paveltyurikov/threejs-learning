import { useEffect, useState } from "react";


const useMoveKeys = (z=5) => {
  const [state, setState] = useState([0, 2, z]);
  const handleArrowKeyDown = (e: any) => {
    switch (e.key) {
      case "ArrowUp":
        setState((curr) => [curr[0], curr[1] + 1, curr[2]]);
        break;
      case "ArrowDown":
        setState((curr) => [curr[0], curr[1] - 1, curr[2]]);
        break;
      case "ArrowLeft":
        setState((curr) => [curr[0] - 1, curr[1], curr[2]]);
        break;
      case "ArrowRight":
        setState((curr) => [curr[0] + 1, curr[1], curr[2]]);
        break;
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleArrowKeyDown);
  }, []);

  return state;
};

export default useMoveKeys;

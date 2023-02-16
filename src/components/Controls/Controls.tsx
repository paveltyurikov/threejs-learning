import { Button } from "@mui/material";
import { useStateContext } from "../../context/state";


const Controls = () => {
  const { toggleAxesHelperEnabled } = useStateContext();
  return (
    <>
      <Button size="small" onClick={toggleAxesHelperEnabled}>
        Axes Helper
      </Button>
    </>
  );
};

export default Controls;

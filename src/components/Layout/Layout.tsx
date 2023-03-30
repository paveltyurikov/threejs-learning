import { Box, Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Link from "../Link";


const LAYOUT_SX = {
  height: "calc(100% - 24px)",
};
const Layout = () => {
  return (
    <>
      <Box component="header">
        <Stack direction="row" spacing={2}>
          <Link to={"/bottle-helicopter"}>Bottle Helicopter</Link>
          <Link to={"/cannon-helicopter"}>Cannon Helicopter</Link>
          <Link to={"/led-strip-profile"}>Led Strip in Profile</Link>
        </Stack>
      </Box>
      <Box component="main" sx={LAYOUT_SX}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;

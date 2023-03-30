import { Typography, Container } from "@mui/material";
import { get } from "lodash";
import { useRouteError } from "react-router-dom";
import Link from "../Link";


const ErrorPage = () => {
  const error: unknown = useRouteError();
  return (
    <Container
      sx={{
        display: "flex",
        flexFlow: "column nowrap",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">
        {get(error, "statusText", "Opps some unknown error occur")}
      </Typography>
      <Typography variant="h6">
        {get(error, "message", "nothing to say more")}
      </Typography>
      <Typography variant="h6">
        <Link to="/">back to home page</Link>
      </Typography>
    </Container>
  );
};

export default ErrorPage;

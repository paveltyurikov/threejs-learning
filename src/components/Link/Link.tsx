import { Link as MUILink, LinkProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


const Link: React.FC<{ to: string } & LinkProps> = ({
  children,
  to,
  ...linkProps
}) => {
  return (
    <MUILink component={RouterLink} to={to} {...linkProps}>
      {children}
    </MUILink>
  );
};

export default Link;

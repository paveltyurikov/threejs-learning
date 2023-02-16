import React from "react";
import { Grid, GridProps } from "@mui/material";


const FormCol: React.FC<Partial<GridProps>> = ({ children, ...gridProps }) => {
  return (
    <Grid item {...gridProps} sx={{ margin: (theme) => theme.spacing(1, 0) }}>
      {children}
    </Grid>
  );
};

export default FormCol;

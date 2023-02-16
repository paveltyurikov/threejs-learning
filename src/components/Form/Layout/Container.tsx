import { Grid, GridProps } from "@mui/material";


const FormContainer: React.FC<Partial<GridProps>> = ({
  children,
  ...gridProps
}) => {
  return (
    <Grid {...gridProps} container direction="column" rowSpacing={1}>
      {children}
    </Grid>
  );
};

export default FormContainer;

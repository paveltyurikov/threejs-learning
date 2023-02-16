import { Grid, GridProps } from "@mui/material";


const FormRow: React.FC<Partial<GridProps>> = ({ children, ...gridProps }) => {
  return (
    <Grid
      columnSpacing={2}
      alignItems="center"
      {...gridProps}
      item
      container
      direction="row"
    >
      {children}
    </Grid>
  );
};

export default FormRow;

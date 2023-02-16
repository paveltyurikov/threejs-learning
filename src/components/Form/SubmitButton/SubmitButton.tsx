import React from "react";
import { Button, ButtonProps } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useFormikContext } from "formik";


const SubmitButton: React.FC<ButtonProps> = ({ children, ...restProps }) => {
  const { dirty, isValid, isSubmitting, submitForm } = useFormikContext();
  const disableButton = !dirty || !isValid || isSubmitting;

  const startIcon = isSubmitting ? <CircularProgress size={16} /> : null;
  return (
    <Button
      type="submit"
      onClick={submitForm}
      disabled={disableButton}
      startIcon={startIcon}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;

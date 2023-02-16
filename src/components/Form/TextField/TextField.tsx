import React from "react";
import { TextFieldProps } from "@mui/material";
import { Field } from "formik";
import { TextField as MuiTextField } from "formik-mui";


const TextField: React.FC<Partial<TextFieldProps>> = ({
  children: _,
  ...props
}) => {
  return <Field component={MuiTextField} fullWidth {...props} />;
};

export default TextField;

import React from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DEFAULT_THEME from "constants/defaultTheme";


const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <MuiThemeProvider theme={DEFAULT_THEME}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
      </LocalizationProvider>
    </MuiThemeProvider>
  );
};
export default ThemeProvider;

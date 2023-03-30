import React from "react";
import QueryClientProvider from "../QueryClientProvider";
import ThemeProvider from "../ThemeProvider";


const AllProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider>
      <QueryClientProvider>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

export default AllProviders;

import React from "react";
import { RouterProvider } from "react-router-dom";
import AllProviders from "./providers/AllProviders";
import defaultRouter from "./router";


function App() {
  return (
    <AllProviders>
      <RouterProvider router={defaultRouter} />
    </AllProviders>
  );
}

export default App;

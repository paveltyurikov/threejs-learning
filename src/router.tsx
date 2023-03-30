// @ts-nocheck
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "components/ErrorPage/ErrorPage";
import HomePage from "components/HomePage/HomePage";
import Layout from "components/Layout/Layout";
import BottleHelicopter from "./components/BottleHelicopter";
import CannonHelicopter from "./components/CannonHelicopter";
import ProfileLedStrip120Cut from "./components/ProfileLedStrip120Cut";


const defaultRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/cannon-helicopter", element: <CannonHelicopter /> },
      { path: "/bottle-helicopter", element: <BottleHelicopter /> },
      { path: "/led-strip-profile", element: <ProfileLedStrip120Cut /> },
    ],
  },
]);

export default defaultRouter;

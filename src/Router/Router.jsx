import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import SignUP from "../pages/SignUP/SignUP";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUP />,
      },
    ],
  },
]);

import "./App.scss";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Watch from "./Pages/Watch/Watch";
import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { isAuth, isNotAuth } from "./isAuth";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: isAuth,
  },
  {
    path: "/watch",
    element: <Watch />,
    loader: isAuth,
  },
  {
    path: "/register",
    element: <Register />,
    loader: isNotAuth,
  },
  {
    path: "/login",
    element: <Login />,
    loader: isNotAuth,
  },
]);

export default Router;

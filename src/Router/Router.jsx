import { createBrowserRouter } from "react-router-dom";
import Dash from "../Pages/Dashboard/Dash/Dash";
import Main from "../Pages/Dashboard/Main/Main";
import LoginPage from "../Pages/Login/LoginPage";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/dashboard",
        element: <Main />,
        children: [
          {
            path: "/dashboard",
            element: <Dash />,
          },
        ],
      },
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;

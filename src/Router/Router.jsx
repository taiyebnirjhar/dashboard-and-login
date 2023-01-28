import { createBrowserRouter } from "react-router-dom";
import Raf from "../Components/Raf/Raf";
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
            element: <div>hello</div>,
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
      {
        path: "/raf",
        element: <Raf />,
      },
    ],
  },
]);

export default router;

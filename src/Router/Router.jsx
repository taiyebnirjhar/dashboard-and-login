import { createBrowserRouter } from "react-router-dom";
import Raf from "../Components/Raf/Raf";
import LoginPage from "../Pages/Login/LoginPage";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <div>hello</div>,
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

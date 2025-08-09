import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import App from "../App";
import Portfolio from "../pages/portoflio";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "portfolio",
        Component: Portfolio,
      }
    ],
  },
]);

export default router;

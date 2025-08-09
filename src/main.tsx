import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./state-management/store.ts";
import { RouterProvider } from "react-router";
import router from "./routes/index.tsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

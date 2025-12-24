import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={router} />
  </Provider>
);

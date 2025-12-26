import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import SpotifyPlayerProvider from "./components/SpotifyPlayerProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <SpotifyPlayerProvider>
      <RouterProvider router={router} />
    </SpotifyPlayerProvider>
  </Provider>
);

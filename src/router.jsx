import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Callback from "./components/Callback";
import MiddleBar from "./components/MiddleBar";
import Playlist from "./components/Playlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MiddleBar />,
      },
      {
        path: "playlist/:id",
        element: <Playlist />,
      },
    ],
  },
  { path: "/callback", element: <Callback /> },
]);

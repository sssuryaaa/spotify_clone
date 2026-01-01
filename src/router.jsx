import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Callback from "./components/Callback";
import MiddleBar from "./components/MiddleBar";
import Playlist from "./components/Playlist";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

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
      {
        path: "search/:text",
        element: <SearchResults />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
  { path: "/callback", element: <Callback /> },
]);

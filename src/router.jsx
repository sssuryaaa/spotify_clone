import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Callback from "./pages/Callback";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/callback", element: <Callback /> },
]);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/assets/css/variables.css";
import "./assets/css/App.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from "./components/SearchPage.jsx";
// import Lesson from "./components/Lesson.jsx";
import SearchResults from "./pages/SearchResults.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "search-results",
    element: <SearchResults />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

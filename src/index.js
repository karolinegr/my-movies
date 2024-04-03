import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import MainMenu from "./components/MainMenu";
import MoviesList from "./components/MoviesList";
import { MoviesContainer } from "./styles/MoviesContainer";
import Home from "./views/Home";
import About from "./views/About";
import MovieDetail from "./views/MovieDetail";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <About />,
      },
      {
        path: "/filme/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

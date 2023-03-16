import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import SearchOutput from "./pages/SearchOutput";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: ":searchId", element: <SearchOutput /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

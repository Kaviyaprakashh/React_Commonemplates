import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { routerpaths } from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const router = createHashRouter(routerpaths, { basename: "" });
  return <RouterProvider router={router} />;
}

export default App;

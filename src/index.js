import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals.js";
import globalRouter from "./route/index.tsx";
import { RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <RouterProvider router={globalRouter} />
  </>

  // </React.StrictMode>
);

reportWebVitals();

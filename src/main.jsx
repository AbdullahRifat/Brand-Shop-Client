import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import '@smastrom/react-rating/style.css'
import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";

import MyRouter from "./Router/Router";
import Authprovider from "./Firebase/Authprovider";







ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={MyRouter} ></RouterProvider>
    </Authprovider>
  
  </React.StrictMode>
);

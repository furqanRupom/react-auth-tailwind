import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./Layouts/Main";
import AuthProviders from "./components/AuthProviders";
import Orders from "./components/Orders";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "Register",
        element: <Register />,
      },
      {
        path:"orders",
        element:<PrivateRoute><Orders></Orders></PrivateRoute>

      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);

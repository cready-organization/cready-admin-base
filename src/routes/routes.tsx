import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Login from "../pages/auth/Login";
import ResetPassword from "../pages/auth/ResetPassword";
import PageNotFound from "../pages/error/PageNotFound";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: () => {
      return redirect("/auth");
    },
    errorElement: <PageNotFound />,
  },
  {
    path: "/auth",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "",
        loader: () => {
          return redirect("login");
        },
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;

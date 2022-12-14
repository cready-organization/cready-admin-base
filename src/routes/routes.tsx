import * as React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import PageNotFound from "../pages/error/PageNotFound";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import Login from "../pages/auth/Login";
import AuthLayout from "../pages/auth/AuthLayout";
import AdminLayout from "../pages/admin/AdminLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      return redirect("/admin");
    },
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        path: "",
        loader: () => {
          return redirect("dashboard");
        },
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
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
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;

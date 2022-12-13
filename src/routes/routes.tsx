import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import { verifyCredential } from "../services/authenticate";
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
    loader: async () => {
      // This only for quick demo, will be refactored and removed once API is completed
      // we will have a better way to create route guards
      const isAuthenticated = await verifyCredential();
      if (!isAuthenticated) {
        return redirect("/auth");
      }
      return null;
    },
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
    loader: async () => {
      // This only for quick demo, will be refactored and removed once API is completed
      // we will have a better way to create route guards
      const isAuthenticated = await verifyCredential();
      if (isAuthenticated) {
        return redirect("/admin");
      }
      return null;
    },
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

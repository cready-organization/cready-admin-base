import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import { verifyCredential } from "../services/authenticate";
import Dashboard from "../pages/admin/Dashboard";
import PageNotFound from "../pages/error/PageNotFound";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import Login from "../pages/auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      return redirect("/admin");
    },
  },
  {
    path: "/admin",
    loader: async () => {
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
    loader: async () => {
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
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;

import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

const Dashboard = lazy(() => import("src/pages/admin/Dashboard"));
const DatabaseDashboard = lazy(() => import("src/pages/database/DatabaseDashboard"));

const routes = [
  {
    key: "home",
    path: "/",
    name: "Dashboard",
    component: <Navigate replace to="/dashboard" />,
    roles: ["planner", "admin", "user"],
  },
  {
    key: "dash-board",
    path: "/dashboard",
    name: "Dashboard",
    component: <Dashboard />,
    roles: ["planner", "admin", "user"],
  },
  {
    key: "database-home",
    path: "/database",
    name: "Database-Dashboard",
    component: <Navigate replace to="/database/dashboard" />,
    roles: ["planner", "admin", "user"],
  },
  {
    key: "database-dash-board",
    path: "/database/dashboard",
    name: "Database-Dashboard",
    component: <DatabaseDashboard />,
    roles: ["planner", "admin", "user"],
  },
];
export default routes;

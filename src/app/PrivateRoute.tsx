import React, { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useCheckAuthentication } from "src/Hook/useCheckAuthentication";

function PrivateRoute({ children }: { children: ReactElement }) {
  const location = useLocation();
  const isAuthenticated = useCheckAuthentication();
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default PrivateRoute;

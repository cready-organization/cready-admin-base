import React, { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useCheckAuthentication } from "src/hooks/useCheckAuthentication";

function PrivateRoute({ children }: { children: ReactElement }) {
  const location = useLocation();
  
  const isAuthenticated = useCheckAuthentication();
  if (!isAuthenticated) {
    return <Navigate to={location.pathname.includes('database') ? '/database/login'  :"/login"} state={{ from: location }} replace />;
  }
  return children;
}

export default PrivateRoute;

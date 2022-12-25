import React from "react";
import { useNavigate } from "react-router-dom";
import { useCheckAuthentication } from "src/Hook/useCheckAuthentication";

import DefaultHeader from "src/core/navigator/DefaultHeader";
import Content from "src/core/navigator/Content";
import DefaultFooter from "src/core/navigator/DefaultFooter";

export default function DefaultLayout() {
  const navigate = useNavigate();
  const isAuthenticated = useCheckAuthentication();
  if (!isAuthenticated) {
    navigate("/login", { replace: true });
  }
  return (
    <div className="app-layout">
      <div className="app-header">
        <DefaultHeader />
      </div>

      <div className="app-body ">
        <Content />
      </div>
      <footer className="app-footer">
        <DefaultFooter />
      </footer>
    </div>
  );
}

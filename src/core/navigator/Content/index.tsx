import React, { memo, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "../_routes";

function Content() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        {routes.map(({ key, path, component }) => {
          return <Route key={key} path={path} element={component} />;
        })}
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/database" element={<Navigate replace to="/database/dashboard" />} />
      </Routes>
    </Suspense>
  );
}

export default memo(Content);

Content.whyDidYouRender = true;

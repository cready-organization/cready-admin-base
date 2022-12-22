import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "src/core/layout/Default";
import PrivateRoute from "./PrivateRoute";
import LoginDatabase from "src/pages/authDatabase/LoginDatabase";

const LoginPage = lazy(() => import("src/pages/auth/Login"));
function App() {
  return (
    <div className="App" data-theme={"light"}>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/database/login" element={<LoginDatabase/>} />
            <Route
              path="/*"
              element={
                <PrivateRoute>
                  <DefaultLayout />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

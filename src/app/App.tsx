import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import ControllerRoute from './ControllerRoute';
import DefaultLayout from '../layouts/Default';

const LoginPage = lazy(() => import('../pages/auth/Login'));
const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword'));
function App() {
  return (
    <div className="App" data-theme={'light'}>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route
              path="/login"
              element={
                <ControllerRoute>
                  <LoginPage />
                </ControllerRoute>
              }
            />
            <Route
              path="/*"
              element={
                <PrivateRoute>
                  <DefaultLayout />
                </PrivateRoute>
              }
            />
            {/* Login database */}
            <Route
              path="/database/login"
              element={
                <ControllerRoute>
                  <LoginPage />
                </ControllerRoute>
              }
            />
            {/* Forgot Password */}
            <Route path="/login/recover" element={<ForgotPassword />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;


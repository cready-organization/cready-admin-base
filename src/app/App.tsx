import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from 'src/core/layouts/Default';
import PrivateRoute from './PrivateRoute';
import ControllerRoute from './ControllerRoute';

const LoginPage = lazy(() => import('src/pages/auth/Login'));
const ForgotPassword = lazy(() => import('src/pages/auth/ForgotPassword'));
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

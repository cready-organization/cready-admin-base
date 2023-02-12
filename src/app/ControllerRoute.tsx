import React, { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useCheckAuthentication } from 'src/hooks/useCheckAuthentication';

function ControllerRoute({ children }: { children: ReactElement }) {
    const location = useLocation();

    const isAuthenticated = useCheckAuthentication();
    if (isAuthenticated) {
        return (
            <Navigate
                to={location.pathname.includes('database/login') ? '/database/dashboard' : '/dashboard'}
                state={{ from: location }}
                replace
            />
        );
    }
    return children;
}

export default ControllerRoute;

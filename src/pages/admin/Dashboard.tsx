import { Button } from 'components';
import * as React from 'react';
import { Cookies } from 'react-cookie';
import { useNavigate, useLocation } from 'react-router-dom';

const cookies = new Cookies();

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.includes('database') ? '/database/login' : '/login';

  const handleLogout = () => {
    cookies.remove('accessToken', { path: '/' });
    navigate(path, { replace: true });
  };

  return (
    <div className="h-[100vh] w-[100vw] flex">
      <h1>Admin Dashboard</h1>
      <div className="m-auto">
        <Button onClick={handleLogout} fullWidth={false}>
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;


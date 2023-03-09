// import { Button } from 'components';
// import * as React from 'react';
// import { Cookies } from 'react-cookie';
// import { useNavigate, useLocation } from 'react-router-dom';

import DefaultListViewType from 'layouts/Default/DefaultListViewType';

// const cookies = new Cookies();

function Dashboard() {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const path = location.pathname.includes('database') ? '/database/login' : '/login';

  // const handleLogout = () => {
  //   cookies.remove('accessToken', { path: '/' });
  //   navigate(path, { replace: true });
  // };

  return (
    <div>
      <DefaultListViewType />
    </div>
  );
}

export default Dashboard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckAuthentication } from 'hooks/useCheckAuthentication';

import Content from 'navigator/Content';
import DefaultHeader from 'layouts/Default/DefaultHeader';
import DefaultSideBar from 'layouts/Default/DefaultSideBar';
export default function DefaultLayout() {
  const navigate = useNavigate();
  const isAuthenticated = useCheckAuthentication();
  if (!isAuthenticated) {
    navigate('/login', { replace: true });
  }
  return (
    <div className="app-layout__wrap">
      <div className="app-layout flex flex-row">
        <div className="app-side-bar w-1/6 min-h-screen bg-white border-r-2 border-gray-100 py-3 ">
          <DefaultSideBar />
        </div>
        <div className="app-main w-5/6">
          <div className="app-header bg-white border-b-2 border-gray-100 py-3 px-6">
            <DefaultHeader />
          </div>

          <div className="app-body " style={{ backgroundColor: '#F9F9F9' }}>
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

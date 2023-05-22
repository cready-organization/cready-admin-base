import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { ProductListView, ProductForm } from 'pages/admin/product';

const DatabaseDashboard = lazy(() => import('pages/database/DatabaseDashboard'));

const routes = [
  {
    key: 'home',
    path: '/',
    name: 'Dashboard',
    component: <Navigate replace to="/dashboard" />,
    roles: ['planner', 'admin', 'user'],
  },
  {
    key: 'product',
    path: '/product',
    name: 'Product-List-View',
    component: <ProductListView />,
    roles: ['planner', 'admin', 'user'],
  },
  {
    key: 'product-create',
    path: '/product/create',
    name: 'Product-Form',
    component: <ProductForm />,
    roles: ['planner', 'admin', 'user'],
  },
  {
    key: 'database-home',
    path: '/database',
    name: 'Database-Dashboard',
    component: <Navigate replace to="/database/dashboard" />,
    roles: ['planner', 'admin', 'user'],
  },
  {
    key: 'database-dash-board',
    path: '/database/dashboard',
    name: 'Database-Dashboard',
    component: <DatabaseDashboard />,
    roles: ['planner', 'admin', 'user'],
  },
];
export default routes;


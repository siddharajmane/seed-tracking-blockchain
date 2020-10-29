import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import DashboardView from 'src/views/reports/DashboardView';
import NotFoundView from 'src/views/errors/NotFoundView';
import RegisterUser from 'src/views/auth/index'
import ProducerModule from 'src/views/Users/Producer/index'
import LabModule from 'src/views/Users/Lab/index'
import InspectorModule from 'src/views/Users/Inspector/index'
import DistributorModule from 'src/views/Users/Distributor/index'
const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <DashboardView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'producer', element: <ProducerModule/> },
      { path: 'lab', element: <LabModule/> },
      { path: 'inspector', element: <InspectorModule/> },
      { path: 'distributor', element: <DistributorModule/> },
      { path: 'register', element: <RegisterUser /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path:'test',
    element:""
  }
];

export default routes;

import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import DashboardView from 'src/views/reports/DashboardView';
import NotFoundView from 'src/views/errors/NotFoundView';
import RegisterUser from 'src/views/auth/index'
import ProcessingPlantModule from 'src/views/Users/ProcessingPlant/index'
import LabModule from 'src/views/Users/Lab/index'
import SCAModule from 'src/views/Users/SCA/index'
import DistributorModule from 'src/views/Users/Distributor/index'
import SPAModule from 'src/views/Users/SPA/index'
import SGModule from 'src/views/Users/SeedGrower/index'
import LoginModule from 'src/views/Login/index'
import ConsumerModule from 'src/views/Users/Consumer/index'
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
      { path: 'login', element: <LoginModule/> },
      { path: 'consumer', element: <ConsumerModule/> },
      { path: 'sg', element: <SGModule/> },
      { path: 'spa', element: <SPAModule/> },
      { path: 'pp', element: <ProcessingPlantModule/> },
      { path: 'lab', element: <LabModule/> },
      { path: 'sca', element: <SCAModule/> },
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

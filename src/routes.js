/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React  from 'react';
import { Redirect } from 'react-router-dom';
import AuthLayout from './layouts/Auth';
import DashboardLayout from './layouts/Dashboard';
import Login from './views/Login';
import SocialFeed from "./views/SocialFeed";

export default [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/auth/login" />
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: Login
      }
    ]
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/social-feed',
        exact: true,
        component: SocialFeed
      }
    ]
  }
];

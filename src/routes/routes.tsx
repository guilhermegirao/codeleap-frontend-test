import React from 'react';

import Home from '@/pages/Home';
import Signup from '@/pages/Signup';

type RouteType = {
  key: string;
  path: string;
  element: JSX.Element;
  requireAuth: boolean;
};

const routes: RouteType[] = [
  {
    path: '/signup',
    key: 'signup',
    element: <Signup />,
    requireAuth: false
  },
  {
    path: '/',
    key: 'home',
    element: <Home />,
    requireAuth: true
  }
];

export default routes;

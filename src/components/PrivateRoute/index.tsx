import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootState } from '@/redux/rootReducer';

type PrivateRouteProps = {
  element: JSX.Element;
};

function PrivateRoute({ element }: PrivateRouteProps) {
  const user = useSelector((state: RootState) => state.user);

  return user.username ? element : <Navigate to="/signup" />;
}

export default PrivateRoute;

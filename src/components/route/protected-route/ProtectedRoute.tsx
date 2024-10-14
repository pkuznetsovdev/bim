import React from 'react';
import { Navigate } from 'react-router-dom';

import { APP_PATHS } from '@constants';

export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  // const userData = useSelector(selectUser);
  const userData = {};

  if (!userData.isAuthorized) {
    return <Navigate to={APP_PATHS.protectedRouteRedirect} />;
  }

  return children;
};

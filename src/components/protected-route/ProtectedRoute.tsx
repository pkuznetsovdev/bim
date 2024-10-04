import React from 'react';
import { Navigate } from 'react-router-dom';
import { APP_PATHS } from '@constants';
import { useSelector } from 'react-redux';
import { selectUser } from '@models';

export function ProtectedRoute({ children }: React.PropsWithChildren) {
  const userData = useSelector(selectUser);

  if (!userData.isAuthorized) {
    return <Navigate to={APP_PATHS.protectedRouteRedirect} />;
  }

  return children;
}

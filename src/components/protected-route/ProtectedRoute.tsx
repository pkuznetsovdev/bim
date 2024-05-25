import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/hooks';
import { APP_PATHS } from '@constants';

export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const { user } = useAuth();

  if (!user) {
    // user is not authenticated
    return <Navigate to={APP_PATHS.protectedRouteRedirect} />;
  }
  return children;
};

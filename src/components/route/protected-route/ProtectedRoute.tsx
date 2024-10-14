import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { APP_PATHS } from '@constants';

export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  // const userData = useSelector(selectUser);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const userData = {};
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.isAuthorized) {
      navigate(APP_PATHS.protectedRouteRedirect, { replace: true });
    }
  }, [navigate, userData]);

  return children;
};

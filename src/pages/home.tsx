import { Navigate, useLocation } from 'react-router';
import { APP_PATHS } from 'src/constants';

export function Home() {
  const { search } = useLocation();

  Navigate({
    to: {
      pathname: APP_PATHS.posts,
      search,
    },
    replace: true,
  });

  return null;
}

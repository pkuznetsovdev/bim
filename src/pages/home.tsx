import { Navigate } from 'react-router';
import { APP_PATHS } from 'src/constants';

export const Home = () => {
  Navigate({
    to: APP_PATHS.posts, replace: true,
  });

  return null;
};

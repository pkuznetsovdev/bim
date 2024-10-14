import { createBrowserRouter } from 'react-router-dom';

import { ProtectedRoute } from '@components';
import { APP_PATHS } from 'src/constants';
import { LayoutMain } from 'src/layouts';
import { Pages } from 'src/pages';

export const router = createBrowserRouter([
  /** Public routes */
  {
    path: APP_PATHS.root,
    element: <LayoutMain />,
    children: [
      {
        index: true,
        element: <Pages.Home />,
      },
      {
        path: APP_PATHS.posts,
        element: <Pages.Posts />,
      },
      {
        path: APP_PATHS.postDetails,
        element: <Pages.PostDetails />,
      },
      {
        path: APP_PATHS.petDetails,
        element: <Pages.PetDetails />,
      },
    ],
  },
  /** Protected routes */
  {
    path: APP_PATHS.root,
    element: (
      <ProtectedRoute>
        <LayoutMain />
      </ProtectedRoute>
    ),
    children: [
      {
        path: APP_PATHS.postNew,
        element: <Pages.NewPost />,
      },
      {
        path: APP_PATHS.petNew,
        element: <Pages.NewPet />,
      },
      {
        path: APP_PATHS.user,
        element: <Pages.User />,
      },
    ],
  },
]);

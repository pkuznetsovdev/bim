import { createBrowserRouter } from 'react-router-dom';
import { PagePosts, PagePetDetails, PagePostDetails, PageUser } from 'src/pages';
import { APP_PATHS } from 'src/constants';
import { LayoutMain } from 'src/layouts';

export const router = createBrowserRouter([
  {
    path: APP_PATHS.root,
    element: <LayoutMain />,
    children: [
      {
        index: true,
        element: <PagePosts />,
      },
      {
        path: APP_PATHS.user,
        element: <PageUser />,
        children: [
          // {
          //   path: 'pets',
          //   element: <p>User Pets Page</p>,
          // },
          // {
          //   path: 'posts',
          //   element: <p>User Posts Page</p>,
          // },
          // {
          //   path: 'details',
          //   element: <p>User Details Page</p>,
          // },
        ],
      },
      {
        path: APP_PATHS.petDetails,
        element: <PagePetDetails />,
      },
      {
        path: APP_PATHS.postDetails,
        element: <PagePostDetails />,
      },
    ],
  },
]);

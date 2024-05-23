import { createBrowserRouter } from 'react-router-dom';
import { PagePosts, PagePetDetails, PagePostDetails, PageUser, PageHome } from 'src/pages';
import { APP_PATHS } from 'src/constants';
import { LayoutMain } from 'src/layouts';

export const router = createBrowserRouter([
  {
    path: APP_PATHS.root,
    element: <LayoutMain />,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
      {
        path: APP_PATHS.posts,
        element: <PagePosts />,
      },
      {
        path: APP_PATHS.postDetails,
        element: <PagePostDetails />,
      },
      {
        path: APP_PATHS.petDetails,
        element: <PagePetDetails />,
      },
      {
        path: APP_PATHS.user,
        element: <PageUser />,
      },
    ],
  },
]);

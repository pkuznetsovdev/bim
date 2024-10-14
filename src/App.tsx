import { RouterProvider } from 'react-router-dom';

import { Providers } from '@providers';
import { router } from '@router';

import '@styles/index.scss';

const App = () => (
  <Providers>
    <RouterProvider router={router} />
  </Providers>
);

export default App;

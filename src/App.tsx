import '@styles/index.scss';
import { Providers } from '@providers';
import { RouterProvider } from 'react-router-dom';
import { router } from '@router';

const App = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
};

export default App;

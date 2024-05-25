import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from 'src/router';
import { AuthProvider } from 'src/providers';

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;

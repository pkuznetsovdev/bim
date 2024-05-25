import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from 'src/router';

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;

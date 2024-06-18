import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from 'src/router';
import { AuthProvider } from 'src/providers';
import { Provider } from 'react-redux';
import { store } from '@store';

const App = () => {
  return (
    <Provider store={store}>
      {/* <AuthProvider> */}
      <RouterProvider router={router} />
      {/* </AuthProvider> */}
    </Provider>
  );
};

export default App;

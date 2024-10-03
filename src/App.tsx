import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from 'src/router';
import { Provider } from 'react-redux';
import { store } from '@store';
import { BreakpointsProvider } from '@providers';

const App = () => {
  return (
    <Provider store={store}>
      <BreakpointsProvider >
        {/* <AuthProvider> */}
        <RouterProvider router={router} />
        {/* </AuthProvider> */}
      </BreakpointsProvider>
    </Provider>
  );
};

export default App;

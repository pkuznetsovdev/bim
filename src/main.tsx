import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Root</div>,
  },
  {
    path: '/team',
    element: <p>Team</p>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

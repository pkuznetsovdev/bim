import { Outlet } from 'react-router';

import { AppModals } from '@components';

export const LayoutBase = () => (
  <>
    <Outlet />
    <AppModals />
  </>
);

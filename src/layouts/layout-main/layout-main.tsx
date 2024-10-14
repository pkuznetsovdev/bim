import { Outlet } from 'react-router';

import { AppModals, Footer, Header, Navbar } from '@components';

const mainClass = 'layout-main';

export const LayoutMain = () => (
  <div className={mainClass}>
    <Header />
    <h3>Main layout</h3>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <AppModals />
    <Footer />
  </div>
);

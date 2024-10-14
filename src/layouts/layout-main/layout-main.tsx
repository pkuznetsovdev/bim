import { Outlet } from 'react-router';

import { AppModals, Footer, Header, Navbar } from '@components';

import './layout-main.scss';

const mainClass = 'layout-main';

export const LayoutMain = () => (
  <div className={mainClass}>
    <Header />
    <Navbar />
    <main>
      <Outlet />
    </main>
    <AppModals />
    <Footer />
  </div>
);

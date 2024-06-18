import { Outlet } from 'react-router';
import { AppModals, Navbar, Header, Footer } from '@components';

export const LayoutMain = () => {
  return (
    <div>
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
};

import { Outlet } from 'react-router';
import { AppModals, Navbar, Header, Footer } from '@components';

const mainClass = 'layout-main';

export function LayoutMain() {
  return (
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
}

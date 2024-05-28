import { Outlet } from 'react-router';
import { AppModals, Navbar } from '@components';
import { Link } from '@elements';

export const LayoutMain = () => {
  return (
    <div>
      <header>Header</header>
      <h3>Main layout</h3>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Link to="?sign-in=modal">To sign in</Link>
      <br />
      <Link to="?sign-up=modal">To sign up</Link>
      <AppModals />
      <footer>Footer</footer>
    </div>
  );
};

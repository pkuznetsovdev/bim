import { Outlet } from 'react-router';
import { Navbar } from '@components';

export const LayoutMain = () => {
  return (
    <div>
      <header>Header</header>
      <h3>Main layout</h3>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

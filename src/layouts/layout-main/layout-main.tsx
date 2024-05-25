import { Outlet } from 'react-router';

export const LayoutMain = () => {
  return (
    <div>
      <header>Header</header>
      <h3>Main layout</h3>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

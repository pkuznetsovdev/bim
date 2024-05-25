import { APP_PATHS } from '@constants';
import { Link } from '@elements';

const NAV_BAR_ROUTES = [
  {
    path: APP_PATHS.root,
    name: 'Home',
  },
  {
    path: APP_PATHS.user,
    name: 'Account',
  },
  {
    path: APP_PATHS.petNew,
    name: 'New pet',
  },
  {
    path: APP_PATHS.postNew,
    name: 'New post',
  },
  {
    path: `${APP_PATHS.posts}/123`,
    name: 'Post #123 details ',
  },
];

const mainClass = 'navbar';

export const Navbar = () => {
  return (
    <nav className={mainClass}>
      <ul className={`${mainClass}__links`}>
        {NAV_BAR_ROUTES.map(({ path, name }) => (
          <li key={path} className={`${mainClass}__link`}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

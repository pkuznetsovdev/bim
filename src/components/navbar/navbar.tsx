import { APP_PATHS } from '@constants';
import { Link, List } from '@elements';
import { CommonComponentProps } from '@types';
import classNames from 'classnames';

const mainClass = 'navbar';

interface NavbarProps extends CommonComponentProps {}

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

const NavbarItem = ({ path, name }: (typeof NAV_BAR_ROUTES)[number]) => (
  <Link to={path} className={`${mainClass}__link`}>
    {name}
  </Link>
);

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={classNames(mainClass, className)}>
      <List
        className={`${mainClass}__links`}
        items={NAV_BAR_ROUTES}
        ItemTemplate={NavbarItem}
      />
    </nav>
  );
};

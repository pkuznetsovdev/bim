import classnames from 'classnames';

import { APP_PATHS } from '@constants';
import { List, NavLink } from '@elements';

import type { NavLinkProps } from '@elements';
import type { CommonComponentProps } from '@types';

const mainClass = 'navbar';

interface NavbarProps extends CommonComponentProps {}

const NAV_BAR_ROUTES: Array<NavLinkProps> = [
  {
    to: APP_PATHS.root,
    text: 'Home',
    end: true,
  },
  {
    to: APP_PATHS.user,
    text: 'Account',
  },
  {
    to: APP_PATHS.petNew,
    text: 'New pet',
  },
  {
    to: APP_PATHS.postNew,
    text: 'New post',
  },
  {
    to: `${APP_PATHS.posts}/123`,
    text: 'Post #123 details',
  },
];

const NavbarItem = (navLink: (typeof NAV_BAR_ROUTES)[number]) => (
  <NavLink {...navLink} className={`${mainClass}__link`} />
);

export const Navbar = ({ className }: NavbarProps) => (
  <nav className={classnames(className, mainClass)}>
    <List
      className={`${mainClass}__links`}
      items={NAV_BAR_ROUTES}
      ItemTemplate={NavbarItem}
    />
  </nav>
);

import { APP_PATHS } from '@constants';
import { NavLink, List } from '@elements';
import type { NavLinkProps } from '@elements';
import type { CommonComponentProps } from '@types';
import classNames from 'classnames';

const mainClass = 'navbar';

interface NavbarProps extends CommonComponentProps {}

const NAV_BAR_ROUTES: Array<NavLinkProps> = [
  {
    to: APP_PATHS.home,
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

function NavbarItem(navLink: (typeof NAV_BAR_ROUTES)[number]) {
  return <NavLink {...navLink} className={`${mainClass}__link`} />;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <nav className={classNames(className, mainClass)}>
      <List
        className={`${mainClass}__links`}
        items={NAV_BAR_ROUTES}
        ItemTemplate={NavbarItem}
      />
    </nav>
  );
}

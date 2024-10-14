import type { NavLinkProps } from 'react-router-dom';

import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

import { getClassNameByMods } from '@utils';

interface NavLinkTemplateProps extends NavLinkProps {
  text?: string;
  activeClassName?: string;
  mods?: ElementMods;
}

const mainClass = 'nav-link';

const NavLinkTemplate = ({
  children,
  to,
  text,
  className,
  activeClassName = 'active',
  mods,
  ...props
}: NavLinkTemplateProps) => (
  <NavLink
    {...props}
    to={to}
    className={({ isActive }) =>
      classnames(
        className,
        mainClass,
        getClassNameByMods(mainClass, mods),
        isActive && activeClassName,
      )
    }
  >
    {text || children}
  </NavLink>
);

export { NavLinkTemplate as NavLink };
export type { NavLinkTemplateProps as NavLinkProps };

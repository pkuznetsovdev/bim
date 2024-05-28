import { NavLink } from 'react-router-dom';
import type { NavLinkProps } from 'react-router-dom';

export const Link = ({ children, ...props }: NavLinkProps) => {
  return <NavLink {...props}>{children}</NavLink>;
};

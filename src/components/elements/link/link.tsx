import { NavLink } from 'react-router-dom';
import type { NavLinkProps } from 'react-router-dom';
import classNames from 'classnames';

interface LinkProps extends NavLinkProps {
  isExternal?: boolean;
  href?: HTMLAnchorElement['href'];
  text?: string;
}

const mainClass = 'link';

export const Link = ({
  children,
  isExternal,
  href,
  text,
                       className,
  ...props
}: LinkProps) => {
  const classes = classNames(mainClass, className);

  if (isExternal) {
    return (
      /*  @ts-expect-error TODO: TS ERROR */
      <a href={href || props.to} {...props} className={classes}>
        {/*  @ts-expect-error TODO: TS ERROR */}
        {text || children}
      </a>
    );
  }

  return <NavLink {...props} className={classes}>{text || children}</NavLink>;
};

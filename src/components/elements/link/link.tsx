import type { LinkProps } from 'react-router-dom';

import classnames from 'classnames';
import { Link } from 'react-router-dom';

import { getClassNameByMods, isExternalUrl } from '@utils';

interface LinkInternalTemplateProps {
  isExternal?: Falsy;
}

interface LinkExternalTemplateProps {
  isExternal?: true;
  to: string;
}

type LinkTemplateProps = LinkProps & {
  text?: string;
  mods?: ElementMods;
} & (LinkInternalTemplateProps | LinkExternalTemplateProps);

const mainClass = 'link';

const LinkTemplate = ({
  children,
  isExternal,
  to,
  text,
  className,
  mods,
  ...props
}: LinkTemplateProps) => {
  const classes = classnames(
    className,
    mainClass,
    getClassNameByMods(mainClass, mods),
  );

  const isExternalLink = isExternal || isExternalUrl(to);

  if (isExternalLink) {
    return (
      <a href={to as string} {...props} className={classes}>
        {text || children}
      </a>
    );
  }

  return (
    <Link {...props} to={to} className={classes}>
      {text || children}
    </Link>
  );
};

export { LinkTemplate as Link };

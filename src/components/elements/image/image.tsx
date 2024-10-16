import classnames from 'classnames';
import { JSX, PropsWithChildren } from 'react';

import { getClassNameByMods } from '@utils';

interface ImageTemplateProps
  extends PropsWithChildren<{
    mods?: ElementMods;
  }> {}

const mainClass = 'image';

export const Image = ({
  className,
  children,
  mods,
  alt,
  ...props
}: JSX.IntrinsicElements['img'] & ImageTemplateProps) => (
  <img
    {...props}
    alt={alt || 'image'}
    className={classnames(
      className,
      mainClass,
      getClassNameByMods(mainClass, mods),
    )}
  />
);

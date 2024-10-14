import classnames from 'classnames';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { getClassNameByMods } from '@utils';

const mainClass = 'button';

// extend the base button attributes
interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  isLoading?: boolean;
  disabled?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  mods?: ElementMods;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      children,
      mods = ['primary'],
      disabled,
      isLoading,
      leftIcon,
      rightIcon,
      className,
      ...props
    },
    ref,
  ) => (
    <button
      {...props}
      className={classnames(
        className,
        mainClass,
        getClassNameByMods(mainClass, mods),
      )}
      // eslint-disable-next-line react/button-has-type
      type={type}
      ref={ref}
      disabled={disabled || isLoading}
    >
      {!isLoading && children}
    </button>
  ),
);

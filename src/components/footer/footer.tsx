import classNames from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

const mainClass = 'footer';

interface FooterProps extends ComponentPropsWithoutRef<'footer'> {}

export const Footer = ({ className }: FooterProps) => {
  return <footer className={classNames(className, mainClass)}>Footer</footer>;
};

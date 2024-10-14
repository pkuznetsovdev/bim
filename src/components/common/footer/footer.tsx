import classnames from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

const mainClass = 'footer';

interface FooterProps extends ComponentPropsWithoutRef<'footer'> {}

export const Footer = ({ className }: FooterProps) => (
  <footer className={classnames(className, mainClass)}>Footer</footer>
);

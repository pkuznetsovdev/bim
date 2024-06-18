import { CommonComponentProps } from '@types';
import classNames from 'classnames';

const mainClass = 'footer';

interface FooterProps extends CommonComponentProps {}

export const Footer = ({ className }: FooterProps) => {
  return <footer className={classNames(mainClass, className)}>Footer</footer>;
};

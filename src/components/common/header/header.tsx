import classnames from 'classnames';

import { CommonComponentProps } from '@types';
import { getAssetsPath } from '@utils';

import './header.scss';

const mainClass = 'header';

interface HeaderProps extends CommonComponentProps {}

export const Header = ({ className }: HeaderProps) => (
  <header className={classnames(className, mainClass)}>
    <img
      className={classnames(className, `${mainClass}__logo`)}
      src={getAssetsPath('/images/logo/damoi.webp')}
      alt=""
    />
  </header>
);

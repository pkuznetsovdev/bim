import classnames from 'classnames';

import { AuthBlock } from '@components/common/auth-block';
import { Image } from '@elements';
import { CommonComponentProps } from '@types';
import { getAssetsPath } from '@utils';

import './header.scss';

const mainClass = 'header';

interface HeaderProps extends CommonComponentProps {}

export const Header = ({ className }: HeaderProps) => (
  <header className={classnames(className, mainClass)}>
    <Image
      className={`${mainClass}__logo`}
      src={getAssetsPath('/images/logo/damoi.png')}
      alt="pawprint in the house"
    />
    <AuthBlock />
  </header>
);

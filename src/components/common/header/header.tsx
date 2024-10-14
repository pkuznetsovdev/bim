import classnames from 'classnames';

import { CommonComponentProps } from '@types';

const mainClass = 'header';

interface HeaderProps extends CommonComponentProps {}

export const Header = ({ className }: HeaderProps) => (
  <header className={classnames(className, mainClass)}>
    <img
      className={classnames(className, mainClass, 'logo')}
      src="https://avatars.dzeninfra.ru/get-zen_doc/1219682/pub_5e4c18346754405ed3b895ad_5e4c2ff15c1f4e253331964b/scale_1200"
      alt=""
    />
  </header>
);

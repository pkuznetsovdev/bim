import classnames from 'classnames';

import { MODAL_IDS } from '@constants';
import { Block, Link } from '@elements';
import { getModalLink } from '@utils';

import type { CommonComponentProps } from '@types';

import './auth-block.scss';

const mainClass = 'auth-block';

interface AuthBlockProps extends CommonComponentProps {}

export const AuthBlock = ({ className }: AuthBlockProps) => {
  return (
    <Block className={classnames(className, mainClass)}>
      <Link
        className={classnames(`${mainClass}__link`)}
        to={getModalLink(MODAL_IDS.signIn)}
      >
        Sign in
      </Link>
      <Link
        className={classnames(`${mainClass}__link`)}
        to={getModalLink(MODAL_IDS.signUp)}
      >
        Sign up
      </Link>
    </Block>
  );
};

import classnames from 'classnames';

import { Block, Button } from '@elements';

import type { CommonComponentProps } from '@types';

import './auth-block.scss';

const mainClass = 'auth-block';

interface AuthBlockProps extends CommonComponentProps {}

export const AuthBlock = ({ className }: AuthBlockProps) => {
  return (
    <Block className={classnames(className, mainClass)}>
      <Button>Sign in</Button>
      <Button>Sign up</Button>
    </Block>
  );
};

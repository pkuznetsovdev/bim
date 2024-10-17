import classnames from 'classnames';

import { Block, Text } from '@elements';
import { CommonComponentProps } from '@types';

import './sign-in-modal.scss';

const mainClass = 'sign-in-modal';

interface SignInModalProps extends CommonComponentProps {}

export const SignInModal = ({ className }: SignInModalProps) => (
  <Block className={classnames(className, mainClass)}>
    <Text as="h3">Sign in</Text>
    <Text>Sign in form</Text>
  </Block>
);

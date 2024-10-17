import classnames from 'classnames';

import { Block, Text } from '@elements';
import { CommonComponentProps } from '@types';

import './sign-up-modal.scss';

const mainClass = 'sign-up-modal';

interface SignUpModalProps extends CommonComponentProps {}

export const SignUpModal = ({ className }: SignUpModalProps) => (
  <Block className={classnames(className, mainClass)}>
    <Text as="h3">Sign up</Text>
    <Text>Sign up form</Text>
  </Block>
);

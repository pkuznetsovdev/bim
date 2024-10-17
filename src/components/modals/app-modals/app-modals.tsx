import { MODAL_IDS } from '@constants';

import { Modal } from '../modal';
import { SignInModal } from '../sign-in-modal';
import { SignUpModal } from '../sign-up-modal';

export const AppModals = () => (
  <>
    <Modal id={MODAL_IDS.signUp}>
      <SignUpModal />
    </Modal>
    <Modal id={MODAL_IDS.signIn}>
      <SignInModal />
    </Modal>
  </>
);

import { MODAL_IDS } from '@constants';
import { Link } from '@elements';

import { Modal } from '../modal';

const SignUp = () => <div className="SignUp">SignUp</div>;

const SignIn = () => (
  <>
    <Link to="?sign-up=modal">To sign up</Link>
    <div className="SignIn">SignIn</div>
  </>
);

export const AppModals = () => (
  <>
    <Modal id={MODAL_IDS.signUp}>
      <SignUp />
    </Modal>
    <Modal id={MODAL_IDS.signIn}>
      <SignIn />
    </Modal>
  </>
);

import { Link } from '@elements';
import { Modal } from '../modal';

const SignUp = () => {
  return <div className="SignUp">SignUp</div>;
};

const SignIn = () => {
  return (
    <>
      <Link to="?sign-up=modal">To sign up</Link>
      <div className="SignIn">SignIn</div>
    </>
  );
};

export const AppModals = () => {
  return (
    <>
      <Modal id="sign-up">
        <SignUp />
      </Modal>
      <Modal id="sign-in">
        <SignIn />
      </Modal>
    </>
  );
};

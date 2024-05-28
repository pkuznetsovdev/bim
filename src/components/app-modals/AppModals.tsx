import { Modal } from '@components';
import { Link } from '@elements';

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

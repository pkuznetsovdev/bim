import { Link } from '@elements';
import { Modal } from '../modal';

function SignUp() {
  return <div className="SignUp">SignUp</div>;
}

function SignIn() {
  return (
    <>
      <Link to="?sign-up=modal">To sign up</Link>
      <div className="SignIn">SignIn</div>
    </>
  );
}

export function AppModals() {
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
}

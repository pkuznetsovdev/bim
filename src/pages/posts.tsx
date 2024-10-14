import { PropsWithChildren } from 'react';
import { useSignInMutation, useSignUpMutation } from 'src/api';
import { Button } from '@elements';
import type { Post, PostDetailsFound } from '@types';
import { useTheme } from '@providers';

const PostTemplate = ({
  description,
  petDetails,
}: PropsWithChildren<Post & PostDetailsFound>) => {
  return (
    <div className="card">
      <h4>{description}</h4>
      <img src={petDetails?.photos[0]} alt="" />
      <p>other post details</p>
    </div>
  );
};

const user = { email: 'pavel@email.com', password: 'secret' };

export const Posts = () => {
  const { toggleTheme } = useTheme();
  const [signIn, signInResult] = useSignInMutation();
  const [signUp, signUpResult] = useSignUpMutation();

  const handleSignIn = () => {
    signIn(user).then((result) => console.log('signIn: ', result));
  };

  const handleSignUp = () => {
    signUp(user).then((result) => console.log('signUp: ', result));
  };

  console.log('signInResult: ', signInResult);
  console.log('signUpResult: ', signUpResult);

  return (
    <>
      <h1>Posts Page</h1>
      <Button onClick={handleSignIn}>sign in</Button>
      <Button onClick={handleSignUp}>sign up</Button>
      <Button onClick={toggleTheme}>theme</Button>
      {/*       {userData.isAuthorized ? (
        <button type="button" onClick={() => {}}>
          Logout
        </button>
      ) : (
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      )}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <List items={posts} itemKeyPropName="id" ItemTemplate={PostTemplate} />
      )} */}
    </>
  );
};

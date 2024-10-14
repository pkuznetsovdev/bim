import { PropsWithChildren } from 'react';
import { useSignInMutation, useSignUpMutation } from 'src/api';
import { Button } from '@elements';
import { LanguageSelector } from '@components';
import type { Post, PostDetailsFound } from '@types';
import { useTheme } from '@providers';
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation();
  const [signIn, signInResult] = useSignInMutation();
  const [signUp, signUpResult] = useSignUpMutation();

  const handleSignIn = () => {
    signIn(user).then((result) => console.log('signIn: ', result));
  };

  const handleSignUp = () => {
    signUp(user).then((result) => console.log('signUp: ', result));
  };

  return (
    <>
      <h1>Posts Page</h1>
      <Button onClick={handleSignIn}>sign in</Button>
      <Button onClick={handleSignUp}>sign up</Button>
      <Button onClick={toggleTheme}>theme</Button>
      <LanguageSelector />
    </>
  );
};

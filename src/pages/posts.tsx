import { useAuth } from '@hooks';

export const Posts = () => {
  const { login } = useAuth();
  const test = () => login({
    id: 'test',
  });
  return (
    <>
      <h1>Posts Page</h1>
      <button onClick={test}>Login</button>
    </>
  );
};

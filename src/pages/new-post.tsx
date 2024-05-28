import { useAuth } from '@hooks';

export const NewPost = () => {
  const { logout } = useAuth();
  return (
    <>
      <h1>New Post Page</h1>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </>
  );
};

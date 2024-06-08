import { useAuth } from '@hooks';
import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { PostsApi, RootState, useStoreDispatch } from '@store';

export const Posts = () => {
  const { login, user, logout } = useAuth();
  const test = () => {
    login({
      email: 'test',
      password: 'test',
    });
  };

  const dispatch = useStoreDispatch();

  useLayoutEffect(() => {
    dispatch(PostsApi.getPosts());
  }, [dispatch]);

  const posts = useSelector<RootState, RootState['posts']['data']>(
    state => state.posts.data
  );
  const status = useSelector<RootState, RootState['posts']['status']>(
    state => state.posts.status
  );
  const isLoading = status === 'loading';
  const isLoaded = status === 'success';

  return (
    <>
      <h1>Posts Page</h1>
      {user ? (
        <button type="button" onClick={logout}>
          Logout
        </button>
      ) : (
        <button type="button" onClick={test}>
          Login
        </button>
      )}

      <ul>
        {isLoading ? 'Loading...' : null}
        {isLoaded && posts
          ? posts.map(post => <li key={post.id}>{post.description}</li>)
          : []}
      </ul>
    </>
  );
};

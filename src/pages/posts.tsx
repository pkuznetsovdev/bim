import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useGetPostsQuery, UserApi } from '@models';
import { RootState, useStoreDispatch } from '@store';
import { List } from '@elements';
import type { Post, PostDetailsFound } from '@types';

const PostTemplate = ({
  description,
  id,
  petDetails,
}: React.PropsWithChildren<Post & PostDetailsFound>) => {
  return (
    <div className="card">
      <h4>{description}</h4>
      <img src={petDetails?.photos[0]} alt="" />
      <p>other post details</p>
    </div>
  );
};

export const Posts = () => {
  const dispatch = useStoreDispatch();

  const { data: posts = [], isError, isLoading } = useGetPostsQuery();

  console.log('posts: ', posts);

  const handleLogin = useCallback(
    (params: unknown) => {
      dispatch(
        UserApi.authLocal({
          email: 'user1@test.com',
          password: 'user1',
        })
      );
    },
    [dispatch]
  );

  const userData = useSelector<RootState, RootState['user']>(
    state => state.user
  );

  return (
    <>
      <h1>Posts Page</h1>
      {userData.isAuthorized ? (
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
      )}
    </>
  );
};

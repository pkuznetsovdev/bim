import { useCallback, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { PostsApi, UserApi } from '@models';
import { RootState, useStoreDispatch } from '@store';
import { List } from "@elements";
import type { Post, PostDetailsFound } from "@types";


const PostTemplate = ({ description, id, petDetails }: React.PropsWithChildren<Post & PostDetailsFound>) => {
  return (
    <div className="card">
      <h4>{description}</h4>
      <img src={petDetails?.photos[0]} alt="" />
      <p>other post details</p>
    </div>
  )
}

export const Posts = () => {
  const dispatch = useStoreDispatch();

  useLayoutEffect(() => {
    dispatch(PostsApi.getPosts());
  }, [dispatch]);

  const posts = useSelector<RootState, RootState["posts"]["data"]>(
    state => state.posts.data
  ) as unknown as Array<Post & PostDetailsFound>;

  const handleLogin = useCallback((params: unknown) => {
    dispatch(UserApi.authLocal({
      email: 'user1@test.com',
      password: 'user1',
    }));
  }, [dispatch]);

  const userData = useSelector<RootState, RootState['user']>(
    state => state.user
  );

  const status = useSelector<RootState, RootState['posts']['status']>(
    state => state.posts.status
  );
  const isLoading = status === 'loading';
  const isLoaded = status === 'success';

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

      <List items={posts} itemKeyPropName="id" ItemTemplate={PostTemplate} />

      <ul>
        {/*         {isLoading ? 'Loading...' : null}
        {isLoaded && posts
          ? posts.map(post => <li key={post.id}>{post.description}</li>)
          : []} */}
      </ul>
    </>
  );
};

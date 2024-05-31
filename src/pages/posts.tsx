import { useAuth } from '@hooks';
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { getPosts, RootState, useStoreDispatch } from "../store";

export const Posts = () => {
  const { login } = useAuth();
  const test = () => login({ id: 'test' });

  const dispatch = useStoreDispatch();

  useLayoutEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  const posts = useSelector<RootState>(state => state.posts.data);

  return (
    <>
      <h1>Posts Page</h1>
      <button type="button" onClick={test}>
        Login
      </button>
    </>
  );
};

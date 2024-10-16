import { LanguageSelector, List, PostList } from "@components";
import { Button } from '@elements';
import { useTheme } from '@providers';

export const Posts = () => {

  return (
    <>
      <h1>Posts Page</h1>
      <PostList />
    </>
  );
};

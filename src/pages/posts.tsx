import classnames from 'classnames';

import { Block, PostList } from '@components';

const mainClass = 'page-posts';

export const Posts = () => {
  return (
    <Block className={classnames('page', mainClass)}>
      <h1>Posts Page</h1>
      <PostList />
    </Block>
  );
};

import classnames from 'classnames';

import { List } from '@elements';
import { CommonComponentProps } from '@types';
import { MOCKED } from 'src/mocked';

import { PostListItem } from '../post-list-item';

import './post-list.scss';

const mainClass = 'post-list';

interface PostListProps extends CommonComponentProps {}

export const PostList = ({ className }: PostListProps) => {
  return (
    <List
      className={classnames(className, mainClass)}
      ItemTemplate={PostListItem}
      items={MOCKED.posts}
    />
  );
};

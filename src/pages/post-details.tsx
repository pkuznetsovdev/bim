import { useParams } from 'react-router';
import { Block, Button, Text } from '@elements';

export const PostDetails = () => {
  const { postId } = useParams();

  return (
    <div>
      <Text as="h1">Post details Page</Text>
      <Text>Post #{postId}</Text>
      <Block mods={['hello']}>Block</Block>
      <Button>Click me</Button>
    </div>
  );
};

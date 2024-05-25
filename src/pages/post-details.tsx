import { useParams } from 'react-router';

export const PostDetails = () => {
  const { postId } = useParams();

  return (
    <div>
      <h1>Post details Page</h1>
      <p>Post #{postId}</p>
    </div>
  );
};

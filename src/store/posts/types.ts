import { GenericSlice, IsoString, PetDetails } from '@types';
import { Pet } from '../pets/types';
import { User } from '../user/types';

export type PostType = 'lost' | 'found';
export type PostDescription = string;

interface PostDetailsBase {
  description: PostDescription;
}

interface PostDetailsLost extends PostDetailsBase {
  pet: Pet['id'];
}

interface PostDetailsFound extends PostDetailsBase {
  petDetails: Partial<PetDetails> & Pick<PetDetails, 'photos'>;
  user: User['id'];
}

export type PostDetails = PostDetailsLost | PostDetailsFound;

export type Post = PostDetails & {
  id: number;
  createdAt: IsoString;
  type: PostType;
};

export interface PostsState extends GenericSlice<Array<Post>> {}

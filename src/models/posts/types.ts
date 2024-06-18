import { GenericSlice, IsoString, PetDetails, Pet, User } from '@types';

export type PostType = 'lost' | 'found';
export type PostDescription = string;

interface PostDetailsBase {
  description: PostDescription;
}

export interface PostDetailsLost extends PostDetailsBase {
  pet: Pet['id'];
}

export interface PostDetailsFound extends PostDetailsBase {
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

import { Pet, PetDetails } from './pets';
import { User } from './user';

import type { IsoString } from './date';
import type { GenericSlice } from './store';

export type PostType = 'lost' | 'found';
export type PostDescription = string;

interface PostDetailsBase {
  description: PostDescription;
  type: PostType;
}

export interface PostDetailsLost extends PostDetailsBase {
  pet: Pet['id'];
  type: 'lost';
}

export interface PostDetailsFound extends PostDetailsBase {
  petDetails: Partial<PetDetails> & Pick<PetDetails, 'photos'>;
  user: User['id'];
  type: 'found';
}

export type PostDetails = PostDetailsLost | PostDetailsFound;

export type Post = PostDetails & {
  id: number;
  createdAt: IsoString;
};

export interface PostsState extends GenericSlice<Array<Post>> {}

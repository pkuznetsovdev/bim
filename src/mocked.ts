import { PetDetails } from '@types';

export const MOCKED: {
  posts: Array<{
    pet: Partial<PetDetails>;
  }>;
} = {
  posts: Array(20).fill({
    pet: {
      type: 'dog',
      breed: 'labrador',
    },
  }),
};

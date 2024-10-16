import { PetDetails } from '@types';

export const MOCKED: {
  posts: Array<{
    pet: Partial<PetDetails>;
  }>;
} = {
  posts: [
    {
      pet: {
        type: 'dog',
        breed: 'labrador',
      },
    },
  ],
};

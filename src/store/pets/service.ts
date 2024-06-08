import { API } from '@api';
import { PetDetails } from './types';

const PETS_ENDPOINTS = (() => {
  const base = '/pets';

  return {
    getAll: base,
    create: `${base}/create`,
  } as const;
})();

export const PetsService = {
  getAll: async () => {
    const res = await API.get(PETS_ENDPOINTS.getAll);

    return res;
  },
  create: async (newPost: PetDetails) => {
    const res = await API.post(PETS_ENDPOINTS.create, {
      body: JSON.stringify(newPost),
    });

    return res;
  },
};

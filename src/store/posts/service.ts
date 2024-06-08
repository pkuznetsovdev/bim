import { API, API_PATHS } from '@api';
import { Post } from './types';

const POSTS_ENDPOINTS = (() => {
  const base = API_PATHS.posts;

  return {
    getAll: base,
    create: `${base}/create`,
  } as const;
})();

export const PostsService = {
  getAll: async () => {
    const res = await API.get(POSTS_ENDPOINTS.getAll);

    return res;
  },
  create: async (newPost: Post) => {
    const res = await API.post(POSTS_ENDPOINTS.create, {
      body: JSON.stringify(newPost),
    });

    return res;
  },
};

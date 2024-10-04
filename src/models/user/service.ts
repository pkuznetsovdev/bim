import { API, API_PATHS } from '@api';
import type { User, UserDetailsByEmail } from '@types';

const USER_ENDPOINTS = (() => {
  const base = API_PATHS.users;

  return {
    getAll: base,
    create: `${base}/create`,
  } as const;
})();

const AUTH_ENDPOINTS = (() => ({ authLocal: API_PATHS.authLocal }) as const)();

export const UserService = {
  getAll: async () => {
    const res = await API.get(USER_ENDPOINTS.getAll);

    return res;
  },
  create: async (newPost: User) => {
    const res = await API.post(USER_ENDPOINTS.create, {
      body: JSON.stringify(newPost),
    });

    return res;
  },

  /** AUTH  */
  authLocal: async (user: UserDetailsByEmail & { password: string }) => {
    const res = await API.post(AUTH_ENDPOINTS.authLocal, { data: user });

    return res;
  },
};

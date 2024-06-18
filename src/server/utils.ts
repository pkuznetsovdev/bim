import { User } from '@types';

export const getUserDetails = (userDB: User & { password: string }) => {
  const { password, ...details } = userDB;
  return details;
};

export enum UserRoles {
  Admin = "admin",
  User = "user",
}

export type User = {
  id: number;
  googleId?: string;
  password?: string;
  email?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  role?: UserRoles;
};

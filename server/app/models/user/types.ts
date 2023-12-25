export enum UserRoles {
  Admin = "admin",
  User = "user",
}

export type User = {
  id: string;
  email: string;
  password: string;
  role: UserRoles;
  firstName?: string;
  lastName?: string;
};

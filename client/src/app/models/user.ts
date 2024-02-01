export type User = {
  id: number;
  googleId?: string;
  password?: string;
  email?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  // role?: UserRoles;
};

export class UserModel {
  id: User['id'];
  username: User['username'];
  firstName: User['firstName'];
  lastName: User['lastName'];
  email: User['email'];
  password: User['password'];

  constructor(params: User) {
    this.id = params.id;
    this.username = params.username;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.email = params.email;
    this.password = params.password;
  }
}

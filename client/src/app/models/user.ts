import { User } from '@server/models'

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

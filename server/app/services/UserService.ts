export class UserService {

    async getUser() {
        return 'Get user data from DB';
    }

}

export interface IUserService extends UserService {}
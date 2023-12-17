import {IUserService} from "@app/services/UserService";

export * from './UserService';

export interface Services {
    userService: IUserService;
}
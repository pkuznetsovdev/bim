import {IUserService} from "@app/services/UserService";
import {ICityService} from "@app/services/CityService";

export * from './UserService';
export * from './CityService';

export interface Services {
    userService: IUserService;
    cityService: ICityService;
}
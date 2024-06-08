import { Pet } from '../pets/types';

export interface UserDetailsBase {}

export interface UserDetailsByPhoneNumber extends UserDetailsBase {
  phoneNumber: string;
}

export interface UserDetailsByEmail extends UserDetailsBase {
  email: string;
}

export type UserDetails = UserDetailsByEmail | UserDetailsByPhoneNumber;

export type User = UserDetails & {
  id: number;
  firstName?: string;
  secondName?: string;
  accountName?: string;
  pets?: Array<Pet['id']>;
};

import type { Pet } from './pets';
import type { GenericSlice } from './store';

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

export interface UserState extends Omit<GenericSlice<never>, 'data'> {
  details?: User;
  isAuthorized?: boolean;
}

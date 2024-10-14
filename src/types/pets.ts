import { PET_STATUS } from '@constants';

import type { IsoString } from './date';
import type { GenericSlice } from './store';

export type PetType = string;
export type PetBreed = string;
export type PetName = string;
export type PetColor = string;
export type PetDescription = string;
export type PetHost = number;
export type PetPhotoUrl = string;
export type PetStatus = (typeof PET_STATUS)[keyof typeof PET_STATUS];

export interface PetDetails {
  type: PetType;
  breed: PetBreed;
  name: PetName;
  dateOfBirth: IsoString;
  photos: Array<PetPhotoUrl>;
  status: PetStatus;
  colors?: Array<PetColor>;
  description?: PetDescription;
}

export interface Pet extends PetDetails {
  id: number;
  createdAt: IsoString;
  host: PetHost;
}

export interface PetsState extends GenericSlice<Array<Pet>> {}

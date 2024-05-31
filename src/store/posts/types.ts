import { GenericSlice, IsoString } from "@types";

export type PetType = string;
export type PetBreed = string;
export type PetName = string;
export type PetColor = string;
export type PetDescription = string;
export type PetHost = number;
export type PetPhotoUrl = string;

export interface Pet {
  id: number;
  createdAt: IsoString;
  type: PetType;
  breed: PetBreed;
  name: PetName;
  dateOfBirth: IsoString;
  colors: Array<PetColor>;
  description: PetDescription;
  host: PetHost;
  photos: Array<PetPhotoUrl>;
}

export interface Post {
  pet: Pet;
}

export interface PostsState extends GenericSlice<Array<Post>>{
}

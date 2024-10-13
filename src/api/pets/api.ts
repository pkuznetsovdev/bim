import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_PATH } from '@constants';
import { Pet, PetDetails } from '@types';
import { getInvalidateTags, getProvidesTags } from '../utils';

const TAG_TYPE = 'pets' as const;

export const petsApi = createApi({
  reducerPath: 'pets',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_API_PATH}/pets` }),
  tagTypes: [TAG_TYPE],
  endpoints: (build) => ({
    getPets: build.query<Array<Pet>, void>({
      query: () => '',
      providesTags: getProvidesTags<typeof TAG_TYPE, Array<Pet>>(TAG_TYPE),
    }),
    createPet: build.mutation<Pet, PetDetails>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: getInvalidateTags(TAG_TYPE),
    }),
  }),
});

export const { useGetPetsQuery, useCreatePetMutation } = petsApi;

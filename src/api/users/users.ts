import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_ENDPOINTS, API_PATHS } from '@constants';
import { NewUserByEmail, User } from '@types';
import { getApiUrl } from '@utils';

// const TAG_TYPE = 'user' as const;

export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: getApiUrl(API_PATHS.users),
    credentials: 'include',
  }),
  endpoints: (build) => ({
    signUp: build.mutation<User, NewUserByEmail>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
        responseHandler: (r) => r.json(),
      }),
    }),
    getCurrent: build.query<User, null>({
      query: () => ({
        url: API_ENDPOINTS.users.current,
      }),
      async onQueryStarted(_args, { queryFulfilled }) {
        try {
          await queryFulfilled;
          console.warn(queryFulfilled);
          // await dispatch(usersApi.endpoints.getCurrent.initiate(null));
        } catch (error) {
          console.error('signIn error: ', error);
        }
      },
    }),
  }),
});

export const { useGetCurrentQuery, useSignUpMutation } = usersApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_PATHS } from '@constants';
import { AuthLocalProps } from '@types';
import { getApiUrl } from '@utils';

import { usersApi } from '../users';

// const TAG_TYPE = 'auth' as const;

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: getApiUrl(API_PATHS.auth),
    credentials: 'include',
  }),
  endpoints: (build) => ({
    signIn: build.mutation<null, AuthLocalProps>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
        responseHandler: (r) => r.text(),
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(usersApi.endpoints.getCurrent.initiate(null));
        } catch (error) {
          console.error('signIn error: ', error);
        }
      },
    }),
  }),
});

export const { useSignInMutation } = authApi;

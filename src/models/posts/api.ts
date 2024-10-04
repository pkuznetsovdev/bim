import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_PATH } from '@constants';
import { Post, PostDetails } from '@types';
import { getInvalidateTags, getProvidesTags } from '../utils';

const TAG_TYPE = 'posts' as const;

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_API_PATH}/posts` }),
  tagTypes: [TAG_TYPE],
  endpoints: (build) => ({
    getPosts: build.query<Array<Post>, void>({
      query: () => '',
      providesTags: getProvidesTags<typeof TAG_TYPE, Array<Post>>(TAG_TYPE),
    }),
    createPost: build.mutation<Post, PostDetails>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: getInvalidateTags(TAG_TYPE),
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postsApi;

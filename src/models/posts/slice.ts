import { createSlice } from '@reduxjs/toolkit';
import { SLICE_STATUS } from '@constants';
import { isCancelledRequestError } from '@utils';
import { PostsState } from './types';
import { PostsController } from './controllers';

const initialState: PostsState = {
  data: [],
  status: SLICE_STATUS.idle,
  error: null,
};

const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    /** getPosts  */
    builder.addCase(PostsController.getPosts.fulfilled, (state, action) => {
      if (!isCancelledRequestError(action?.payload?.error?.status)) {
        state.data = action.payload;
        state.status = SLICE_STATUS.success;
      }
    });
    builder.addCase(PostsController.getPosts.pending, state => {
      state.status = SLICE_STATUS.loading;
    });
    builder.addCase(PostsController.getPosts.rejected, state => {
      state.status = SLICE_STATUS.error;
    });

    /** createPost  */
    builder.addCase(PostsController.createPost.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = SLICE_STATUS.success;
    });
    builder.addCase(PostsController.createPost.pending, state => {
      state.status = SLICE_STATUS.loading;
    });
    builder.addCase(PostsController.createPost.rejected, state => {
      state.status = SLICE_STATUS.error;
    });
  },
});

export const postsEReducer = posts.reducer;

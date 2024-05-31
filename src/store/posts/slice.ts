import { createSlice } from "@reduxjs/toolkit";
import { SLICE_STATUS } from "@constants";
import { PostsState } from "./types";
import { getPosts, createPost } from "./controllers";

const initialState: PostsState = {
  data: [],
  status: SLICE_STATUS.success,
  error: null,
}

const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    /** getPosts  */
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = SLICE_STATUS.success;
    });
    builder.addCase(getPosts.pending, state => {
      state.status = SLICE_STATUS.loading;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.status = SLICE_STATUS.error;
    });

    /** createPost  */
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = SLICE_STATUS.success;
    });
    builder.addCase(createPost.pending, state => {
      state.status = SLICE_STATUS.loading;
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.status = SLICE_STATUS.error;
    });
  },
});

export const postsEReducer = posts.reducer;

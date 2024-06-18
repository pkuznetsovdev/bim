import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from './types';
import { PostsService } from './service';

export const PostsController = {
  getPosts: createAsyncThunk('getPosts', async () => {
    try {
      const { data } = await PostsService.getAll();

      return data;
    } catch (error) {
      return {
        error,
      };
    }
  }),
  createPost: createAsyncThunk('createPost', async (newPost: Post) => {
    try {
      const { data } = await PostsService.create(newPost);

      return data;
    } catch (error) {
      return {
        error,
      };
    }
  }),
};

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "./types";
import { PostsService } from "./services";

export const getPosts = createAsyncThunk(
  'getPosts',
  async () => {
      console.log('getPosts')
    const response = await PostsService.getAll();
    const data = await response.json();

    return data;
})

export const createPost = createAsyncThunk(
  'createPost',
  async (newPost: Post) => {
    const response = await PostsService.create(newPost);

    const data = await response.json();

    return data;
})

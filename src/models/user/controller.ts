import { createAsyncThunk } from '@reduxjs/toolkit';
import type { User } from '@types';
import { UserService } from './service';

export const UserController = {
  getUsers: createAsyncThunk('getUsers', async (_, thunkAPI) => {
    try {
      const { data } = await UserService.getAll();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response || error);
    }
  }),
  createUser: createAsyncThunk(
    'createUser',
    async (newUser: User, thunkAPI) => {
      try {
        const { data } = await UserService.create(newUser);

        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error?.response || error);
      }
    }
  ),
  authLocal: createAsyncThunk(
    'authLocal',
    async (userAuthData: unknown, thunkAPI) => {
      try {
        const { data } = await UserService.authLocal(userAuthData);

        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error?.response || error);
      }
    }
  ),
};

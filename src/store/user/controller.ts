import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from './types';
import { UserService } from './service';

export const UserController = {
  getUsers: createAsyncThunk('getUsers', async () => {
    try {
      const { data } = await UserService.getAll();

      return data;
    } catch (error) {
      return {
        error,
      };
    }
  }),
  createUser: createAsyncThunk('createUser', async (newUser: User) => {
    try {
      const { data } = await UserService.create(newUser);

      return data;
    } catch (error) {
      return {
        error,
      };
    }
  }),
  authLocal: createAsyncThunk('authLocal', async (userAuthData: unknown) => {
    try {
      const { data } = await UserService.authLocal(userAuthData);

      return data;
    } catch (error) {
      return {
        error,
      };
    }
  }),
};

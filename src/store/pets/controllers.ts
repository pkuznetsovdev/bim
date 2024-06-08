import { createAsyncThunk } from '@reduxjs/toolkit';
import { Pet } from './types';
import { PetsService } from './service';

export const PetsController = {
  getPets: createAsyncThunk('getPets', async () => {
    try {
      const { data } = await PetsService.getAll();

      return data;
    } catch (error) {
      return {
        error,
      };
    }
  }),
  createPet: createAsyncThunk('createPet', async (newPet: Pet) => {
    try {
      const { data } = await PetsService.create(newPet);

      return data;
    } catch (error) {
      return {
        error,
      };
    }
  }),
};

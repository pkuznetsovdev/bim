import { createSlice } from '@reduxjs/toolkit';
import { SLICE_STATUS } from '@constants';
import { PetsState } from './types';
import { PetsController } from './controllers';

const initialState: PetsState = {
  data: [],
  status: SLICE_STATUS.idle,
  error: null,
};

const Pets = createSlice({
  name: 'Pets',
  initialState,
  reducers: {},
  extraReducers: builder => {
    /** getPets  */
    builder.addCase(PetsController.getPets.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = SLICE_STATUS.success;
    });
    builder.addCase(PetsController.getPets.pending, state => {
      state.status = SLICE_STATUS.loading;
    });
    builder.addCase(PetsController.getPets.rejected, (state, action) => {
      state.status = SLICE_STATUS.error;
    });

    /** createPet  */
    builder.addCase(PetsController.createPet.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = SLICE_STATUS.success;
    });
    builder.addCase(PetsController.createPet.pending, state => {
      state.status = SLICE_STATUS.loading;
    });
    builder.addCase(PetsController.createPet.rejected, (state, action) => {
      state.status = SLICE_STATUS.error;
    });
  },
});

export const petsReducer = Pets.reducer;

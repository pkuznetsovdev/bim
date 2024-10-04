import { createSlice } from '@reduxjs/toolkit';
import { isCancelledRequestError } from '@api/utils.ts';
import { SLICE_STATUS } from '@constants';
import type { UserState } from '@types';
import { UserController } from './controller';

const initialState: UserState = {
  status: SLICE_STATUS.idle,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /** authLocal  */
    builder.addCase(UserController.authLocal.fulfilled, (state, action) => {
      if (!isCancelledRequestError(action?.payload?.error?.status)) {
        state.details = action.payload.details;
        state.isAuthorized = action.payload.isAuthorized;
        state.status = SLICE_STATUS.success;
      }
    });
    builder.addCase(UserController.authLocal.pending, (state) => {
      state.status = SLICE_STATUS.loading;
    });
    builder.addCase(UserController.authLocal.rejected, (state, action) => {
      state.status = SLICE_STATUS.error;
      // @ts-expect-error TODO: ts error
      state.error = action?.payload?.data;
    });
  },
});

export const userReducer = userSlice.reducer;

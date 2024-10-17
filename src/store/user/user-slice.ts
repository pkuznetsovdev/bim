import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@types';

type InitialState = User | null;

const initialState = null as InitialState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<User>) => action.payload,
    clearUser: () => null,
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const userSliceReducer = userSlice.reducer;

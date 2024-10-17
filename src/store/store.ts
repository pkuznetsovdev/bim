import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { authApi, petsApi, postsApi, usersApi } from 'src/api';

import { userSliceReducer } from './user';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [petsApi.reducerPath]: petsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    user: userSliceReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      postsApi.middleware,
      petsApi.middleware,
      authApi.middleware,
      usersApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useStoreDispatch = () => useDispatch<AppDispatch>();

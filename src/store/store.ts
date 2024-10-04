import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { petsApi, userReducer, postsApi } from '@models';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [petsApi.reducerPath]: petsApi.reducer,
    user: userReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      postsApi.middleware,
      petsApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useStoreDispatch = () => useDispatch<AppDispatch>();

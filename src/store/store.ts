import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { postsEReducer } from './posts';

export const store = configureStore({
  reducer: {
    posts: postsEReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useStoreDispatch = () => useDispatch<AppDispatch>();

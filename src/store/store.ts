import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { postsEReducer, petsReducer, userReducer } from '@models';

export const store = configureStore({
  reducer: {
    posts: postsEReducer,
    pets: petsReducer,
    user: userReducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useStoreDispatch = () => useDispatch<AppDispatch>();

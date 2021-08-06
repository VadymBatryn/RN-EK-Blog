import {configureStore} from '@reduxjs/toolkit';
import PostsReducer from './slice/postsSlice';

export const store = configureStore({
  reducer: {
    blog: PostsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";
import { basApi } from "./api/api";
export const store = configureStore({
  reducer: {
    [basApi.reducerPath]: basApi.reducer,
    todos: todoReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(basApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

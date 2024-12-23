import { configureStore } from "@reduxjs/toolkit";
import authApi from "./api/authApi";
import userSlice from "./slices/userSlice";
import postApi from "./api/postApi";
import postSlice from "./slices/postSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    user: userSlice.reducer,
    posts: postSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(postApi.middleware),

  devTools: process.env.NODE_ENV !== "production",
});

// Infer the type of store
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

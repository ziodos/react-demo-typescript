import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
/* eslint-disable import/prefer-default-export */
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

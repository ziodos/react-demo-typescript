import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
/* eslint-disable import/prefer-default-export */
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: () => ({}),
});

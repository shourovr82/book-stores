import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://book-store-backend-shourovr82.vercel.app/api/v1",
    baseUrl: "http://localhost:7000/api/v1",
  }),
  tagTypes: [
    "reviews",
    "books",
    "reviews",
    "myBooks",
    "singleBook",
    "wishlist",
    "readinglist",
  ],
  endpoints: () => ({}),
});

/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({ query: () => "/books" }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    postReviews: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    getReviews: builder.query({
      query: (id) => `/reviews/${id}`,
      providesTags: ["reviews"],
    }),
  }),
});

export const { useGetBooksQuery, useSingleBookQuery } = bookApi;

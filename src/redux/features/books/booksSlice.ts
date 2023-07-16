/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { api } from "../../api/apiSlice";
const token = localStorage.getItem("auth") as string;
const parseToken = JSON.parse(token);

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({ query: () => "/books", providesTags: ["books"] }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    addNewBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    getMyBook: builder.query({
      query: () => ({
        url: "/books/my-books",
        headers: {
          authorization: parseToken?.accessToken,
        },
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useAddNewBookMutation,
  useGetMyBookQuery,
} = bookApi;

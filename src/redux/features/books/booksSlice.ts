/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { api } from "../../api/apiSlice";
const token = localStorage.getItem("auth") as string;
const parseToken = JSON.parse(token);

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ filterName, filterValue }) =>
        `/books?${filterName}=${filterValue}`,
      providesTags: ["books"],
    }),

    singleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["singleBook"],
    }),
    addNewBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books", "myBooks"],
    }),
    editBook: builder.mutation({
      query: ({ id, book }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: book,
      }),
      invalidatesTags: ["books", "myBooks", "singleBook"],
    }),
    deleteBook: builder.mutation({
      query: ({ bookId }) => ({
        url: `/books/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books", "myBooks"],
    }),
    getMyBook: builder.query({
      query: () => ({
        url: "/books/my-books",
        headers: {
          authorization: parseToken?.accessToken,
        },
      }),
      providesTags: ["myBooks"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useAddNewBookMutation,
  useGetMyBookQuery,
  useEditBookMutation,
  useDeleteBookMutation,
} = bookApi;

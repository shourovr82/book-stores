import { api } from "../../api/apiSlice";

const reviewApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    addNewReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    getReviews: builder.query({
      query: (bookId) => `/reviews/${bookId}`,
      providesTags: ["reviews"],
    }),
  }),
});

export const { useAddNewReviewMutation, useGetReviewsQuery } = reviewApiSlice;

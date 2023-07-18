/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { api } from "../../api/apiSlice";

const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToMyWishlist: builder.mutation({
      query: (data) => ({
        url: "/wishlist",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wishlist"],
    }),
    getMyWishlists: builder.query({
      query: ({ id }) => ({
        url: `/wishlist/${id}`,
      }),
      providesTags: ["wishlist"],
    }),
  }),
});

export const { useAddToMyWishlistMutation, useGetMyWishlistsQuery } =
  wishlistApi;

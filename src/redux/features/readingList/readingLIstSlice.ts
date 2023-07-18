import { api } from "../../api/apiSlice";

const readingListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToMyReadingList: builder.mutation({
      query: (data) => ({
        url: "/readinglist",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["readinglist"],
    }),
    updateMyReadingList: builder.mutation({
      query: (data) => ({
        url: "/readinglist",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["readinglist"],
    }),
    getMyReadingLists: builder.query({
      query: ({ id }) => ({
        url: `/readinglist/${id}`,
      }),
      providesTags: ["readinglist"],
    }),
  }),
});

export const {
  useAddToMyReadingListMutation,
  useGetMyReadingListsQuery,
  useUpdateMyReadingListMutation,
} = readingListApi;

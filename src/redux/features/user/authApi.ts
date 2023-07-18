import { api } from "../../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => ({
        url: "/users/registration",
        method: "POST",
        body: data,
      }),
    }),
    // login
    login: builder.mutation({
      query: (data) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data?.data?.accessToken,
              user: result?.data?.data?.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.data.accessToken,
              user: result.data.data.user,
            })
          );
        } catch (err) {
          //
          console.log(err);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation } = authApi;

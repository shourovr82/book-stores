import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  email: string;
  _id: string;
  fullName: string;
}

interface IState {
  accessToken: string | undefined;
  user: IUser | null;
}

const initialState: IState = {
  accessToken: undefined,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.user = null;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;

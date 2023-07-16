import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import authSliceReducer from "./features/user/authSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

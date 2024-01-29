import { configureStore, createStore } from "@reduxjs/toolkit";
import authSlice from "./redux/auth.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null, // access
  refreshToken: null, // refresh
};

export const authSlice = createSlice({
  name: "auth-state",
  initialState,
  reducers: {
    login: (state, action) => {
      state.authState = action.payload;
    },
    logout: (state) => {
      state.authState = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

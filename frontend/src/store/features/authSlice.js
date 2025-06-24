import { createSlice } from "@reduxjs/toolkit";

// Load auth state from localStorage if available
const savedAuth = localStorage.getItem("auth");
const parsedAuth = savedAuth ? JSON.parse(savedAuth) : null;

const initialState = {
  isAuthenticated: parsedAuth?.isAuthenticated || false,
  user: parsedAuth?.user || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem(
        "auth",
        JSON.stringify({ isAuthenticated: true, user: action.payload })
      );
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("auth");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

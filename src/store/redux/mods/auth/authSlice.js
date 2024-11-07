import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  isLoggingIn:false,
  token: null,
  email: null,
  isLoading: false,
  error: null,
  authLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    loginRequest: (state) => {
      state.isLoading = true;
      state.isLoggingIn = true;
      state.error = null;

    },
    loginSuccess: (state,action) => {
      state.isLoading = false;
      state.isLoggedin = true;
      state.isLoggingIn = false;
      state.token = action.payload.token;
      state.email = action.payload.username;
    },
    loginFailure: (state,action) => {
      state.isLoading = false;
      state.isLoggedin = false;
      state.isLoggingIn = false;
      state.error = action.payload.error
    },
    clearAuth: (state) => {
      state.token = null;
      state.email = null;
      state.isLoggedin = false;
      state.isLoading = false;
      state.error = null;
      state.isLoggingIn = false;
    },
    authLoading: (state, action) => {
      state.authLoading = action.payload;
    },

  },
});

export const { setToken, setEmail: setUsername, clearAuth,loginRequest,loginSuccess,loginFailure } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  isLoggingIn:false,
  token: null,
  email: null,
  username:null,
  idUser:null,
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
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setIdUser: (state, action) => {
      state.idUser = action.payload;
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
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.idUser = action.payload.idUser;
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
      state.username = null;
      state.idUser = null;
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

export const { setToken,setIdUser, setEmail,setUsername, clearAuth,loginRequest,loginSuccess,loginFailure } = authSlice.actions;
export default authSlice.reducer;

import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './mods/auth/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;

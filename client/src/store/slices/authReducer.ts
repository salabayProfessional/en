import {createSlice} from '@reduxjs/toolkit';
import { AuthReducer } from './types';

const initialState: AuthReducer = {
  authentication: true,
  role: "admin",
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
      log_out: (state) => {
        state.authentication = false
      },
      sign_in: (state) => {
        state.authentication = true
      }
    },
    extraReducers: (state: any) => state
});

export const { log_out, sign_in } = auth.actions;

export default auth.reducer;
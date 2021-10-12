import {createSlice} from '@reduxjs/toolkit';
import { ResultReducer } from './types';

const initialState: ResultReducer = {
  results: [],
};

const result = createSlice({
    name: "result",
    initialState,
    reducers: {
      push_audited_test: (state, action) => {
        state.results = [...state.results, action.payload];
      },
    },
    extraReducers: (state: any) => state
});
export const { push_audited_test } = result.actions;

export default result.reducer;
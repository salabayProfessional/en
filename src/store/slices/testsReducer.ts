import {createSlice} from '@reduxjs/toolkit';

export interface Tests {
  start: boolean,
  test: {
    name: string,
    words: { en: string, ua: string }[],
    type: string,
    from: string,
  } | null,
  infoTest: null | string,
  allTests: any,
};

const initialState: Tests = {
  start: false,
  test: null,
  infoTest: "",
  allTests: [], 
};

const tests = createSlice({
    name: "tests",
    initialState,
    reducers: {
      set_start_test: (state, action) => {
        state.start = action.payload;
      },
      set_test: (state, action) => {
        state.test = action.payload;
      },
      set_info_id: (state, {payload}) => {
        state.infoTest = payload;
      },
      create_test: (state, {payload}) => {
        console.log("YES")
        state.allTests = [...state.allTests, payload];
      },
    },
    extraReducers: (state: any) => state
});
export const { set_start_test, set_test, set_info_id, create_test } = tests.actions;

export default tests.reducer;
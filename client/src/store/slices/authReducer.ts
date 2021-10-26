import {createSlice} from '@reduxjs/toolkit';
import { AuthReducer } from './types';

const initialState: AuthReducer = {
  authentication: true,
  role: "admin",
  name: "oleg",
  surname: "salabay",
  email: "olegsalabaymac@gmail.com",
  photo: "",
  describe: "",
  password: "1234",
  dictionary: [
    {
      part: "one", 
      words: [],
    }
  ],
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
      },
      add_part_own_dictionary: (state, {payload}) => {
        state.dictionary = [...state.dictionary, payload];
      },
      add_word_own_dictionary: (state, {payload}) => {
        const foundedPart = state.dictionary.length
        state.dictionary[foundedPart - 1].words = [...state.dictionary[foundedPart - 1].words, ...payload.word];
      },
    },
});

export const { log_out, sign_in, add_word_own_dictionary, add_part_own_dictionary } = auth.actions;

export default auth.reducer;
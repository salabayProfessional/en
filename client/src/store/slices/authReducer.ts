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
    {ua: "інтроверт", en: "introvert"},
    {ua: "навпроти", en: "accross"},
    {ua: "перше що спало на думку", en: "first crossed my mind"},
    {ua: "негайно", en: "right away"},
    {ua: "", en: "assign"},
    {ua: "", en: "available"},
    {ua: "", en: "You should inform"},
    {ua: "", en: "From time to time"},
    {ua: "", en: "I turned on the dota"},
    {ua: "", en: "urgent"},
    {ua: "", en: "Cool-headed"},
    {ua: "", en: "The fact is that"},
    {ua: "", en: "Evidence"},
    {ua: "інтроверт", en: "introvert"},
    {ua: "навпроти", en: "accross"},
    {ua: "перше що спало на думку", en: "first crossed my mind"},
    {ua: "негайно", en: "right away"},
    {ua: "", en: "assign"},
    {ua: "", en: "available"},
    {ua: "", en: "You should inform"},
    {ua: "", en: "From time to time"},
    {ua: "", en: "I turned on the dota"},
    {ua: "", en: "urgent"},
    {ua: "", en: "Cool-headed"},
    {ua: "", en: "The fact is that"},
    {ua: "", en: "Evidence"},
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
      add_word_own_dictionary: (state, {payload}) => {
        state.dictionary = [...state.dictionary, ...payload];
      }
    },
    extraReducers: (state: any) => state
});

export const { log_out, sign_in } = auth.actions;

export default auth.reducer;
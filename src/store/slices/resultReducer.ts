import {createSlice} from '@reduxjs/toolkit';

export interface Result {
  results: {
    name: string
    answers: string[],
    result: string[],
    words: {en: string, ua: string}[],
    type: string,
    options: {
      timer: number,
      words: number,
      type: string,
      random: boolean,
    },
    random: number[],
  }[]
};

const initialState: Result = {
  results: [
    {
      name: "random",
      answers: ["", "", "", "", "", "", "", "", "", "",],
      result: [],     
      words: [
        {en: "Eventually", ua: "Зрештою"},
        {en: "Base", ua: "База"},
        {en: "decition", ua: "вирішення"},
        {en: "om time", ua: "часно"},
        {en: "Arrange", ua: "Влаштовувати"},
        {en: "Restock", ua: "Поповнити_запас"},
        {en: "Holds", ua: "Тримає"},
        {en: "Woolly", ua: "Шерстистий"},
        {en: "Injection", ua: "Ін'єкція"},
        {en: "Produce", ua: "Виробляти"},
      ],
      type: "en-ua",
      options: {
        timer: 60,
        words: 10,
        type: "en-ua",
        random: true,
      },
      random: [1,2,3,4,5,6,7,8,9,0],
    }
  ]
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
import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
    dictionaryParts: [],
}

const dictionary = createSlice({
    name: "dictionary",
    initialState,
    reducers: {
        add_dictionary_part: (state, action) => {
            state.dictionaryParts.push(action.payload);
        },
        delete_dictionary_part: (state, action) => {
            const start = state.dictionaryParts.slice(0, action.payload.id);
            const end = state.dictionaryParts.slice(action.payload.id + 1);
            state.dictionaryParts = [...start, ...end];
        },
    },
    extraReducers: (state: any) => state
});
//export const { } = dictionary.actions;

export default dictionary.reducer;
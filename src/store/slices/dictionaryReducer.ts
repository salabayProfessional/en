import {createSlice} from '@reduxjs/toolkit';

export interface Dictionary {

};

const initialState: Dictionary = {

}

const dictionary = createSlice({
    name: "dictionary",
    initialState,
    reducers: {

    },
    extraReducers: (state: any) => state
});
//export const { } = dictionary.actions;

export default dictionary.reducer;
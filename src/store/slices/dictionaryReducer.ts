import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {

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
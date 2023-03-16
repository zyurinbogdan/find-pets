import { createSlice } from '@reduxjs/toolkit';


const startState = {
    search: '',
};

export const searchSlice = createSlice({
    name: 'search',
    initialState: startState,
    reducers: {
        changeSearch: (state, {payload}) => {
         state.search = payload;
       }
    }
});


export const searchReducer = searchSlice.reducer;

export const {changeSearch} = searchSlice.actions;

export const selectSearch = ({search}) => search;
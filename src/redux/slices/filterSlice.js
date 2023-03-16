import { createSlice } from '@reduxjs/toolkit';


const startState = {
    filter: '',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: startState,
    reducers: {
        changeFilter: (state, {payload}) => {
         state.filter = payload;
       }
    }
});


export const filterReducer = filterSlice.reducer;

export const {changeFilter} = filterSlice.actions;

export const selectFilter = ({filter}) => filter;
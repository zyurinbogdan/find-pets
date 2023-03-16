import { createSlice } from '@reduxjs/toolkit';


const startState = {
    coordinates: [],
};

export const coordinatesSlice = createSlice({
    name: 'coordinates',
    initialState: startState,
    reducers: {
        changeCoordinates: (state, {payload}) => {
         state.coordinates = payload;
       }
    }
});


export const coordinatesReducer = coordinatesSlice.reducer;

export const {changeCoordinates} = coordinatesSlice.actions;

export const selectCoordinates = ({coordinates}) => coordinates;

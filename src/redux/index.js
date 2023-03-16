import { configureStore } from "@reduxjs/toolkit";
import { coordinatesReducer } from "./slices/coordinatesSlice";
import { filterReducer } from "./slices/filterSlice";
import { searchReducer } from "./slices/searchSlice";

export const store = configureStore({
    reducer: {
        coordinates: coordinatesReducer,
        filter: filterReducer,
        search: searchReducer,
    }
});
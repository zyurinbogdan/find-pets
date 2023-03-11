import { configureStore } from "@reduxjs/toolkit";
import { coordinatesReducer } from "./slices/coordinates";

export const store = configureStore({
    reducer: {
        coordinates: coordinatesReducer,
    }
});
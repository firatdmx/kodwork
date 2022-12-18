import { configureStore } from "@reduxjs/toolkit";
import favsSlice from './favsSlicer'

export const store = configureStore({
    reducer: {
        jobs : favsSlice
    }
})
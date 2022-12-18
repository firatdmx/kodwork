import { createSlice } from "@reduxjs/toolkit";
import { Alert } from 'react-native';

export const favsSlicer = createSlice({
    name: 'jobs',
    initialState: {
        favoritedJobs: []
    },
    reducers:{
        addToFavs: (state, action) => {
            let favList = [];
            const item = action.payload;
            favList = [...state.favoritedJobs, item];
            //Alert.alert("Favorites","Added to Favorites♥")
            return { ...state, favoritedJobs: favList }
            
        },
        removeFromFavs: (state, action) => {
            const id = action.payload;
            const newFavs = state.favoritedJobs.filter(item => item.id !== id)
            return { ...state, favoritedJobs: newFavs }
            
        },

        clearAll: (state, action) => {
            return { ...state, favoritedJobs: [] }
        }
    }

})

export const {addToFavs, clearAll,removeFromFavs} = favsSlicer.actions;
export default favsSlicer.reducer;
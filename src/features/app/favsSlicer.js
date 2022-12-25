import { createSlice } from "@reduxjs/toolkit";
import { ToastAndroid } from "react-native";

export const favsSlicer = createSlice({
    name: 'jobs',
    initialState: {
        favoritedJobs: [],
        signedUP :[],

    },
    reducers:{
        addToFavs: (state, action) => {
            const item = action.payload;
            let favList = [];
            favList = [...state.favoritedJobs, item];
            ToastAndroid.show("Job has been successfully added to the favourites!", ToastAndroid.SHORT)
            return {...state, favoritedJobs: favList}    
        },
        removeFromFavs: (state, action) => {
            const id = action.payload;
            const newFavs = state.favoritedJobs.filter(item => item.id !== id)
            return { ...state, favoritedJobs: newFavs }
        },

        clearAll: (state, action) => {
            return { ...state, favoritedJobs: [] }
        },
        signUP: (state, action) => {
            const item = action.payload;
            let signList = [];
            signList = [...state.signedUP, item];
            ToastAndroid.show("Signed up successfully!", ToastAndroid.SHORT)
            return {...state, signedUP: signList}    
        },

    }

})

export const {addToFavs, clearAll,removeFromFavs, signUP} = favsSlicer.actions;
export default favsSlicer.reducer;
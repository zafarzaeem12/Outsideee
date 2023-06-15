import { createSlice } from '@reduxjs/toolkit'


export const RatingReducer = createSlice({
    name:'Rating',
    initialState: [],
    reducers:{
        // AddMovies:(state,actions)  => {
        //     state.push( actions.payload)
        // },
        // DeleteMovie:(state,actions) => {
        //     const index = state.indexOf(actions.payload);
        //     state.splice(index, 1);
        // }
    }
})

export const { AddMovies ,DeleteMovie } = RatingReducer.actions;

export default RatingReducer.reducer
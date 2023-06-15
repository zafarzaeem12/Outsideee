import { createSlice } from '@reduxjs/toolkit'


export const HomeReducer = createSlice({
    name:'Home',
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

export const { AddMovies ,DeleteMovie } = HomeReducer.actions;

export default HomeReducer.reducer
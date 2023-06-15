import { createSlice } from '@reduxjs/toolkit'


export const UserReducer = createSlice({
    name:'User',
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

export const { AddMovies ,DeleteMovie } = UserReducer.actions;

export default UserReducer.reducer
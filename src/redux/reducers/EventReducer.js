import { createSlice } from '@reduxjs/toolkit'


export const EventReducer = createSlice({
    name:'Event',
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

export const { AddMovies ,DeleteMovie } = EventReducer.actions;

export default EventReducer.reducer
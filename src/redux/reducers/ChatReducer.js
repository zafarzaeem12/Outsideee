import { createSlice } from '@reduxjs/toolkit'


export const ChatReducer = createSlice({
    name:'Chat',
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

export const { AddMovies ,DeleteMovie } = ChatReducer.actions;

export default ChatReducer.reducer
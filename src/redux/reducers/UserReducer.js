import { createSlice } from '@reduxjs/toolkit'
import { Add_New_User } from '../thunk/UserReducers'

const UserSlice = createSlice({
    name:'User',
    initialState: {
        isLoading: false,
        data : [],
        error : null
    },
    extraReducers(builder){
        builder.addCase(Add_New_User.pending , (state,action) => {
            state.isLoading = true;
         })
        builder.addCase(Add_New_User.fulfilled , (state,action) => {
            state.isLoading = false;
            console.log( 'object' , state.data.push(action.payload))
            state.data.push(action.payload)
         })
        builder.addCase(Add_New_User.rejected , (state,action) => {
            state.isLoading = false,
            state.error = action.error
         })
    }
})


export const UserReducers =  UserSlice.reducer;
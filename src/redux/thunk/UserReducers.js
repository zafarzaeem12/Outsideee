import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post_Function } from '../../Functions/Post_Function'
import { api } from '../../Apis'
import axios from 'axios';


const Add_New_User = createAsyncThunk('user/createUser', async (data) => {
    const link = api?.Register
    const response = await Post_Function(link , data);
    console.log('response',response)
    return response;
})

export {
    Add_New_User
}
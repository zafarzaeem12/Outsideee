import axios from 'axios';

export const Post_Function = async (url, payload) => {
   try {
    const config = {
        method: 'post',
        url: url,
        headers: {
            'Content-Type': 'application/json'
        },
        data: payload


    }
    const newUser = await axios(config)
    return JSON.stringify(newUser.data)
   } catch (err) {
       console.log(err);
   }
}

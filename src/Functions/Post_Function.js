import axios from 'axios';

export const Post_Function = (url, payload) => {
    const url = `${url}`;
    const payload = payload;
    const config = {
        header: {
            'Content-Type': 'multipart/form-data'
        }
    }
    const data = axios.post(url, payload, config);
    const response = data?.data;
    return response;
}
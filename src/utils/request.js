import axios from 'axios';

const request = axios.create({
    baseURL: 'https://manga-api-4cze.onrender.com',
});

export const getManga = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;

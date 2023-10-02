import axios from 'axios';

export const copyId = async (url: string, id: string | number) => {
    try {
        const response = await axios.get(`${url}/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error: ' + error);
    }
};

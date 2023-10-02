import axios from 'axios';

export const deleteItem = (url: string, id: string | number) => {
    axios.delete(`${url}/${id}`);
};

import axios from 'axios';

export const updateEnableValue = async (url:string, id:string | number) => {
    axios.put(`${url}/${id}`, {
        enable: true
    });
}

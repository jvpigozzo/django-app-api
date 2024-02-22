import axios from 'axios';
const URL = import.meta.env.VITE_API_URL;
const Token = import.meta.env.VITE_REACT_APP_TOKEN;

const postData = async (endpoint, payload) => {
    console.log(payload)
    try {
        const response = await axios.post(`${URL}/${endpoint}`, payload, {
            headers: {
                Authorization: `Token ${Token}`,
            },
        });
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default postData;

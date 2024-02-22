import axios from 'axios';
const URL = import.meta.env.VITE_API_URL;
const Token = import.meta.env.VITE_REACT_APP_TOKEN;

const fetchData = async (endpoint) => {  
  try {
    const response = await axios.get(`${URL}${endpoint}`, {
      headers: {
        Authorization: `Token ${Token}`,
      },
    });
    const data = await response.data;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default fetchData;

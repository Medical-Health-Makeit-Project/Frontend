import axios from 'axios';

export const registerService = async (URL, user) => {
  try {
    const { data } = await axios.post(URL, user);
    return data;
  } catch (error) {
    throw error;
  }
};

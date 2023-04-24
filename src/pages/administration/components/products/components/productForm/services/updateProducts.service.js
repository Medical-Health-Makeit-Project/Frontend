import axios from 'axios';

export const updateProducts = async (URL, product, token) => {
  try {
    const { data } = await axios.put(URL, product, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

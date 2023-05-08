import axios from 'axios';

export const updateProducts = async (URL, product, token) => {
  try {
    const { data, status } = await axios.put(URL, product, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    return { data, status };
  } catch (error) {
    throw error;
  }
};

import axios from 'axios';

export const postProducts = async (URL, product, token) => {
  try {
    const response = await axios.post(URL, product, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

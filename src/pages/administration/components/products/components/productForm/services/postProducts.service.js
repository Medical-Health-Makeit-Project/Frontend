import axios from 'axios';

export const postProducts = async (URL, product, token) => {
  try {
    const { status, data } = await axios.post(URL, product, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    return { status, data };
  } catch (error) {
    throw error;
  }
};

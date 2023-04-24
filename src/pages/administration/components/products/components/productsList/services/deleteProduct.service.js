import axios from 'axios';

export const deleteProduct = async (URL, payload, ACCESS_TOKEN) => {
  try {
    const { data } = await axios.delete(URL, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      data: payload,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

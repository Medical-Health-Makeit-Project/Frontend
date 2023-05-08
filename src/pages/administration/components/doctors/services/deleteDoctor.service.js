import axios from 'axios';

export const deleteDoctor = async (URL, payload, token) => {
  try {
    const { data } = await axios.delete(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: payload,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

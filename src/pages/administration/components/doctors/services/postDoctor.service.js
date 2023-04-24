import axios from 'axios';

export const postDoctor = async (URL, doctor, token) => {
  try {
    const { data } = await axios.post(URL, doctor, {
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

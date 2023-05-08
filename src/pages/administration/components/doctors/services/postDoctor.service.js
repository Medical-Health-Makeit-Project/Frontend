import axios from 'axios';

export const postDoctor = async (URL, doctor, token) => {
  try {
    const { data, status } = await axios.post(URL, doctor, {
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

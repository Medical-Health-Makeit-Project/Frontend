import axios from 'axios';

export const updateDoctor = async (URL, doctor, token) => {
  try {
    const { data } = await axios.put(URL, doctor, {
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

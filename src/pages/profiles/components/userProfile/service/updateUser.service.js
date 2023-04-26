import axios from 'axios';

export const updateUser = async (URL, userFields, ACCESS_TOKEN) => {
  try {
    const { data } = await axios.put(URL, userFields, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

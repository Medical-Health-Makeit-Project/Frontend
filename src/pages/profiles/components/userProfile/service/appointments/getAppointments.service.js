import axios from 'axios';

export const getAppointments = async (URL, ACCESS_TOKEN) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

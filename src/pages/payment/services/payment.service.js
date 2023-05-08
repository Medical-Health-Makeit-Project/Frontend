import axios from 'axios';

export const paymentService = async (URL, ACCESS_TOKEN, payload) => {
  try {
    const { data, status } = await axios.post(URL, payload, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return {
      data,
      status,
    };
  } catch (error) {
    throw error;
  }
};

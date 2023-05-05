import axios from 'axios';
import { getAppointmentsAdapter } from '../../adapters';

export const getAppointments = async (URL, ACCESS_TOKEN) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return getAppointmentsAdapter(data);
  } catch (error) {
    throw error;
  }
};

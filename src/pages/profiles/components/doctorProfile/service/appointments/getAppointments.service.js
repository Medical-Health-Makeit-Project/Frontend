import axios from 'axios';
import { getAppointmentsDoctorAdapter } from '../../adapter';

export const getAppointmentsDoctor = async (URL, ACCESS_TOKEN) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return getAppointmentsDoctorAdapter(data);
  } catch (error) {
    throw error;
  }
};

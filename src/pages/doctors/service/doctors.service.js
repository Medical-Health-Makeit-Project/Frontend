import axios from 'axios';
import { doctorAdapter } from '../adapters';

export const doctorsService = async () => {
  try {
    const response = await axios.get('/src/pages/doctors/doctors.json');
    const data = doctorAdapter(response.data);
    return data;
  } catch (error) {
    return error;
  }
};

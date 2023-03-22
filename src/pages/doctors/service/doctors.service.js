import axios from 'axios';
import { doctorAdapter } from '../adapters';
import { ALL_DOCTORS } from '@constants';

export const doctorsService = async () => {
  try {
    const response = await axios.get(ALL_DOCTORS);
    const data = doctorAdapter(response.data);
    return data;
  } catch (error) {
    return error;
  }
};

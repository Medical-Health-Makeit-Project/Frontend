import axios from 'axios';
import { doctorsByAreaAdapter } from '../adapters/doctorsByArea.adapters';

export const doctorsByAreaService = async (URL) => {
  const { data } = await axios.get(URL);
  return doctorsByAreaAdapter(data);
};

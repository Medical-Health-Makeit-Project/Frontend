import axios from 'axios';
import { doctorsByAreaAdapter } from '../adapters/doctorsByArea.adapters';

export const doctorsByAreaService = async (URL) => {
  const { data } = await axios.get(URL);
  //if (data instanceof Error) throw data;
  return doctorsByAreaAdapter(data);
};

import axios from 'axios';
import { doctorsByAreaAdapter } from '../adapters/doctorsByArea.adapters';

export const getDoctorsByArea = async (URL) => {
  const response = await axios.get(URL);
  if (response instanceof Error) throw response;
  return doctorsByAreaAdapter(response.data);
};

import axios from 'axios';
import { doctorAreasAdapter } from '../../adapters/doctorAreas';

export const doctorAreas = async (URL) => {
  try {
    const response = await axios.get(URL);
    return doctorAreasAdapter(response.data);
  } catch (error) {
    return error;
  }
};

import axios from 'axios';
import { doctorAreasAdapter } from '../../adapters/doctorAreas';

export const doctorAreas = async (URL) => {
  try {
    const response = await axios.get(URL);
    const data = doctorAreasAdapter(response.data);
    return data;
  } catch (error) {
    return error;
  }
};

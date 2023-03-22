import axios from 'axios';
import { locationsAdapter } from './locations.adapter';

export const locationService = async (URL) => {
  const response = await axios.get(URL);
  if (response instanceof Error) throw response;
  return locationsAdapter(response.data);
};

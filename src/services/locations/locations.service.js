import axios from 'axios';
import useSWR from 'swr';
import { locationsAdapter } from './locations.adapter';
import { LOCATIONS } from '@constants';

const locationService = async (URL) => {
  const { data } = await axios.get(URL);
  return locationsAdapter(data);
};

export const locationsSWR = () => {
  const swrConfig = {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  };

  const { data: locations, error: locationsError } = useSWR(LOCATIONS, locationService, swrConfig);

  return { locations, locationsError };
};

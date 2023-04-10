import axios from 'axios';
import useSWR from 'swr';
import { locationsAdapter } from './locations.adapter';
import { LOCATIONS } from '@constants';

const locationService = async (URL) => {
  const response = await axios.get(URL);
  if (response instanceof Error) throw response;
  return locationsAdapter(response.data);
};

export const locationsSWR = () => {
  const swrConfig = {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  };

  const { data: locations, error: locationsError } = useSWR(LOCATIONS, locationService, swrConfig);

  return { locations, locationsError };
};

import axios from 'axios';
import useSWR from 'swr';
import { doctorAdapter } from './allDoctors.adapter';
import { ALL_DOCTORS } from '@constants';

export const allDoctorsService = async (URL) => {
  try {
    const response = await axios.get(URL);
    const data = doctorAdapter(response.data);
    return data;
  } catch (error) {
    return error;
  }
};

export const allDoctorsSWR = () => {
  const swrConfig = {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  };

  const {
    data: allDoctors,
    error: allDoctorsError,
    isLoading: allDoctorsIsLoading,
  } = useSWR(ALL_DOCTORS, allDoctorsService, swrConfig);

  return { allDoctors, allDoctorsError, allDoctorsIsLoading };
};

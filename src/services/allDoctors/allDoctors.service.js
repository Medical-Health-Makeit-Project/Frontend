import axios from 'axios';
import useSWR from 'swr';
import { doctorAdapter } from './allDoctors.adapter';
import { ALL_DOCTORS } from '@constants';

export const allDoctorsService = async (URL) => {
  try {
    const { data } = await axios.get(URL);
    return doctorAdapter(data);
  } catch (error) {
    throw error;
  }
};

export const allDoctorsSWR = () => {
  const swrConfig = {
    revalidateOnFocus: false,
    revalidateIfStale: true,
  };

  const {
    data: allDoctors,
    error: allDoctorsError,
    isLoading: allDoctorsIsLoading,
  } = useSWR(ALL_DOCTORS, allDoctorsService, swrConfig);

  return { allDoctors, allDoctorsError, allDoctorsIsLoading };
};

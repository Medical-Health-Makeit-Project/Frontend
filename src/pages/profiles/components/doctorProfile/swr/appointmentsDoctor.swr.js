import useSWR from 'swr';
import { getAppointmentsDoctor } from '../service/appointments';

export const appointmentsDoctorSwr = (URL, ACCESS_TOKEN) => {
  const { data, error, isLoading } = useSWR(
    [URL, ACCESS_TOKEN],
    ([URL, ACCESS_TOKEN]) => getAppointmentsDoctor(URL, ACCESS_TOKEN),
    { revalidateIfStale: false, revalidateOnFocus: false }
  );

  return { data, error, isLoading };
};

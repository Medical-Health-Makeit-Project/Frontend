import useSWR from 'swr';
import { getAppointments } from '../service/appointments';

export const appointmentsSWR = (URL, ACCESS_TOKEN) => {
  const { data, error, isLoading } = useSWR(
    [URL, ACCESS_TOKEN],
    ([URL, ACCESS_TOKEN]) => getAppointments(URL, ACCESS_TOKEN),
    { revalidateIfStale: false, revalidateOnFocus: false }
  );

  return { data, error, isLoading };
};

import './doctorsList.doctors.administration.scss';
import { allDoctorsSWR } from '@services/allDoctors';

export const DoctorsList = () => {
  const { allDoctors, allDoctorsError, allDoctorsIsLoading } = allDoctorsSWR();

  console.log(allDoctors);

  return <div>Hello!</div>;
};

import { createContext, useContext } from 'react';
import { allDoctorsSWR } from '@services/allDoctors';

const DoctorsStore = createContext();

export const DoctorsContext = ({ children }) => {
  const doctorFilter = (id) => {
    return doctors.find((doctor) => doctor.id === id);
  };

  const {
    allDoctors: doctors,
    allDoctorsError: error,
    allDoctorsIsLoading: isLoading,
  } = allDoctorsSWR();

  return (
    <DoctorsStore.Provider value={{ doctors, isLoading, error, doctorFilter }}>
      {children}
    </DoctorsStore.Provider>
  );
};

export const useDoctorsContext = () => {
  const context = useContext(DoctorsStore);
  return context;
};

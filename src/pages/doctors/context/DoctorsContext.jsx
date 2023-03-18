import { createContext, useContext, useState, useEffect } from 'react';
import { doctorsService } from '../service';

const DoctorsStore = createContext();

export const DoctorsContext = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const doctorFilter = (id) => {
    return doctors.filter((doctor) => doctor.id === id);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      try {
        doctorsService()
          .then((res) => setDoctors(res))
          .finally(() => setIsLoading(false));
      } catch (error) {
        setError(error.message);
      }
    }, 5000);
  }, []);

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

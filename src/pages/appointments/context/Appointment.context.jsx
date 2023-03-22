import { createContext, useContext, useState } from 'react';
import { PropTypes } from 'prop-types';
import useSWR from 'swr';
import { doctorsByAreaService } from '../service/appointment.service';
import { locationService } from '@services/locations';
import { DOCTORS_BY_AREA, LOCATIONS } from '@constants';

export const AppointmentStore = createContext();

export const AppointmentContext = ({ children }) => {
  const swrConfig = {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  };

  const [appointmentForm, setAppointmentForm] = useState({
    patientName: '',
    patientLastname: '',
    patientId: '',
    patientEmail: '',
    patientPhone: '',
    isAdult: 'true',
    patientGender: 'No Binary',
    patientBirth: new Date(),
  });

  const [showSecondForm, setShowSecondForm] = useState(false);

  const { data: doctorsByArea, error: isErrorDoctorsByArea } = useSWR(
    DOCTORS_BY_AREA,
    doctorsByAreaService,
    swrConfig
  );
  const { data: locations, error: locationsError } = useSWR(LOCATIONS, locationService, swrConfig);

  return (
    <AppointmentStore.Provider
      value={{
        appointmentForm,
        setAppointmentForm,
        showSecondForm,
        setShowSecondForm,
        doctorsByArea,
        isErrorDoctorsByArea,
        locations,
        locationsError,
      }}
    >
      {children}
    </AppointmentStore.Provider>
  );
};

export const useAppointmentContext = () => {
  const context = useContext(AppointmentStore);
  return context;
};

AppointmentContext.propTypes = {
  children: PropTypes.node.isRequired,
};

import { createContext, useContext, useState } from 'react';
import { PropTypes } from 'prop-types';
import { getDoctorsByArea } from '../service/appointment.service';
import { DOCTORS_BY_AREA } from '@constants';
import useSWR from 'swr';

export const AppointmentStore = createContext();

export const AppointmentContext = ({ children }) => {
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
    getDoctorsByArea
  );

  return (
    <AppointmentStore.Provider
      value={{
        appointmentForm,
        setAppointmentForm,
        showSecondForm,
        setShowSecondForm,
        doctorsByArea,
        isErrorDoctorsByArea,
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

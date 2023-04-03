import { createContext, useContext, useState } from 'react';
import { PropTypes } from 'prop-types';
import useSWR from 'swr';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { postAppointment } from '@redux/features';
import { doctorsByAreaService } from '../service/appointment.service';
import { locationService } from '@services/locations';
import { DOCTORS_BY_AREA, LOCATIONS } from '@constants';

export const AppointmentStore = createContext();

export const AppointmentContext = ({ children }) => {
  const swrConfig = {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  };

  const dispatch = useDispatch();

  const [showSecondForm, setShowSecondForm] = useState(false);

  const [patientForm, setPatientForm] = useState({
    patientName: '',
    patientLastname: '',
    patientId: '',
    patientEmail: '',
    patientPhone: '',
    isAdult: 'true',
    patientGender: 'Female',
    patientBirth: new Date(),
  });

  const [appointmentForm, setAppointmentForm] = useState({
    specialitySelected: '',
    preferredDoctorSelected: '',
    countrySelected: '',
    citySelected: '',
    appointmentDate: new Date(),
    appointmentTime: '',
    consultationReasons: '',
    appointmentPrice: null,
  });

  const { data: doctorsByArea, error: isErrorDoctorsByArea } = useSWR(
    DOCTORS_BY_AREA,
    doctorsByAreaService,
    swrConfig
  );
  const { data: locations, error: locationsError } = useSWR(LOCATIONS, locationService, swrConfig);

  const createAppointment = (price) => {
    const newAppointment = {
      id: uuid(),
      patientData: { ...patientForm, patientBirth: patientForm.patientBirth.toLocaleDateString() },
      appointmentData: {
        ...appointmentForm,
        appointmentDate: appointmentForm.appointmentDate.toLocaleDateString(),
        appointmentPrice: price,
      },
    };
    dispatch(postAppointment(newAppointment));
  };

  return (
    <AppointmentStore.Provider
      value={{
        patientForm,
        setPatientForm,
        appointmentForm,
        setAppointmentForm,
        showSecondForm,
        setShowSecondForm,
        doctorsByArea,
        isErrorDoctorsByArea,
        locations,
        locationsError,
        createAppointment,
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

import { PatientInformation } from '../patientInformation';
import { AppointmentInformation } from '../appointmentInformation';
import { useAppointmentContext } from '../../context';

export const FormContainer = () => {
  const { showSecondForm } = useAppointmentContext();
  return <>{!showSecondForm ? <PatientInformation /> : <AppointmentInformation />}</>;
};

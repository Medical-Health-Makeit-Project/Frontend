import { Heading } from '@components/heading';
import { PatientInformation } from './components/patientInformation';
import appointmentHeading from '@assets/heading-appointment.jpeg';
import 'react-datepicker/dist/react-datepicker.css';
import './appointments.pages.scss';

export const Appointments = () => {
  return (
    <main className="appointments">
      <Heading title="Appointments" image={appointmentHeading} />
      <PatientInformation />
    </main>
  );
};

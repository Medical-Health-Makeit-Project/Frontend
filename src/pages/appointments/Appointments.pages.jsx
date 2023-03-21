import { Heading } from '@components/heading';
import { FormContainer } from './components/formContainer';
import { AppointmentContext } from './context';
import appointmentHeading from '@assets/heading-appointment.jpeg';
import 'react-datepicker/dist/react-datepicker.css';
import './appointments.pages.scss';

export const Appointments = () => {
  return (
    <main className="appointments">
      <AppointmentContext>
        <Heading title="Appointments" image={appointmentHeading} />
        <FormContainer />
      </AppointmentContext>
    </main>
  );
};

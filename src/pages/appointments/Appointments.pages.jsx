import { Heading } from '@components/heading';
import { Loading } from '@components/loading';
import { FormContainer } from './components/formContainer';
import { AppointmentContext } from './context';
import { useIsLoading } from '@hooks';
import appointmentHeading from '@assets/heading-appointment.jpeg';
import 'react-datepicker/dist/react-datepicker.css';
import './appointments.pages.scss';

export const Appointments = () => {
  const [isLoading] = useIsLoading();
  if (isLoading) return <Loading />;
  return (
    <main className="appointments">
      <AppointmentContext>
        <Heading title="Appointments" image={appointmentHeading} />
        <FormContainer />
      </AppointmentContext>
    </main>
  );
};

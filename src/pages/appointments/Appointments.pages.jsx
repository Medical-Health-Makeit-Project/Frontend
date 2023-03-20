import { Heading } from '@components/heading';
import appointmentHeading from '@assets/heading-appointment.jpeg';
import './appointments.pages.scss';

export const Appointments = () => {
  return (
    <main>
      <Heading title="Appointments" image={appointmentHeading} />
    </main>
  );
};

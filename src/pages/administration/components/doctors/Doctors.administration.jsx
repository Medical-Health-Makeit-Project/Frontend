import { Form } from './components/form';
import { DoctorsList } from './components/doctorsList';
import './doctors.administration.scss';

export const Doctors = () => {
  return (
    <main className="doctors-admin__main">
      <Form />
      <DoctorsList />
    </main>
  );
};

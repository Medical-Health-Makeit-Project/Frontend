import { Form } from './components/form';
import { DoctorsList } from './components/doctorsList';
import { DoctorContext } from './context/doctors.context';
import './doctors.administration.scss';

export const Doctors = () => {
  return (
    <DoctorContext>
      <main className="doctors-admin__main">
        <Form />
        <DoctorsList />
      </main>
    </DoctorContext>
  );
};

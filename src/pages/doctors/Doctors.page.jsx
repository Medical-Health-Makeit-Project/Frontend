import { Heading } from '@components/heading';
import { Route, Routes } from 'react-router-dom';
import { DoctorDetail } from './components/doctorDetail/DoctorDetail.doctors';
import { DoctorsList } from './components/doctorList/DoctorsList.doctors';
import { DoctorsContext } from './context/DoctorsContext';
import { PublicRoutes } from '@routes';
import headingImage from '@assets/doctorsheading.jpg';
import './doctors.page.scss';

export const Doctors = () => {
  return (
    <DoctorsContext>
      <section className="main__doctors-container">
        <Heading title="Our Doctors" image={headingImage} />
        <Routes>
          <Route index element={<DoctorsList />} />
          <Route path={PublicRoutes.DOCTOR_DETAIL} element={<DoctorDetail />} />
        </Routes>
      </section>
    </DoctorsContext>
  );
};

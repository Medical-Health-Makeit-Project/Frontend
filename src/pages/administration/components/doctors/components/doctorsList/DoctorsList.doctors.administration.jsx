import { memo } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import { Button } from '@components/buttons';
import { Loading } from '@components/loading';
import { Error } from '@components/error';
import { useDoctorContext } from '../../context/doctors.context';
import { allDoctorsSWR } from '@services/allDoctors';
import { errorMessage } from '@utils/toastify/error.toastify';
import './doctorsList.doctors.administration.scss';

export const DoctorsList = memo(() => {
  const { allDoctors, allDoctorsError, allDoctorsIsLoading } = allDoctorsSWR();

  const { setDoctorToBeUpdated } = useDoctorContext();

  const handleSetFormToUpdate = (doctor) => {
    setDoctorToBeUpdated({
      firstname: doctor.firstname,
      lastname: doctor.lastname,
      email: doctor.email,
      birthdate: doctor.birthdate,
      area: doctor.area,
      avatar: doctor.avatar,
      phone: doctor.phone,
      location: { city: doctor.headquarter.city, country: doctor.headquarter.country },
      gender: doctor.gender,
      qualifications: [...doctor.qualifications],
      memberships: [...doctor.memberships],
      skills: [...doctor.skills],
    });
  };

  const handleDelete = async (e, doctor) => {
    try {
      e.preventDefault();
      const errorMessage = 'Something went wrong! please try again or call your nearest dev!';
      const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN');
      const { email } = doctor;
      const { status } = await axios.delete('URL', {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        data: email,
      });
      if (status > 399) return errorMessage(errorMessage);
    } catch (error) {
      return errorMessage(error.message);
    }
  };

  if (allDoctorsError) return <Error />;

  if (allDoctorsIsLoading) return <Loading />;

  return (
    <section className="doctor-list">
      {allDoctors?.map((doctor) => {
        return (
          <article key={uuid()} className="doctor-list__item">
            <div className="doctor-list__avatar-container">
              <img src={doctor.avatar} alt="Avatar" className="avatar" />
            </div>
            <section className="doctor-list-info">
              <h3 className="doctor-list-info__fullname">{`${doctor.firstname} ${doctor.lastname}`}</h3>
              <p className="doctor-list-area">{doctor.area}</p>
            </section>
            <section className="buttons-action-container">
              <Button variant="outline" color="danger" onClick={(e) => handleDelete(e, doctor)}>
                Delete
              </Button>
              <Button color="info" onClick={() => handleSetFormToUpdate(doctor)}>
                Update
              </Button>
            </section>
          </article>
        );
      })}
    </section>
  );
});

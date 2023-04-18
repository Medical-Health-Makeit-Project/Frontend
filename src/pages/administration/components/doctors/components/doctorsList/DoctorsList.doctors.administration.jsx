import { allDoctorsSWR } from '@services/allDoctors';
import { Button } from '@components/buttons';
import { useDoctorContext } from '../../context/doctors.context';
import { v4 as uuid } from 'uuid';
import './doctorsList.doctors.administration.scss';

export const DoctorsList = () => {
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
              <Button variant="outline" color="danger">
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
};

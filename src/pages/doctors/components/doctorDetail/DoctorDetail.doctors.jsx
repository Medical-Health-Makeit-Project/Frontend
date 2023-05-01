import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BsCheckLg } from 'react-icons/bs';
import { Spinner } from '@chakra-ui/react';
import { PrivateRoutes } from '@routes/';
import { useDoctorsContext } from '../../context/DoctorsContext';
import { Button } from '@components/buttons/Button.components';
import './doctordetail.doctors.scss';

export const DoctorDetail = () => {
  const { id } = useParams();

  const { doctorFilter, isLoading, error } = useDoctorsContext();
  const [date, setDate] = useState(new Date());

  const doctor = doctorFilter(id);

  if (error) return <p>Error</p>;

  if (isLoading) {
    return (
      <div className="spinner__container">
        <Spinner className="spinner" />
      </div>
    );
  }
  return (
    doctor && (
      <div className="main__detail-container">
        <section className="profile__main">
          <picture className="avatar__container">
            <img src={doctor.avatar} alt="Profile Image" className="avatar__img" />
          </picture>

          <div className="name__container">
            <p>{`${doctor.firstname} ${doctor.lastname}`}</p>
          </div>

          <div className="area__container">
            <p>{doctor.area.area}</p>
          </div>

          <div className="qualifications__container">
            <h3>Qualifications</h3>
            {doctor.qualifications.map((qualification) => {
              return <p key={qualification}>{qualification}</p>;
            })}
          </div>

          <div className="memberships__container">
            <h3>Memberships</h3>
            {doctor.memberships.map((member) => {
              return <p key={member}>{member}</p>;
            })}
          </div>
        </section>

        <section className="details__main-container">
          <article className="bio__container">
            <h3>Introduction</h3>
            <p>{doctor.introduction}</p>
          </article>

          <article className="skills__container">
            <h3>Skills</h3>
            <div className="skill__layout">
              {doctor.skills.map((skill) => {
                return (
                  <div key={skill} className="skill">
                    <BsCheckLg size={12} className="check-icon" />
                    <p key={skill}>{skill}</p>
                  </div>
                );
              })}
            </div>
          </article>

          <section className="appointment__container">
            <h3>Book an appointment</h3>

            <Link to={PrivateRoutes.APPOINTMENTS}>
              <Button variant="solid" color="info" className="appointment__button" type="submit">
                Get appointment
              </Button>
            </Link>
          </section>
        </section>
      </div>
    )
  );
};

import { Link } from 'react-router-dom';
import { useDoctorsContext } from '../context/DoctorsContext';
import { Spinner } from '@chakra-ui/react';

export const DoctorsList = () => {
  const { doctors, error, isLoading } = useDoctorsContext();
  if (error) return <p>Error</p>;

  if (isLoading) {
    return (
      <div className="spinner__container">
        <Spinner className="spinner" />
      </div>
    );
  }
  return (
    doctors?.length && (
      <>
        <div className="doctors__main-text">
          <p>Our doctors</p>
          <h2>Professional staff at our hospital</h2>
        </div>
        <div className="doctors__grid">
          {doctors.map((doctor) => {
            return (
              <div key={doctor.id} className="doctor__card">
                <picture className="doctor__img-container">
                  <img src={doctor.avatar} alt="doctor image profile" className="doctors__image" />
                </picture>
                <div className="doctor__main-description">
                  <Link to={`/home/our-doctors/${doctor.id}`}>
                    <p className="doctor__name">{doctor.name}</p>
                  </Link>
                  <p className="doctor__area">{doctor.area}</p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    )
  );
};

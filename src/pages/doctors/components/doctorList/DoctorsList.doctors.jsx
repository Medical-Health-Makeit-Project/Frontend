import { Link } from 'react-router-dom';
import { useDoctorsContext } from '../../context/DoctorsContext';
import { Spinner } from '@chakra-ui/react';
import './doctorList.components.scss';

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
          {doctors.map(({ id, firstname, lastname, area, avatar }) => {
            return (
              <div key={id} className="doctor__card-list">
                <picture className="doctor__img-container">
                  <img src={avatar} alt="doctor image profile" className="doctors__image" />
                </picture>
                <div className="doctor__main-description">
                  <Link to={`/home/our-doctors/${id}`}>
                    <p className="doctor__name">{`${firstname} ${lastname}`}</p>
                  </Link>
                  <p className="doctor__area">{area.area}</p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    )
  );
};

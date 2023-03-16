import { Heading } from '@components/heading';
import headingImage from '@assets/doctorsheading.jpg';
import { doctorsService } from './service/doctors.service';
import { useState, useEffect } from 'react';

import '@pages/doctors/doctors.page.scss';

export const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    try {
      doctorsService().then((res) => {
        setDoctors(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <section className="main__doctors-container">
      <Heading title="Our Doctors" image={headingImage} />
      <div className="doctors__main-text">
        <p>Our doctors</p>
        <h2>Professional staff at our hospital</h2>
      </div>
      <div className="doctors__grid">
        {doctors.map((doctor) => {
          return (
            <div key={doctor.id} className="doctor__card">
              <picture className="doctor__img-container">
                <img
                  src={doctor.img_profile}
                  alt="doctor image profile"
                  className="doctors__image"
                />
              </picture>
              <div className="doctor__main-description">
                <p className="doctor__name">{doctor.name}</p>
                <p className="doctor__area">{doctor.area}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

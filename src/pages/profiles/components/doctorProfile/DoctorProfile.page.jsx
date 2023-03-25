import { BiMap } from 'react-icons/bi';
import { BsTelephoneOutbound, BsGenderAmbiguous, BsCheckLg } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

import './doctorProfile.page.scss';

export const DoctorProfile = ({
  id,
  name,
  area,
  avatar,
  email,
  phone,
  headquarter,
  gender,
  qualifications,
  skills,
}) => {
  return (
    <>
      <main className="doctor__profile-main">
        <section className="doctor__card">
          <article className="primary__info-container">
            <div className="avatar__main-container ">
              <picture className="profile__img-container">
                <img src={avatar} alt="Profile image" />
              </picture>
            </div>

            <div className="main__doctor-info">
              <p>{name}</p>
              <p className="area">{area}</p>
              <div className="location__info info__containers">
                <BiMap size={18} className="icons" />
                <p>{`${headquarter.city}, ${headquarter.country}`}</p>
              </div>
              <div className="gender__info info__containers">
                <BsGenderAmbiguous size={18} className="icons" />
                <p>{gender}</p>
              </div>
            </div>

            <div className="qualifications__info">
              <h3>Qualifications</h3>
              {qualifications.map((qua) => (
                <div key={qua}>
                  <p>{qua}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="second__info-container">
            <div className="skills__info">
              <h3>Skills</h3>
              {skills.map((skill) => (
                <div key={skill} className="info__containers">
                  <BsCheckLg size={12} className="icons" />
                  <p>{skill}</p>
                </div>
              ))}
            </div>

            <div className="email__info">
              <h3>Email</h3>
              <div className="info__containers">
                <AiOutlineMail size={18} className="icons" />
                <p>{email}</p>
              </div>
            </div>

            <div className="phone__info">
              <h3>Phone</h3>
              <div className="info__containers">
                <BsTelephoneOutbound size={18} className="icons" />
                <p>{phone}</p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

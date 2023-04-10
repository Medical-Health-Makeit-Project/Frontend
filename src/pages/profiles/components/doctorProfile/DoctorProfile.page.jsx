import { useState } from 'react';
import { BiMap, BiEdit } from 'react-icons/bi';
import { BsTelephoneOutbound, BsGenderAmbiguous, BsCheckLg } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { Button } from '@components/buttons';

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
  const editStyleOn = 'editOn';
  const editStyleOff = 'editOff';

  const dataStyleOn = 'dataOn';
  const dataStyleOff = 'dataOff';

  const [editState, setEditState] = useState(editStyleOff);
  const [prevData, setPrevData] = useState(dataStyleOn);
  const [emailStatus, setEmailStauts] = useState(email);
  const [phoneStatus, setPhoneSatus] = useState(phone);

  const handleEditOn = () => {
    setEditState(editStyleOn);
    setPrevData(dataStyleOff);
  };

  const handleEditOff = () => {
    setEditState(editStyleOff);
    setPrevData(dataStyleOn);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmailStauts(newEmail);
  };
  const handlePhoneChange = (event) => {
    const newPhone = event.target.value;
    setPhoneSatus(newPhone);
  };

  return (
    <>
      <main className="doctor__profile-main">
        <section className="doctor__card">
          <article className="primary__info-container">
            <div className="edit__container-doctor">
              <BiEdit size={20} className="icons" onClick={handleEditOn} />
            </div>
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
              <div className={editState}>
                <input
                  type="text"
                  className="edit__input"
                  placeholder={emailStatus}
                  required
                  onChange={handleEmailChange}
                  pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
                />
              </div>
              <div className={`info__containers ${prevData}`}>
                <AiOutlineMail size={18} className="icons" />
                <p>{emailStatus}</p>
              </div>
            </div>

            <div className="phone__info">
              <h3>Phone</h3>
              <div className={editState}>
                <input
                  type="text"
                  className="edit__input"
                  placeholder={phoneStatus}
                  required
                  onChange={handlePhoneChange}
                  pattern="/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/"
                />
              </div>
              <div className={`info__containers ${prevData}`}>
                <BsTelephoneOutbound size={18} className="icons" />
                <p>{phoneStatus}</p>
              </div>
            </div>
          </article>
          <Button
            variant="solid"
            color="info"
            className={`${editState} save__button`}
            onClick={handleEditOff}
          >
            Save changes
          </Button>
        </section>
      </main>
    </>
  );
};

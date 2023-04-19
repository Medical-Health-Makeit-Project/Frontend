import { useState } from 'react';
import { BiMap, BiEdit } from 'react-icons/bi';
import { BsTelephoneOutbound, BsGenderAmbiguous, BsCheckLg } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import { errorMessage } from '@utils/toastify/error.toastify';
import { successMessage } from '@utils/toastify/success.toastify';
import { Button } from '@components/buttons';
import { AppontmetsListDoctor } from './components/AppontmetsListDoctor.doctorProfile';
import { NoAppointmentsDoctor } from './components/NoAppointmentsDoctor.doctorProfile';
import { phoneValidation, emailValidation } from '@constants/';
import axios from 'axios';

import './doctorProfile.page.scss';
import { useEffect } from 'react';

export const DoctorProfile = ({
  name,
  area,
  avatar,
  introduction = '',
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
  const [introStatus, setIntroStatus] = useState(introduction);
  const [appointments, setAppointments] = useState([]);
  const [file, setFile] = useState(null);
  const [newAvatar, setNewAvatar] = useState(null);

  const readFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => setNewAvatar(e.target.result);
    reader.readAsDataURL(file);
  };
  //@Todo: assign link to backend to update actions

  const updateData = async () => {
    try {
      const token = localStorage.getItem('ACCESS_TOKEN');
      const data = new FormData();
      if (phoneStatus !== phone) {
        data.append(phone, phoneStatus);
      } else if (emailStatus !== email) {
        data.append(email, emailStatus);
      } else if (newAvatar) {
        data.append(avatar, newAvatar);
      } else if (introStatus !== introduction) {
        data.append(introduction, introStatus);
      }
      const { status } = await axios.post('URL to back', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      });
      if (status > 399) return errorMessage('Something went wrong');
      return successMessage('Your data was updated!');
    } catch (error) {
      return errorMessage(error.message);
    }
  };
  useEffect(() => {
    const getAppointments = async () => {
      try {
        const { status } = await axios.get('URL to back').then((response) => {
          setAppointments(response.data);
        });
        if (status > 399) return errorMessage('Something went wrong');
      } catch (error) {
        return errorMessage(error.message);
      }
    };
    getAppointments();
  }, []);

  const handleEditOn = () => {
    setEditState(editStyleOn);
    setPrevData(dataStyleOff);
  };

  const handleEditOff = () => {
    setEditState(editStyleOff);
    setPrevData(dataStyleOn);
    updateData();
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmailStauts(newEmail);
  };
  const handlePhoneChange = (event) => {
    const newPhone = event.target.value;
    setPhoneSatus(newPhone);
  };
  const handleIntro = (event) => {
    const newIntro = event.target.value;
    setIntroStatus(newIntro);
  };
  const handleFile = (event) => {
    readFile(event.target.files[0]);
    setFile(event.target.files);
  };
  const avatarImage = newAvatar ? newAvatar : avatar;
  return (
    <>
      <main className="doctor__profile-main">
        <section className="doctor__card">
          <article className="primary__info-container">
            <div className="edit__container-doctor">
              <BiEdit size={20} className="icons edit__icon" onClick={handleEditOn} />
            </div>
            <div className="avatar__main-container ">
              <picture className="profile__img-container">
                <img src={avatarImage} alt="Profile image" />
              </picture>
              <div className={`${editState}`}>
                <label htmlFor="newAvatar" className="avatar__label">
                  Edit profile image
                </label>
                <input
                  className="avatar__input"
                  type="file"
                  accept="image/*"
                  name="newAvatar"
                  id="newAvatar"
                  max-size="200"
                  onChange={handleFile}
                />
              </div>
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

            <div className="intro__info info__container">
              <div className="intro__title-container">
                <h3>Introduction</h3>
                <ImProfile size={18} className="icons" />
              </div>
              <div className={editState}>
                <label htmlFor="intro">Enter your introduction</label>
                <textarea id="intro" name="intro" value={introStatus} onChange={handleIntro} />
              </div>
              <div className={`info__containers ${prevData}`}>
                <div className="intro-paragraph">
                  <p>{introStatus}</p>
                </div>
              </div>
            </div>

            <div className="email__info info__container">
              <h3>Email</h3>
              <div className={editState}>
                <input
                  type="text"
                  className="edit__input"
                  placeholder={emailStatus}
                  required
                  onChange={handleEmailChange}
                  pattern={emailValidation}
                />
              </div>
              <div className={`info__containers ${prevData}`}>
                <AiOutlineMail size={18} className="icons" />
                <p>{emailStatus}</p>
              </div>
            </div>

            <div className="phone__info info__container">
              <h3>Phone</h3>
              <div className={editState}>
                <input
                  type="text"
                  className="edit__input"
                  placeholder={phoneStatus}
                  required
                  onChange={handlePhoneChange}
                  pattern={phoneValidation}
                />
              </div>
              <div className={`info__containers ${prevData}`}>
                <BsTelephoneOutbound size={18} className="icons" />
                <p>{phoneStatus}</p>
              </div>
            </div>
            <Button
              variant="solid"
              color="info"
              className={`${editState} save__button`}
              onClick={handleEditOff}
            >
              Save changes
            </Button>
          </article>
          <article className="appointments__section-doctor">
            {appointments.length ? (
              <AppontmetsListDoctor appointments={appointments} />
            ) : (
              <NoAppointmentsDoctor />
            )}
          </article>
        </section>
      </main>
    </>
  );
};

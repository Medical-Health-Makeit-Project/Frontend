import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephoneOutbound, BsGenderAmbiguous, BsCalendarCheck } from 'react-icons/bs';
import { MdBloodtype } from 'react-icons/md';
import { BiMap, BiEdit } from 'react-icons/bi';
import { errorMessage } from '@utils/toastify/error.toastify';
import { successMessage } from '@utils/toastify/success.toastify';
import { AppointmentsList } from './components/Appointments.userProfile';
import { NoAppointments } from './components/NoAppointments.userProfile';
import { Button } from '@components/buttons';
import { phoneValidation, emailValidation } from '@constants/';
import axios from 'axios';

import './userProfile.page.scss';
import { useEffect } from 'react';

export const UserProfile = ({
  id,
  name,
  email,
  phone,
  nationality,
  avatar,
  gender,
  birthday,
  blood,
}) => {
  const editStyleOn = 'editOn';
  const editStyleOff = 'editOff';

  const dataStyleOn = 'dataOn';
  const dataStyleOff = 'dataOff';

  const [editState, setEditState] = useState(editStyleOff);
  const [prevData, setPrevData] = useState(dataStyleOn);
  const [emailStatus, setEmailStauts] = useState(email);
  const [phoneStatus, setPhoneSatus] = useState(phone);
  const [appointments, setAppointments] = useState([]);
  const [file, setFile] = useState(null);
  const [newAvatar, setNewAvatar] = useState(null);

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
    const token = localStorage.getItem('ACCESS_TOKEN');
    const getAppointments = async () => {
      try {
        const { response } = await axios.get('URL to back', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status > 399) return errorMessage('Something went wrong');
        setAppointments(response.data);
      } catch (error) {
        return errorMessage(error.message);
      }
    };
    getAppointments();
  }, []);

  const readFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => setNewAvatar(e.target.result);
    reader.readAsDataURL(file);
  };

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

  const handleFile = (event) => {
    readFile(event.target.files[0]);
    setFile(event.target.files);
  };

  const avatarImage = newAvatar ? newAvatar : avatar;

  return (
    <section className="userProfile__background">
      <article className="userProfile__card">
        <div>
          <div className="edit__container">
            <BiEdit size={20} className="icons edit__icon" onClick={handleEditOn} />
          </div>
          <picture className="userProfile__image-container">
            <img src={avatarImage} className="avatar__image" />
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
          <div className="profile__main-info">
            <p>{name}</p>
            <div className="nationality__container">
              <BiMap size={18} className="icons" />
              <p>{nationality}</p>
            </div>
          </div>

          <div className="profile__info-container">
            <div className={editState}>
              <label htmlFor="newEmail">Edit email</label>
              <input
                name="newEmail"
                type="text"
                className="edit__input"
                placeholder={emailStatus}
                required
                onChange={handleEmailChange}
                pattern={emailValidation}
              />
            </div>
            <div className={`email__container second__info`} id={prevData}>
              <AiOutlineMail size={18} className="icons" /> <p>{emailStatus}</p>
            </div>
            <div className={editState}>
              <label htmlFor="newPhone">Edit phone</label>
              <input
                name="newPhone"
                type="text"
                className="edit__input"
                placeholder={phoneStatus}
                required
                onChange={handlePhoneChange}
                pattern={phoneValidation}
              />
            </div>
            <div className={`phone__container second__info`} id={prevData}>
              <BsTelephoneOutbound size={18} className="icons" />
              <p>{phoneStatus}</p>
            </div>

            <div className="gender__container second__info">
              <BsGenderAmbiguous size={18} className="icons" />
              <p>{gender}</p>
            </div>

            <div className="birthday__container second__info">
              <BsCalendarCheck size={18} className="icons" />
              <p>{birthday}</p>
            </div>

            <div className="blood__container second__info">
              <MdBloodtype size={18} className="icons" />
              <p>{blood}</p>
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
        </div>

        <div className="appointments__section">
          {appointments.length ? (
            <AppointmentsList appointments={appointments} />
          ) : (
            <NoAppointments />
          )}
        </div>
      </article>
    </section>
  );
};

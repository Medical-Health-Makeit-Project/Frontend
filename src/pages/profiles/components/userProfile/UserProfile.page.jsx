import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephoneOutbound, BsGenderAmbiguous, BsCalendarCheck } from 'react-icons/bs';
import { MdBloodtype } from 'react-icons/md';
import { BiMap, BiEdit } from 'react-icons/bi';
import { Button } from '@components/buttons';
import { phoneValidation, emailValidation } from '@constants/';

import './userProfile.page.scss';
import axios from 'axios';

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

  //@Todo: assign link to backend to update actions
  // const updateData = () => {
  //   axios
  //     .post('URL to back', {
  //       email: emailStatus,
  //       phone: phoneStatus,
  //     })
  //     .then((response) => {
  //       alert(response);
  //     });
  // };

  // const getAppointments = () => {
  //   axios.get('URL to back').then((response) => {
  //     setAppointments(response);
  //   });
  // };

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

  return (
    <section className="userProfile__background">
      <article className="userProfile__card">
        <div className="edit__container">
          <BiEdit size={20} className="icons edit__icon" onClick={handleEditOn} />
        </div>
        <picture className="userProfile__image-container">
          <img src={avatar} className="avatar__image" />
        </picture>
        <div className="profile__main-info">
          <p>{name}</p>
          <div className="nationality__container">
            <BiMap size={18} className="icons" />
            <p>{nationality}</p>
          </div>
        </div>

        <div className="profile__info-container">
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
          <div className={`email__container second__info`} id={prevData}>
            <AiOutlineMail size={18} className="icons" /> <p>{emailStatus}</p>
          </div>
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
      </article>
    </section>
  );
};

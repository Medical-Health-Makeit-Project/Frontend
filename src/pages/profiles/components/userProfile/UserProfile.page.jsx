//import { useState, useEffect } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephoneOutbound, BsGenderAmbiguous, BsCalendarCheck } from 'react-icons/bs';
import { MdBloodtype } from 'react-icons/md';
import { BiMap } from 'react-icons/bi';
//import { Spinner } from '@chakra-ui/react';
//import { userService } from '../../service/user.service';
import './userProfile.page.scss';

export const UserProfile = ({
  name,
  email,
  phone,
  nationality,
  avatar,
  gender,
  birthday,
  blood,
}) => {
  // if (error) {
  //   return <h2>{error}</h2>;
  // }

  // if (isLoading) {
  //   return (
  //     <div className="spinner__container">
  //       <Spinner className="spinner" />
  //     </div>
  //   );
  // }

  return (
    <section className="userProfile__background">
      <article className="userProfile__card">
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
          <div className="email__container second__info">
            <AiOutlineMail size={18} className="icons" /> <p>{email}</p>
          </div>

          <div className="phone__container second__info">
            <BsTelephoneOutbound size={18} className="icons" />
            <p>{phone}</p>
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
      </article>
    </section>
  );
};

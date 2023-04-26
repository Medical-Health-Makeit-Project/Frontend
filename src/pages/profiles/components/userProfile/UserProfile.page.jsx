import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephoneOutbound, BsGenderAmbiguous, BsCalendarCheck } from 'react-icons/bs';
import { MdBloodtype } from 'react-icons/md';
import { BiMap, BiEdit } from 'react-icons/bi';
import { AppointmentsList } from './components/Appointments.userProfile';
import { NoAppointments } from './components/NoAppointments.userProfile';
import { Button } from '@components/buttons';
import { UpdatePassword } from '@components/updatePassword/UpdatePassword.components';
import { updateUser } from './service/updateUser.service';
import { errorMessage } from '@utils/toastify/error.toastify';
import { successMessage } from '@utils/toastify/success.toastify';
import { PublicRoutes } from '@routes';
import { phoneValidation, emailValidation, TOKEN, UPDATE_USER, DATE_FORMAT } from '@constants/';
import emptyAvatar from '@assets/empty-avatar.png';
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
  const editStyleOn = 'editOn';
  const editStyleOff = 'editOff';

  const dataStyleOn = 'dataOn';
  const dataStyleOff = 'dataOff';

  const [editState, setEditState] = useState(editStyleOff);
  const [prevData, setPrevData] = useState(dataStyleOn);
  const [emailStatus, setEmailStauts] = useState(email);
  const [phoneStatus, setPhoneSatus] = useState(phone);
  const [isUpdating, setIsUpdating] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [imageSelected, setImageSelected] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  //@Todo: assign link to backend to update actions
  useEffect(() => {
    // const token = localStorage.getItem(TOKEN);
    // const getAppointments = async () => {
    //   try {
    //     const { response } = await axios.get('URL to back', {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //     if (response.status > 399) return errorMessage('Something went wrong');
    //     setAppointments(response.data);
    //   } catch (error) {
    //     return errorMessage(error.message);
    //   }
    // };
    // getAppointments();
  }, []);

  const handleFile = (e) => {
    const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setFile(file);
    setImageSelected(imageURL);
  };

  const handleEditOn = () => {
    setIsUpdating(true);
    setEditState(editStyleOn);
    setPrevData(dataStyleOff);
  };

  const handleUpdate = () => {
    setEditState(editStyleOff);
    setPrevData(dataStyleOn);
    updateData();
  };

  const cancelUpdate = () => {
    setIsUpdating(false);
    setEmailStauts(email);
    setPhoneSatus(phone);
    setImageSelected('');
    setEditState(editStyleOff);
    setPrevData(dataStyleOn);
  };

  const updateData = async () => {
    try {
      const ACCES_TOKEN = localStorage.getItem(TOKEN);
      if (!ACCES_TOKEN) return navigate(PublicRoutes.LOGIN);
      const data = new FormData();
      if (phoneStatus !== phone) {
        data.append('phone', phoneStatus);
      }
      if (emailStatus !== email) {
        data.append('email', emailStatus);
      }
      if (imageSelected) {
        data.append('avatar', file);
      }
      for (const value of data.values()) {
        console.log(value);
      }
      await updateUser(UPDATE_USER, data, ACCES_TOKEN);

      return successMessage('Your data was updated!');
    } catch (error) {
      return errorMessage(error.message);
    }
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
        <div>
          <div className="edit__container">
            <BiEdit size={20} className="icons edit__icon" onClick={handleEditOn} />
          </div>
          <picture className="userProfile__image-container">
            <img
              alt="profile image"
              className="avatar__image"
              src={
                isUpdating ? imageSelected || avatar || emptyAvatar : avatar ? avatar : emptyAvatar
              }
            />
          </picture>
          <div className={`${editState}`}>
            <label htmlFor="newAvatar" className="avatar__label">
              Edit profile image
            </label>
            <input
              className="avatar__input"
              type="file"
              accept="image/png, image/jpeg"
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
              <p className="paragraph">{nationality}</p>
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
                value={isUpdating ? emailStatus : email}
              />
            </div>
            <div className={`email__container second__info`} id={prevData}>
              <AiOutlineMail size={18} className="icons" />{' '}
              <p className="paragraph">{emailStatus}</p>
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
                value={isUpdating ? phoneStatus : phone}
              />
            </div>
            <div className={`phone__container second__info`} id={prevData}>
              <BsTelephoneOutbound size={18} className="icons" />
              <p className="paragraph">{phoneStatus}</p>
            </div>

            <div className="gender__container second__info">
              <BsGenderAmbiguous size={18} className="icons" />
              <p className="paragraph">{gender}</p>
            </div>

            <div className="birthday__container second__info">
              <BsCalendarCheck size={18} className="icons" />
              <p className="paragraph">{dayjs(birthday).format(DATE_FORMAT)}</p>
            </div>

            <div className="blood__container second__info">
              <MdBloodtype size={18} className="icons" />
              <p className="paragraph">{blood}</p>
            </div>
          </div>

          <UpdatePassword updater={updateUser} url={UPDATE_USER} />

          <Button
            variant="solid"
            color="info"
            className={`${editState} save__button`}
            onClick={handleUpdate}
          >
            Save changes
          </Button>

          <Button
            variant="outline"
            color="danger"
            className={`${editState} cancel__button`}
            onClick={cancelUpdate}
          >
            Cancel
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

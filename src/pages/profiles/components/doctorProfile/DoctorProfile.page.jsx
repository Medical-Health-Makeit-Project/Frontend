import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiMap, BiEdit } from 'react-icons/bi';
import { BsTelephoneOutbound, BsGenderAmbiguous, BsCheckLg } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import { Button } from '@components/buttons';
import { Loading } from '@components/loading';
import { UpdatePassword } from '@components/updatePassword';
import { AppontmetsListDoctor } from './components/AppontmetsListDoctor.doctorProfile';
import { NoAppointmentsDoctor } from './components/NoAppointmentsDoctor.doctorProfile';
import { updateDoctorProfile } from './service/updateDoctor';
import { appointmentsDoctorSwr } from './swr/appointmentsDoctor.swr';
import { PublicRoutes } from '@routes';
import { successMessage, errorMessage } from '@utils/toastify';
import { TOKEN, UPDATE_DOCTOR, APPOINTMENTS } from '@constants/';
import emptyAvatar from '@assets/empty-avatar.png';
import './doctorProfile.page.scss';

export const DoctorProfile = ({
  name,
  lastname,
  area,
  avatar,
  introduction,
  email,
  phone,
  headquarter,
  gender,
  qualifications,
  memberships,
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
  const [introStatus, setIntroStatus] = useState(introduction || '');
  const [file, setFile] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [imageSelected, setImageSelected] = useState('');
  const navigate = useNavigate();
  const ACCESS_TOKEN = localStorage.getItem(TOKEN);
  if (!ACCESS_TOKEN) return navigate(PublicRoutes.LOGIN);
  const {
    data: appointmentsFetched,
    error: appointmentsError,
    isLoading: isLoadingAppointments,
  } = appointmentsDoctorSwr(APPOINTMENTS, ACCESS_TOKEN);

  const handleFile = (e) => {
    const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setFile(file);
    setImageSelected(imageURL);
  };

  const updateData = async () => {
    try {
      const ACCESS_TOKEN = localStorage.getItem(TOKEN);
      if (!ACCESS_TOKEN) return navigate(PublicRoutes.LOGIN);
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
      if (introStatus !== introduction) {
        data.append('introduction', introStatus);
      }
      await updateDoctorProfile(UPDATE_DOCTOR, data, ACCESS_TOKEN);
      return successMessage('Your data was updated!');
    } catch (error) {
      return errorMessage(error.message);
    }
  };

  const handleUpdatePassword = () => {
    return updatePassword();
  };

  const handleEditOn = () => {
    setIsUpdating(true);
    setEditState(editStyleOn);
    setPrevData(dataStyleOff);
  };
  const cancelUpdate = () => {
    setIsUpdating(false);
    setEmailStauts(email);
    setPhoneSatus(phone);
    setImageSelected('');
    setEditState(editStyleOff);
    setPrevData(dataStyleOn);
  };

  const handleEditOff = () => {
    setEditState(editStyleOff);
    setPrevData(dataStyleOn);
    setIsUpdating(false);
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
                <img
                  src={
                    isUpdating
                      ? imageSelected || avatar || emptyAvatar
                      : avatar
                      ? avatar
                      : emptyAvatar
                  }
                  alt="Profile image"
                />
              </picture>
              <div className={`${editState}`}>
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
              <p>
                {name} {lastname}
              </p>
              <p className="area">{area.area}</p>
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
              {qualifications.map((qualification) => (
                <div key={qualification}>
                  <p>{qualification}</p>
                </div>
              ))}
            </div>

            <div className="qualifications__info">
              <h3>Memberships</h3>
              {memberships.map((membership) => (
                <div key={membership}>
                  <p>{membership}</p>
                </div>
              ))}
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
                  pattern="^[a-z0-9._%+\-]+@[a-z0-9.\-]+.[a-z]{2,4}"
                  value={isUpdating ? emailStatus : email}
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
                  pattern="/^s*(?:+?(d{1,3}))?[\-. (]*(d{3})[\-. )]*(d{3})[\-. ]*(d{4})(?: *x(d+))?s*$/"
                  value={isUpdating ? phoneStatus : phone}
                />
              </div>
              <div className={`info__containers ${prevData}`}>
                <BsTelephoneOutbound size={18} className="icons" />
                <p>{phoneStatus}</p>
              </div>
            </div>
          </article>

          <article className="second__info-container">
            <div className="skills__info">
              <h3>Skills</h3>
              <div className="skills__containers ">
                {skills.map((skill) => (
                  <div key={skill} className="skill">
                    <BsCheckLg size={12} className="icons" />
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="intro__info info__container">
              <div className="intro__title-container">
                <h3>Introduction</h3>
                <ImProfile size={18} className="icons" />
              </div>
              <div className={editState}>
                <textarea
                  id="intro"
                  name="intro"
                  onChange={handleIntro}
                  className="introduction"
                  value={isUpdating ? introStatus : introduction || ''}
                />
              </div>
              <div className={`info__containers ${prevData}`}>
                <div className="intro-paragraph">
                  <p>{introStatus}</p>
                </div>
              </div>
            </div>

            {isUpdating || <UpdatePassword updater={updateDoctorProfile} url={UPDATE_DOCTOR} />}

            <Button
              variant="solid"
              color="info"
              className={`${editState} save__button`}
              onClick={handleEditOff}
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
          </article>
          <article className="appointments__section-doctor">
            {isLoadingAppointments ? (
              <Loading />
            ) : appointmentsError ? (
              <Error error="We can't show your appointments right now" />
            ) : appointmentsFetched.length ? (
              <AppontmetsListDoctor appointments={appointmentsFetched} />
            ) : (
              <NoAppointmentsDoctor />
            )}
          </article>
        </section>
      </main>
    </>
  );
};

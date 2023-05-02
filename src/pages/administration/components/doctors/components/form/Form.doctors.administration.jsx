import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import { IoIosClose } from 'react-icons/io';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loading } from '@components/loading';
import { Button } from '@components/buttons';
import { Spinner } from '@chakra-ui/react';
import { doctorAreas } from '../../../../services/doctorAreas';
import { locationsSWR } from '@services/locations';
import { useUpdater } from './hooks/useUpdater.hooks';
import { useIsLoading } from '@hooks';
import { createDoctorSchema } from './schema';
import {
  DOCTORS_AREA,
  DOCTOR_EMAIL_DOMAIN,
  DOCTOR_PREFIX,
  POST_DOCTOR,
  TOKEN,
  UPDATE_DOCTOR,
} from '@constants';
import { PublicRoutes } from '@routes';
import { postDoctor, updateDoctor } from '../../services';
import { useDoctorContext } from '../../context/doctors.context';
import { errorMessage, successMessage } from '@utils/toastify';
import emptyAvatar from '@assets/empty-avatar.png';
import './form.doctors.administration.scss';

export const Form = () => {
  const [newDoctor, setNewDoctor] = useState({
    firstname: '',
    lastname: '',
    email: '',
    birthdate: Date.now(),
    area: '',
    avatar: '',
    phone: '',
    location: { city: '', country: '' },
    gender: '',
    qualifications: [],
    memberships: [],
    skills: [],
    password: import.meta.env.VITE_INITIAL_PASSWORD_DOCTORS,
  });
  const [avatarSelected, setAvatarSelected] = useState('');
  const { doctorToBeUpdated, setDoctorToBeUpdated } = useDoctorContext();
  const [showError, setShowError] = useState(false);
  const [city, setCity] = useState([]);
  const [isUpdating, setIsupdating] = useState(false);
  const [processingData, setProcessingData] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const { locations } = locationsSWR();
  const { data: doctorArea } = useSWR(DOCTORS_AREA, doctorAreas, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  const [isLoading] = useIsLoading();
  const navigate = useNavigate();

  useEffect(() => {
    setNewDoctor({
      id: doctorToBeUpdated.id,
      firstname: doctorToBeUpdated.firstname,
      lastname: doctorToBeUpdated.lastname,
      email: doctorToBeUpdated.email,
      birthdate: new Date(doctorToBeUpdated.birthdate) || new Date(),
      area: doctorToBeUpdated.area,
      avatar: doctorToBeUpdated.avatar,
      phone: doctorToBeUpdated.phone,
      location: {
        city: doctorToBeUpdated.location.city,
        country: doctorToBeUpdated.location.country,
      },
      gender: doctorToBeUpdated.gender,
      qualifications: [...doctorToBeUpdated.qualifications],
      memberships: [...doctorToBeUpdated.memberships],
      skills: [...doctorToBeUpdated.skills],
    });

    if (!Object.values(doctorToBeUpdated).some((e) => e === '')) return setIsupdating(true);
    setIsupdating(false);
  }, [doctorToBeUpdated]);

  useEffect(() => {
    const citys = locations?.find((element) => element.country === newDoctor.location.country);
    setCity(citys?.locations);
  }, [newDoctor.location.country]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createDoctorSchema) });
  const { onChange, ...registerParams } = register('avatar', { required: 'required' });

  const {
    qualification,
    membership,
    skill,
    handleQualification,
    handleAddQualification,
    handleDeleteQualifications,
    handleMembership,
    handleAddMemberships,
    handleDeleteMembership,
    handleSkill,
    handleAddSkill,
    handleDeleteSkill,
  } = useUpdater(newDoctor, setNewDoctor);

  const handleSelectHeadquarters = (e) => {
    const { name, value } = e.target;
    setNewDoctor({
      ...newDoctor,
      location: { ...newDoctor.location, [name]: value },
    });
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setNewDoctor({
      ...newDoctor,
      [name]: value,
    });
  };

  const handleUpdateDoctor = async () => {
    try {
      const ACCESS_TOKEN = localStorage.getItem(TOKEN);
      if (!ACCESS_TOKEN) return navigate(PublicRoutes.LOGIN);
      const { avatar } = newDoctor;
      if (!newDoctor.qualifications.length || !newDoctor.skills.length) return setShowError(true);
      if (!newDoctor.email.endsWith(DOCTOR_EMAIL_DOMAIN)) return setEmailError(true);
      if (typeof avatar === 'string') {
        const form = new FormData();
        const { avatar, location, ...toUpdate } = newDoctor;
        const formattedDoctor = {
          ...toUpdate,
          headquarter: { ...location },
        };
        for (const key in formattedDoctor) {
          if (
            Array.isArray(formattedDoctor[key]) ||
            (formattedDoctor[key] instanceof Object && key !== 'birthdate')
          ) {
            form.append(key, JSON.stringify(formattedDoctor[key]));
          } else {
            form.append(key, formattedDoctor[key]);
          }
        }
        setProcessingData(true);
        const { status } = await updateDoctor(UPDATE_DOCTOR, form, ACCESS_TOKEN);
        if (status < 300) {
          setProcessingData(false);
          successMessage('Doctor updated succesfully');
        }
        return handleClearForm();
      }
      setEmailError(false);
      const form = new FormData();
      const { location, ...toUpdate } = newDoctor;
      const formattedDoctor = {
        ...toUpdate,
        headquarter: { ...location },
      };

      for (const key in formattedDoctor) {
        if (
          Array.isArray(formattedDoctor[key]) ||
          (formattedDoctor[key] instanceof Object && key !== 'avatar' && key !== 'birthdate')
        ) {
          form.append(key, JSON.stringify(formattedDoctor[key]));
        } else if (key === 'avatar') {
          const avatar = formattedDoctor[key];
          form.append(key, avatar);
        } else {
          form.append(key, formattedDoctor[key]);
        }
      }
      await updateDoctor(UPDATE_DOCTOR, form, ACCESS_TOKEN);
      successMessage('Doctor updated succesfully');
      return handleClearForm();
    } catch (error) {
      setProcessingData(false);
      errorMessage(error.response?.data || error.message);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const avatarURL = URL.createObjectURL(file);
    setAvatarSelected(avatarURL);
    setNewDoctor({
      ...newDoctor,
      avatar: file,
    });
    onChange(e);
  };

  const submitForm = async (data) => {
    try {
      if (!newDoctor.qualifications.length || !newDoctor.skills.length) return setShowError(true);
      if (!newDoctor.email.endsWith(DOCTOR_EMAIL_DOMAIN)) {
        return setEmailError(true);
      }
      setEmailError(false);

      const formattingForm = {
        ...data,
        prefix: DOCTOR_PREFIX,
        headquarter: {
          city: data.city,
          country: data.country,
        },
        birthdate: newDoctor.birthdate,
        password: import.meta.env.VITE_INITIAL_PASSWORD_DOCTORS,
        qualifications: [...newDoctor.qualifications],
        skills: [...newDoctor.skills],
        memberships: [...newDoctor.memberships],
      };
      const { city, country, ...finalForm } = formattingForm;
      const form = new FormData();
      for (const key in finalForm) {
        if (
          Array.isArray(finalForm[key]) ||
          (finalForm[key] instanceof Object && key !== 'avatar')
        ) {
          form.append(key, JSON.stringify(finalForm[key]));
        } else if (key === 'avatar') {
          const avatar = finalForm[key][0];
          form.append(key, avatar);
        } else {
          form.append(key, finalForm[key]);
        }
      }
      const ACCESS_TOKEN = localStorage.getItem(TOKEN);
      if (!ACCESS_TOKEN) return navigate(PublicRoutes.LOGIN);
      setProcessingData(true);
      const { status } = await postDoctor(POST_DOCTOR, form, ACCESS_TOKEN);
      if (status < 300) {
        successMessage('Doctor added successfully!');
        setProcessingData(false);
      }
      return handleClearForm();
    } catch (error) {
      setProcessingData(false);
      errorMessage(error.response?.data || error.message);
    }
  };

  const handleClearForm = () => {
    setAvatarSelected('');
    setDoctorToBeUpdated({
      firstname: '',
      lastname: '',
      email: '',
      birthdate: Date.now(),
      area: '',
      avatar: '',
      phone: '',
      location: { city: '', country: '' },
      gender: '',
      qualifications: [],
      memberships: [],
      skills: [],
    });
    setNewDoctor({
      firstname: '',
      lastname: '',
      email: '',
      birthdate: Date.now(),
      area: '',
      avatar: '',
      phone: '',
      location: { city: '', country: '' },
      gender: '',
      qualifications: [],
      memberships: [],
      skills: [],
      password: Date.now(),
    });
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <h1 className="doctors-form__h1">Doctors</h1>
      <form onSubmit={handleSubmit(submitForm)} className="form-doctors">
        <div className="form-doctors__input-container">
          <label htmlFor="firstname" className="form-doctors__label">
            1. Name:
          </label>
          <div>
            <input
              type="text"
              name="firstname"
              {...register('firstname')}
              id="firstname"
              onChange={handleChangeForm}
              value={newDoctor.firstname}
              className="form-doctors__input-text"
            />
            <p className="form-doctors__error-message">{errors.firstname?.message}</p>
          </div>
        </div>
        <div className="form-doctors__input-container">
          <label htmlFor="lastname" className="form-doctors__label">
            2. Lastname:
          </label>
          <div>
            <input
              type="text"
              name="lastname"
              {...register('lastname', { required: 'required' })}
              id="lastname"
              onChange={handleChangeForm}
              value={newDoctor.lastname}
              className="form-doctors__input-text"
            />
            <p className="form-doctors__error-message">{errors.lastname?.message}</p>
          </div>
        </div>
        <div className="form-doctors__select-container">
          <label htmlFor="birthdate" className="form-doctors__label">
            3. Birthdate:
          </label>
          <div className="select-container-date">
            <DatePicker
              id="birthdate"
              selected={newDoctor.birthdate}
              name="birthdate"
              dateFormat="dd/MM/yyyy"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              className="input-container__date"
              onChange={(date) => setNewDoctor({ ...newDoctor, birthdate: date })}
              required
            />
            <p className="form-doctors__error-message">{errors.birthdate?.message}</p>
          </div>
        </div>
        <div className="form-doctors__select-container">
          <label htmlFor="area" className="form-doctors__label">
            4. Area:
          </label>
          <div className="form-doctor-selects-container">
            <select
              name="area"
              {...register('area', { required: 'required' })}
              id="area"
              onChange={handleChangeForm}
              value={newDoctor.area}
              className="form-doctors__input-select"
            >
              <option value="" disabled defaultValue>
                --Choose an area--
              </option>
              {doctorArea?.map((e) => {
                return (
                  <option key={e.id} value={e.area}>
                    {e.area}
                  </option>
                );
              })}
            </select>
            <p className="form-doctors__error-message">{errors.area?.message}</p>
          </div>
        </div>
        <div className="form-doctors__input-container">
          <label className="form-doctors__label">5. Upload Avatar: </label>
          <div className="form-doctors__avatar-selection">
            <label htmlFor="avatar" className="form-doctor__btn-upload-image">
              Choose your avatar
            </label>
            <input
              type="file"
              {...register('avatar', { required: 'required' })}
              id="avatar"
              name="avatar"
              onChange={handleImageUpload}
              accept="image/jpeg, image/png, image/webp"
              hidden
            />
            <div className="avatar-container">
              <img
                className="avatar-container__img"
                src={
                  isUpdating
                    ? newDoctor.avatar instanceof File
                      ? avatarSelected
                      : newDoctor.avatar
                    : avatarSelected || emptyAvatar
                }
                alt="avatar"
              />
            </div>
          </div>
          <p className="form-doctors__error-message">{errors.avatar?.message}</p>
        </div>
        <div className="form-doctors__input-container">
          <label htmlFor="email" className="form-doctors__label">
            6. Email:
          </label>
          <div>
            <input
              type="email"
              {...register('email', { required: 'required' })}
              id="email"
              name="email"
              onChange={handleChangeForm}
              className="form-doctors__input-text"
              value={newDoctor.email}
            />
            <p className="form-doctors__error-message">
              {errors.email?.message || emailError ? 'You must use only @drmebid.com' : null}
            </p>
          </div>
        </div>
        <div className="form-doctors__input-container">
          <label htmlFor="phone" className="form-doctors__label">
            7. Phone:
          </label>
          <div>
            <input
              type="phone"
              name="phone"
              {...register('phone', { required: 'required' })}
              id="phone"
              onChange={handleChangeForm}
              className="form-doctors__input-text"
              value={newDoctor.phone}
            />
            <p className="form-doctors__error-message">{errors.phone?.message}</p>
          </div>
        </div>
        <div className="form-doctors-headquarter">
          <p className="form-doctors-headquarter__title">Headquarter:</p>
          <div className="form-doctors__select-container">
            <label htmlFor="country" className="form-doctors__label">
              8. Country:
            </label>
            <div className="form-doctor-selects-container">
              <select
                name="country"
                id="country"
                {...register('country')}
                onChange={handleSelectHeadquarters}
                value={newDoctor.location.country}
                className="form-doctors__input-select"
              >
                <option value="" disabled defaultValue>
                  --Choose a country--
                </option>
                {locations?.map((e) => {
                  return (
                    <option key={e.id} value={e.country}>
                      {e.country}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="form-doctors__select-container">
            <label htmlFor="city" className="form-doctors__label">
              9. City:
            </label>
            <div className="form-doctor-selects-container">
              <select
                name="city"
                {...register('city')}
                id="city"
                onChange={handleSelectHeadquarters}
                value={newDoctor.location.city}
                className="form-doctors__input-select"
              >
                <option value="" disabled defaultValue>
                  --Choose a city--
                </option>
                {city?.map((e) => {
                  return (
                    <option key={e.city} value={e.city}>
                      {e.city}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="form-doctors-gender">
          <p className="form-doctors-gender__title">10. Gender:</p>
          <div>
            <div className="form-doctors__input-container-radios">
              <input
                type="radio"
                id="male"
                name="gender"
                {...register('gender', { required: 'required' })}
                value="Male"
                onChange={handleChangeForm}
              />
              <label htmlFor="male" className="form-doctors__label">
                Male
              </label>
            </div>
            <div className="form-doctors__input-container-radios">
              <input
                type="radio"
                id="female"
                name="gender"
                {...register('gender', { required: 'required' })}
                value="Female"
                onChange={handleChangeForm}
              />
              <label htmlFor="female" className="form-doctors__label">
                Female
              </label>
            </div>
            <div className="form-doctors__input-container-radios">
              <input
                type="radio"
                id="noBinary"
                name="gender"
                {...register('gender', { required: 'required' })}
                value="No Binary"
                onChange={handleChangeForm}
              />
              <label htmlFor="noBinary" className="form-doctors__label">
                No Binary
              </label>
            </div>
            <p className="form-doctors__error-message">{errors.gender?.message}</p>
          </div>
        </div>
        <div className="form-doctors__input-container input__add">
          <label htmlFor="qualifications" className="form-doctors__label">
            11. Qualifications:
          </label>
          <div>
            <div className="form-doctors__input-with-button">
              <input
                type="text"
                name="qualifications"
                {...register('qualifications', { required: 'required' })}
                id="qualifications"
                onChange={handleQualification}
                value={qualification}
                className="form-doctors__input-text"
              />
              <Button
                color="info"
                onClick={(e) => handleAddQualification(e)}
                className="form-doctors__button-add"
              >
                Add
              </Button>
            </div>
            <p className="form-doctors__error-message">{errors.qualifications?.message}</p>
            <p className="form-doctors__error-message">
              {showError && 'You must set at least one qualification'}
            </p>
          </div>
          <div className="form-doctors-items-added-container">
            {newDoctor.qualifications?.map((qualification) => {
              return (
                <div key={qualification} className="form-doctors__qualification">
                  {qualification}{' '}
                  <IoIosClose
                    onClick={(e) => handleDeleteQualifications(qualification, 'qualifications')}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="form-doctors__input-container input__add">
          <label htmlFor="memberships" className="form-doctors__label">
            12. Memberships:
          </label>
          <div>
            <div className="form-doctors__input-with-button">
              <input
                type="text"
                name="memberships"
                {...register('memberships', { required: 'required' })}
                id="memberships"
                onChange={handleMembership}
                value={membership}
                className="form-doctors__input-text"
              />
              <Button
                color="info"
                onClick={handleAddMemberships}
                className="form-doctors__button-add"
              >
                Add
              </Button>
            </div>
            <p className="form-doctors__error-message">{errors.memberships?.message}</p>
          </div>
          <div className="form-doctors-items-added-container">
            {newDoctor.memberships?.map((membership) => {
              return (
                <div key={membership} className="form-doctors__membership">
                  {membership} <IoIosClose onClick={(e) => handleDeleteMembership(membership)} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="form-doctors__input-container input__add">
          <label htmlFor="skills" className="form-doctors__label">
            13. Skills:
          </label>
          <div>
            <div className="form-doctors__input-with-button">
              <input
                type="text"
                name="skills"
                {...register('skills', { required: 'required' })}
                id="skills"
                onChange={handleSkill}
                value={skill}
                className="form-doctors__input-text"
              />
              <Button color="info" onClick={handleAddSkill} className="form-doctors__button-add">
                Add
              </Button>
            </div>
            <p className="form-doctors__error-message">{errors.skills?.message}</p>
            <p className="form-doctors__error-message">
              {showError && 'You must set at least one skill'}
            </p>
          </div>
          <div className="form-doctors-items-added-container">
            {newDoctor.skills?.map((skill) => {
              return (
                <div key={skill} className="form-doctors__skill">
                  {skill} <IoIosClose onClick={(e) => handleDeleteSkill(skill)} />
                </div>
              );
            })}
          </div>
        </div>

        <Button
          color="danger"
          type={isUpdating ? 'button' : 'submit'}
          className="form-doctors__btn-submitter"
          onClick={isUpdating ? handleUpdateDoctor : null}
          disabled={processingData}
        >
          {processingData ? <Spinner /> : isUpdating ? 'UPDATE' : 'CREATE'}
        </Button>
        <Button
          color="info"
          className="form-doctors__btn-clear"
          disabled={processingData}
          onClick={handleClearForm}
        >
          CLEAR
        </Button>
      </form>
    </>
  );
};

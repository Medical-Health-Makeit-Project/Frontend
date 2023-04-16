import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { useForm } from 'react-hook-form';
import { IoIosClose } from 'react-icons/io';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loading } from '@components/loading';
import { Button } from '@components/buttons';
import { doctorAreas } from '../../../../services/doctorAreas';
import { locationsSWR } from '@services/locations';
import { useUpdater } from './hooks/useUpdater.hooks';
import { useIsLoading } from '@hooks';
import { createDoctorSchema } from './schema';
import { DOCTORS_AREA } from '@constants';
import emptyAvatar from '@assets/empty-avatar.png';
import './form.doctors.administration.scss';

export const Form = () => {
  const [newDoctor, setNewDoctor] = useState({
    firstname: '',
    lastname: '',
    area: '',
    avatar: '',
    email: '',
    phone: '',
    headquarter: { city: '', country: '' },
    gender: '',
    qualifications: [],
    memberships: [],
    skills: [],
    password: Date.now(),
    role: 1993,
  });
  const [showError, setShowError] = useState(false);
  const [avatarSelected, setAvatarSelected] = useState();
  const [city, setCity] = useState([]);
  const [countrySelected, setCountrySelected] = useState(
    newDoctor.headquarter.country || 'Colombia'
  );
  const { locations } = locationsSWR();
  const { data: doctorArea } = useSWR(DOCTORS_AREA, doctorAreas, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  useEffect(() => {
    const citys = locations?.find((element) => element.country === countrySelected);
    setCity(citys?.locations);
  }, [countrySelected]);

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

  const [isLoading] = useIsLoading();

  const handleSelectHeadquarters = (e) => {
    const { name, value } = e.target;
    if (name === 'country') setCountrySelected(e.currentTarget.value);
    setNewDoctor({
      ...newDoctor,
      headquarter: { ...newDoctor.headquarter, [name]: value },
    });
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

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setNewDoctor({
      ...newDoctor,
      [name]: value,
    });
  };

  const submitForm = (data) => {
    if (
      !newDoctor.qualifications.length ||
      !newDoctor.memberships.length ||
      !newDoctor.skills.length
    )
      return setShowError(true);
    const formattingForm = {
      ...data,
      headquarter: {
        city: data.city,
        country: data.country,
      },
      password: Date.now(),
    };
    const { city, country, ...finalForm } = formattingForm;
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <h1 className="doctors-form__h1">Doctors</h1>
      <form onSubmit={handleSubmit(submitForm)} className="form-doctors">
        <div className="form-doctors__input-container">
          <label htmlFor="firstname" className="form-doctors__label">
            Name:
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
            Lastname:
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
          <label htmlFor="area" className="form-doctors__label">
            Area:
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
          <label className="form-doctors__label">Upload Avatar: </label>
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
                src={avatarSelected || emptyAvatar}
                alt="avatar"
              />
            </div>
          </div>
          <p className="form-doctors__error-message">{errors.avatar?.message}</p>
        </div>
        <div className="form-doctors__input-container">
          <label htmlFor="email" className="form-doctors__label">
            Email:
          </label>
          <div>
            <input
              type="email"
              name="email"
              {...register('email', { required: 'Required' })}
              id="email"
              onChange={handleChangeForm}
              className="form-doctors__input-text"
            />
            <p className="form-doctors__error-message">{errors.email?.message}</p>
          </div>
        </div>
        <div className="form-doctors__input-container">
          <label htmlFor="phone" className="form-doctors__label">
            Phone:
          </label>
          <div>
            <input
              type="phone"
              name="phone"
              {...register('phone', { required: 'required' })}
              id="phone"
              onChange={handleChangeForm}
              className="form-doctors__input-text"
            />
            <p className="form-doctors__error-message">{errors.phone?.message}</p>
          </div>
        </div>
        <div className="form-doctors-headquarter">
          <p className="form-doctors-headquarter__title">Headquarter:</p>
          <div className="form-doctors__select-container">
            <label htmlFor="country" className="form-doctors__label">
              Country:
            </label>
            <div className="form-doctor-selects-container">
              <select
                name="country"
                id="country"
                {...register('country')}
                onChange={handleSelectHeadquarters}
                value={newDoctor.headquarter.country}
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
              City:
            </label>
            <div className="form-doctor-selects-container">
              <select
                name="city"
                {...register('city')}
                id="city"
                onChange={handleSelectHeadquarters}
                value={newDoctor.headquarter.city}
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
          <p className="form-doctors-gender__title">Gender:</p>
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
        <div className="form-doctors__input-container">
          <label htmlFor="qualifications" className="form-doctors__label">
            Qualifications:
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
        <div className="form-doctors__input-container">
          <label htmlFor="memberships" className="form-doctors__label">
            Memberships:
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
        <div className="form-doctors__input-container">
          <label htmlFor="skills" className="form-doctors__label">
            Skills:
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
        <Button color="danger" type="submit" className="form-doctors__btn-submitter">
          Send
        </Button>
      </form>
    </>
  );
};

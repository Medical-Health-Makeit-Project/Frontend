import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { IoIosClose } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loading } from '@components/loading';
import { doctorAreas } from '../../../../services/doctorAreas';
import { locationsSWR } from '@services/locations';
import { useUpdater } from './hooks/useUpdater.hooks';
import { useIsLoading } from '@hooks';
import { createDoctorSchema } from './schema';
import { DOCTORS_AREA } from '@constants';
import emptyAvatar from '@assets/empty-avatar.png';

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
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setNewDoctor({
      ...newDoctor,
      [name]: value,
    });
  };

  const submitForm = (data) => {
    const formattingForm = {
      ...data,
      headquarter: {
        city: data.city,
        country: data.country,
      },
      password: Date.now(),
      role: 1993,
    };
    const { city, country, ...finalForm } = formattingForm;
    console.log(finalObject);
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <h1 className="admin-doctors__title">Doctors</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="firstname">Name:</label>
          <input
            type="text"
            name="firstname"
            {...register('firstname')}
            id="firstname"
            onChange={handleChangeForm}
            value={newDoctor.firstname}
          />
          <p>{errors.firstname?.message}</p>
        </div>
        <div>
          <label htmlFor="lastname">Lastname:</label>
          <input
            type="text"
            name="lastname"
            {...register('lastname', { required: 'required' })}
            id="lastname"
            onChange={handleChangeForm}
            value={newDoctor.lastname}
          />
          <p>{errors.lastname?.message}</p>
        </div>
        <div>
          <label htmlFor="area">Area:</label>
          <div>
            <select
              name="area"
              {...register('area', { required: 'required' })}
              id="area"
              onChange={handleChangeForm}
              value={newDoctor.area}
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
            <p>{errors.area?.message}</p>
          </div>
        </div>
        <div>
          <label>Upload image: </label>
          <input
            type="file"
            name="avatar"
            {...register('avatar', { required: 'required' })}
            onChange={handleImageUpload}
            accept="image/jpeg, image/png, image/webp"
          />
          <p>{errors.avatar?.message}</p>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            {...register('email', { required: 'Required' })}
            id="email"
            onChange={handleChangeForm}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="phone"
            name="phone"
            {...register('phone', { required: 'required' })}
            id="phone"
            onChange={handleChangeForm}
          />
          <p>{errors.phone?.message}</p>
        </div>
        <div>
          <p>Headquarter:</p>
          <div>
            <label htmlFor="country">Country:</label>
            <div>
              <select
                name="country"
                id="country"
                {...register('country')}
                onChange={handleSelectHeadquarters}
                value={newDoctor.headquarter.country}
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
          <div>
            <label htmlFor="city">City:</label>
            <div>
              <select
                name="city"
                {...register('city')}
                id="city"
                onChange={handleSelectHeadquarters}
                value={newDoctor.headquarter.city}
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
        <div>
          <p>Gender:</p>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              {...register('gender', { required: 'required' })}
              value="Male"
              onChange={handleChangeForm}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              {...register('gender', { required: 'required' })}
              value="Female"
              onChange={handleChangeForm}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              type="radio"
              id="noBinary"
              name="gender"
              {...register('gender', { required: 'required' })}
              value="No Binary"
              onChange={handleChangeForm}
            />
            <label htmlFor="noBinary">No Binary</label>
          </div>
          <p>{errors.gender?.message}</p>
        </div>
        <div>
          <label htmlFor="qualifications">Qualifications:</label>
          <input
            type="text"
            name="qualifications"
            {...register('qualifications', { required: 'required' })}
            id="qualifications"
            onChange={handleQualification}
            value={qualification}
          />
          <button onClick={handleAddQualification}>Add</button>
          <p>{errors.qualifications?.message}</p>
          <div>
            {newDoctor.qualifications?.map((qualification) => {
              return (
                <div key={qualification}>
                  {qualification}{' '}
                  <IoIosClose onClick={(e) => handleDeleteQualifications(qualification)} />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <label htmlFor="memberships">Memberships:</label>
          <input
            type="text"
            name="memberships"
            {...register('memberships', { required: 'required' })}
            id="memberships"
            onChange={handleMembership}
            value={membership}
          />
          <button onClick={handleAddMemberships}>Add</button>
          <p>{errors.memberships?.message}</p>
          <div>
            {newDoctor.memberships?.map((membership) => {
              return (
                <div key={membership}>
                  {membership} <IoIosClose onClick={(e) => handleDeleteMembership(membership)} />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            name="skills"
            {...register('skills', { required: 'required' })}
            id="skills"
            onChange={handleSkill}
            value={skill}
          />
          <button onClick={handleAddSkill}>Add</button>
          <p>{errors.skills?.message}</p>
          <div>
            {newDoctor.skills?.map((skill) => {
              return (
                <div key={skill}>
                  {skill} <IoIosClose onClick={(e) => handleDeleteSkill(skill)} />
                </div>
              );
            })}
          </div>
        </div>
        <input type="submit" />
      </form>
      <div>
        <img src={avatarSelected || emptyAvatar} alt="avatar" />
      </div>
    </>
  );
};

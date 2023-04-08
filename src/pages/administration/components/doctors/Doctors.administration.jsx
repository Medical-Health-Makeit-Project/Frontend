import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { IoIosClose } from 'react-icons/io';
import { Loading } from '@components/loading';
import { DOCTORS_AREA } from '@constants';
import { doctorAreas } from '../../services/doctorAreas';
import { locationsSWR } from '@services/locations';
import { useUpdater } from './hooks/useUpdater.hooks';
import { useIsLoading } from '@hooks';
import emptyAvatar from '@assets/empty-avatar.png';
import './doctors.administration.scss';

export const Doctors = () => {
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

  //to-do this function will be used to send the new doctor to the api
  const handleSubmit = () => {
    //use formData()
  };

  if (isLoading) return <Loading />;

  return (
    <main className="admin-doctors">
      <h1 className="admin-doctors__title">Doctors</h1>
      <form>
        <div>
          <label htmlFor="firstname">Name:</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            onChange={handleChangeForm}
            value={newDoctor.firstname}
          />
        </div>
        <div>
          <label htmlFor="lastname">Lastname:</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={handleChangeForm}
            value={newDoctor.lastname}
          />
        </div>
        <div>
          <label htmlFor="area">Area:</label>
          <div>
            <select name="area" id="area" onChange={handleChangeForm}>
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
          </div>
        </div>
        <div>
          <label>Upload image: </label>
          <input
            type="file"
            name="avatar"
            onChange={handleImageUpload}
            accept="image/jpeg, image/png, image/webp"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={handleChangeForm} />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="phone" name="phone" id="phone" onChange={handleChangeForm} />
        </div>
        <div>
          <p>Headquarter:</p>
          <div>
            <label htmlFor="country">Country:</label>
            <div>
              <select
                name="country"
                id="country"
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
            <input type="radio" id="male" value="Male" name="gender" onChange={handleChangeForm} />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              value="Female"
              name="gender"
              onChange={handleChangeForm}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              type="radio"
              id="noBinary"
              value="No Binary"
              name="gender"
              onChange={handleChangeForm}
            />
            <label htmlFor="noBinary">No Binary</label>
          </div>
        </div>
        <div>
          <label htmlFor="qualifications">Qualifications:</label>
          <input
            type="text"
            name="qualifications"
            id="qualifications"
            onChange={handleQualification}
            value={qualification}
          />
          <button onClick={handleAddQualification}>Add</button>
          <div>
            {newDoctor.qualifications?.map((qualification) => {
              return (
                <div key={qualification}>
                  {qualification}{' '}
                  <IoIosClose onClick={(e) => handleDeleteQualifications(e, qualification)} />
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
            id="memberships"
            onChange={handleMembership}
            value={membership}
          />
          <button onClick={handleAddMemberships}>Add</button>
          <div>
            {newDoctor.memberships?.map((membership) => {
              return (
                <div key={membership}>
                  {membership} <IoIosClose onClick={(e) => handleDeleteMembership(e, membership)} />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <label htmlFor="skills">Skills:</label>
          <input type="text" name="skills" id="skills" onChange={handleSkill} value={skill} />
          <button onClick={handleAddSkill}>Add</button>
          <div>
            {newDoctor.skills?.map((skill) => {
              return (
                <div key={skill}>
                  {skill} <IoIosClose onClick={(e) => handleDeleteSkill(e, skill)} />
                </div>
              );
            })}
          </div>
        </div>
      </form>
      <div>
        <img src={avatarSelected || emptyAvatar} alt="avatar" />
      </div>
    </main>
  );
};

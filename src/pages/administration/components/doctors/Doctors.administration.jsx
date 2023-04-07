import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { IoIosClose } from 'react-icons/io';
import { Loading } from '@components/loading';
import { DOCTORS_AREA } from '@constants';
import { doctorAreas } from '../../services/doctorAreas';
import { locationsSWR } from '@services/locations';
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

  const [qualifications, setQualifications] = useState([]);

  const { locations, locationsError } = locationsSWR();
  const {
    data: doctorArea,
    error,
    isLoading,
  } = useSWR(DOCTORS_AREA, doctorAreas, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });
  const [city, setCity] = useState([]);
  const [countrySelected, setCountrySelected] = useState(
    newDoctor.headquarter.country || 'Colombia'
  );

  useEffect(() => {
    console.log('hello');
    const citys = locations?.find((element) => element.country === countrySelected);
    setCity(citys?.locations);
  }, [countrySelected]);

  const handleSelectHeadquarters = (e) => {
    const { name, value } = e.target;
    if (name === 'country') setCountrySelected(e.currentTarget.value);

    setNewDoctor({
      ...newDoctor,
      headquarter: { ...newDoctor.headquarter, [name]: value },
    });
  };

  const handleChangeform = (e) => {
    const { name, value } = e.target;
    setNewDoctor({
      ...newDoctor,
      [name]: value,
    });
  };

  console.log(newDoctor);

  if (isLoading) return <Loading />;

  return (
    <main className="admin-doctors">
      <h1 className="admin-doctors__title">Doctors</h1>
      <form>
        <div>
          <label htmlFor="firstname">Name:</label>
          <input type="text" name="firstname" id="firstname" />
        </div>
        <div>
          <label htmlFor="lastname">Lastname:</label>
          <input type="text" name="lastname" id="lastname" />
        </div>
        <div>
          <label htmlFor="area">Area:</label>
          <div>
            <select name="area" id="area">
              <option value="" disabled defaultValue>
                --Choose an area--
              </option>
              {doctorArea.map((e) => {
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
          <input type="file" name="avatar" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="phone">Email:</label>
          <input type="phone" name="phone" id="phone" />
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
            <input type="radio" id="male" value="Male" name="gender" />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" id="female" value="Female" name="gender" />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input type="radio" id="noBinary" value="No Binary" name="gender" />
            <label htmlFor="noBinary">No Binary</label>
          </div>
        </div>
        <div>
          <label htmlFor="qualifications">Qualifications:</label>
          <input type="text" name="qualifications" id="qualifications" />
          <div>
            {qualifications?.map((e) => {
              return (
                <div key={e}>
                  {e} <IoIosClose />
                </div>
              );
            })}
          </div>
        </div>
      </form>
      <div>
        <img src={newDoctor.avatar || emptyAvatar} alt="avatar" />
      </div>
    </main>
  );
};

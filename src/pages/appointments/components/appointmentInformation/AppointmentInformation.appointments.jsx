import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Button } from '@components/buttons';
import { useAppointmentContext } from '../../context';
import { errorMessage } from '@utils/toastify';
import { timeExtractor } from '@utils/tools';
import { PrivateRoutes } from '@routes';
import './appointmentInformation.appointments.scss';

export const AppointmentInformation = () => {
  const {
    setShowSecondForm,
    locations,
    doctorsByArea,
    appointmentForm,
    setAppointmentForm,
    createAppointment,
  } = useAppointmentContext();

  const [countrySelected, setCountrySelected] = useState('');
  const [city, setCity] = useState([]);
  const [areaSelected, setAreaSelected] = useState('');
  const [doctorSelected, setDoctorSelected] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!countrySelected) {
      const citys = locations.find((element) => element.country === 'Colombia');
      return setCity(citys.locations);
    }
    const citys = locations.find((element) => element.country === countrySelected);
    setCity(citys.locations);
    setAppointmentForm({
      ...appointmentForm,
      citySelected: citys.locations[0].city,
    });
  }, [countrySelected]);

  useEffect(() => {
    if (!areaSelected) {
      const docs = doctorsByArea.find((element) => element.area === 'General Surgeon');
      const { doctors } = docs;
      return setDoctorSelected(doctors);
    }
    const docs = doctorsByArea.find((element) => element.area === areaSelected);
    const { doctors } = docs;
    setDoctorSelected(doctors);
    setAppointmentForm({
      ...appointmentForm,
      preferredDoctorSelected: doctors[0].id,
    });
  }, [areaSelected]);

  useEffect(() => {
    if (appointmentForm.preferredDoctorSelected === '') {
      setAppointmentForm({
        ...appointmentForm,
        preferredDoctorSelected: '',
      });
    } else {
      setAppointmentForm({
        ...appointmentForm,
        preferredDoctorSelected: appointmentForm.preferredDoctorSelected,
      });
    }
  }, [doctorSelected]);

  useEffect(() => {
    if (appointmentForm.citySelected === '') {
      setAppointmentForm({
        ...appointmentForm,
        citySelected: '',
      });
    } else {
      setAppointmentForm({
        ...appointmentForm,
        citySelected: appointmentForm.citySelected,
      });
    }
  }, [city]);

  const handleGoBack = (e) => {
    e.preventDefault();
    return setShowSecondForm(false);
  };

  const handleSelectCountry = (e) => {
    setCountrySelected(e.currentTarget.value);
    return handleChangeForm(e);
  };

  const handleSpeciality = (e) => {
    const { name, value } = e.target;
    setAreaSelected(value);
    return setAppointmentForm({
      ...appointmentForm,
      [name]: e.target.options[e.target.selectedIndex].dataset.id,
    });
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    return setAppointmentForm({
      ...appointmentForm,
      [name]: value,
    });
  };

  const handleTime = (e) => {
    const time = timeExtractor(e);
    if (time < 6 || time >= 19) {
      return errorMessage('Our atention hours are from 6:00 am to 19:00 pm');
    }
    setAppointmentForm({ ...appointmentForm, appointmentTime: e });
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();
    if (Object.values(appointmentForm).find((e) => e === '')) {
      return errorMessage('You must complete the form');
    }
    const price = doctorsByArea.find((e) => e.area === areaSelected).price;
    createAppointment(price);
    navigate(PrivateRoutes.CHECKOUT);
  };
  return (
    <section className="appointments-section-2">
      <h2 className="appointments-section-2__title">Appointment Information</h2>
      <form className="appointments-section-2__form" autoComplete="off">
        <div className="input-container">
          <label htmlFor="speciality">Speciality:</label>
          <div className="select-container">
            <select
              name="specialitySelected"
              id="speciality"
              className="input-container__input"
              value={areaSelected}
              onChange={handleSpeciality}
            >
              <option value="" disabled>
                --Choose a speciality--
              </option>
              {doctorsByArea.map((e) => {
                return (
                  <option key={e.area} value={e.area} data-id={e.id}>
                    {e.area}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="preferredDoctor">Preferred doctor:</label>
          <div className="select-container">
            <select
              name="preferredDoctorSelected"
              id="preferredDoctor"
              className="input-container__input"
              value={appointmentForm.preferredDoctorSelected}
              onChange={handleChangeForm}
            >
              <option value="" disabled defaultValue>
                --Choose a doctor--
              </option>
              {doctorSelected?.map((e) => {
                return (
                  <option key={e.id} value={e.id}>
                    {`${e.firstname} ${e.lastname}`}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="country">Country:</label>
          <div className="select-container">
            <select
              name="countrySelected"
              id="country"
              className="input-container__input"
              value={countrySelected}
              onChange={handleSelectCountry}
            >
              <option value="" disabled>
                --Choose your country--
              </option>
              {locations.map((element) => {
                return (
                  <option key={element.id} value={element.country}>
                    {element.country}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="city">City:</label>
          <div className="select-container">
            <select
              name="citySelected"
              id="city"
              className="input-container__input"
              value={appointmentForm.citySelected}
              onChange={handleChangeForm}
            >
              <option value="" disabled defaultValue>
                --Choose your city--
              </option>
              {city?.map((element) => {
                return (
                  <option key={element.city} value={element.city}>
                    {element.city}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="input-container-date">
          <label htmlFor="dateAppointment">Date of Appointment:</label>
          <div className="select-container-date">
            <DatePicker
              id="dateAppointment"
              minDate={new Date()}
              selected={appointmentForm.appointmentDate}
              dateFormat="dd/MM/yyyy"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              name="appointmentDate"
              className="input-container__date"
              onChange={(date) => setAppointmentForm({ ...appointmentForm, appointmentDate: date })}
              required
            />
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="appointmentTime">Time of Appointment:</label>
          <div className="select-container-clock">
            <TimePicker
              name="appointmentTime"
              id="appointmentTime"
              format="h:m a"
              clearIcon={null}
              disableClock
              amPmAriaLabel="Select AM/PM"
              openClockOnFocus={false}
              className="input-container__clock"
              required
              onChange={handleTime}
            />
          </div>
          <span className="errorMessage">*Our atention time are between 6:00 and 19:00</span>
        </div>
        <div className="input-container-textarea">
          <label htmlFor="consultation">Reason of consultation:</label>
          <textarea
            name="consultationReasons"
            id="consultation"
            className="input-container__textarea"
            onChange={handleChangeForm}
            value={appointmentForm.consultationReasons}
            maxLength={200}
          ></textarea>
        </div>
        <div className="buttons-container">
          <Button
            type="submit"
            color="info"
            className="button-container__back"
            onClick={handleGoBack}
          >
            <BsArrowLeftShort size={20} /> Back
          </Button>
          <Button
            type="submit"
            color="info"
            className="button-container__next-button"
            onClick={handleOnsubmit}
          >
            Checkout
          </Button>
        </div>
      </form>
    </section>
  );
};

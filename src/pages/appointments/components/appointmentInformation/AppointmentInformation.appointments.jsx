import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Button } from '@components/buttons';
import { useAppointmentContext } from '../../context';
import './appointmentInformation.appointments.scss';

export const AppointmentInformation = () => {
  const { setShowSecondForm, locations, doctorsByArea } = useAppointmentContext();
  const [countrySelected, setCountrySelected] = useState('Colombia');
  const [citySelected, setCitySelected] = useState([
    {
      id: '1',
      city: 'Bogotá',
      address: "Carrer d'Apuntadors, 3",
    },
    {
      id: '2',
      city: 'Cali',
      address: "Parque de Negocios Mas Blau II, Carrer de l'Alta Ribagorca 18",
    },
    {
      id: '3',
      city: 'Medellin',
      address: 'Avda Gabriel Roca, 14, local 2B',
    },
    {
      id: '4',
      city: 'Bucaramanga',
      address: 'Calle de Blasco Ibanez, 1',
    },
    {
      id: '5',
      city: 'Pereira',
      address: 'Calle Valdegarea, 12',
    },
  ]);
  const [areaSelected, setAreaSelected] = useState('General surgeon');
  const [doctorSelected, setDoctorSelected] = useState([
    { id: '4', name: 'Dr. Gail Parrish' },
    { id: '6', name: 'Dr. Matie Delgado' },
  ]);

  useEffect(() => {
    const citys = locations.find((element) => element.country === countrySelected);
    setCitySelected(citys.locations);
  }, [countrySelected]);

  useEffect(() => {
    const docs = doctorsByArea.find((element) => element.area === areaSelected);
    const { doctors } = docs;
    setDoctorSelected(doctors);
  }, [areaSelected]);

  const handleGoBack = (e) => {
    e.preventDefault();
    setShowSecondForm(false);
  };
  const handleSelectCountry = (e) => {
    return setCountrySelected(e.currentTarget.value);
  };

  const handleSpeciality = (e) => {
    return setAreaSelected(e.target.value);
  };

  return (
    <section className="appointments-section-2">
      <h2 className="appointments-section-2__title">Appointment Information</h2>
      <form className="appointments-section-2__form" data-aos="fade-right">
        <div className="input-container">
          <label htmlFor="speciality">Speciality:</label>
          <div className="select-container">
            <select
              name="speciality"
              id="speciality"
              className="input-container__input"
              onChange={handleSpeciality}
            >
              {doctorsByArea.map((e) => {
                console.log(doctorsByArea);
                return (
                  <option key={e.area} value={e.area}>
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
            <select name="preferredDoctor" id="preferredDoctor" className="input-container__input">
              {doctorSelected?.map((e) => {
                console.log(e);
                return (
                  <option key={e.id} value={e.name}>
                    {e.name}
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
              name="country"
              id="country"
              className="input-container__input"
              onChange={handleSelectCountry}
            >
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
            <select name="city" id="city" className="input-container__input">
              {citySelected.map((element) => {
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
              selected={new Date()}
              dateFormat="dd/MM/yyyy"
              name="dateAppointment"
              className="input-container__date"
            />
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="timeAppointment">Time of Appointment:</label>
          <div className="select-container-clock">
            <TimePicker
              name="patientBirth"
              id="timeAppointment"
              format="h:m"
              disableClock
              maxTime="19:00:00"
              minTime="6:00:00"
              openClockOnFocus={false}
              className="input-container__clock"
            />
          </div>
        </div>
        <div className="input-container-textarea">
          <label htmlFor="consultation">Reason of consultation:</label>
          <textarea
            name="consultationReason"
            id="consultation"
            className="input-container__textarea"
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
          <Button type="submit" color="info" className="button-container__next-button">
            Checkout
          </Button>
        </div>
      </form>
    </section>
  );
};

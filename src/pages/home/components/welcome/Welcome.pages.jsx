import { useState } from 'react';
import Calendar from 'react-calendar';
import { FaAmbulance } from 'react-icons/fa';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import './welcome.pages.scss';
import './calendar.components.scss';

export const Welcome = () => {
  const [date, setDate] = useState(new Date());

  const onChangeDate = (val) => {
    setDate(val);
  };

  return (
    <section className="welcome-container">
      <article className="welcome">
        <div className="welcome-info">
          <h2 className="welcome-info__title">Welcome to mebid</h2>
          <h3 className="welcome-info__subtitle">We are by your side in any services</h3>
          <p className="welcome-info__paragraph">
            We provide all kinds of medical services to our patients according to their daily needs starting from
            special conditions
          </p>
          <div className="icons-container">
            <div className="ambulance-icon__wrap">
              <div className="ambulance-icon">{<FaAmbulance size={25} color="white" />}</div>
              <span className="ambulance-message">Urgent Care</span>
            </div>
            <div className="first-care-icon__wrap">
              <div className="first-care-icon">
                <FaHandHoldingMedical size={25} color="white" />
              </div>
              <span className="first-care-message">Primary Care</span>
            </div>
          </div>
        </div>
        <form className="welcome-form">
          <h2 className="welcome-form__title">Book appointment</h2>
          <p className="welcome-form__paragraph">Fillup the form to make an appointment with the doctor</p>
          <Calendar onChange={onChangeDate} value={date} minDate={new Date()} calendarType="US" />
          <section className="welcome-form-inputs">
            <input type="text" placeholder="Full name" className="welcome-form__input-name" />
            <input type="email" placeholder="Email address" className="welcome-form__input-email" />
            <input
              type="date"
              min={new Date()}
              value={date}
              onChange={onChangeDate}
              className="welcome-form__input-date"
            />
            <div className="welcome-form__select-department-container">
              <select name="" className="welcome-form__select-department">
                <option defaultValue="Department" hidden className="welcome-form__select-department--option">
                  Department
                </option>
              </select>
            </div>
            <div className="welcome-form__select-doctor-container">
              <select name="" className="welcome-form__select-doctor">
                <option defaultValue="Select Doctor" hidden className="welcome-form__select-doctor--option">
                  Select Doctor
                </option>
              </select>
            </div>
            <input type="text" placeholder="Your message" className="welcome-form__input-message" />
            <button className="welcome-form__button-submit">
              Book appointment <span className="arrow-button">{<BsArrowRight size={18} />}</span>
            </button>
          </section>
        </form>
      </article>
    </section>
  );
};

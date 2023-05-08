import { BsArrowRight } from 'react-icons/bs';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from '@components/buttons';
import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.home.scss';
import './formAppointments.home.scss';

export const FormAppointments = () => {
  const [date, setDate] = useState(new Date());

  const onChangeDate = (e) => {};

  const handlerAlert = (e) => {
    TransformStream();
  };

  return (
    <form className="welcome-form">
      <h2 className="welcome-form__subtitle">Book appointment</h2>
      <p className="welcome-form__paragraph">
        Fillup the form to make an appointment with the doctor
      </p>
      <Calendar onChange={onChangeDate} value={date} minDate={new Date()} calendarType="US" />
      <section className="welcome-form-inputs">
        <input
          type="text"
          placeholder="Full name"
          className="welcome-form__input-name"
          required
          minLength="3"
          pattern="[A-Za-z\s]{3,}"
        />
        <input
          type="email"
          placeholder="Email address"
          className="welcome-form__input-email"
          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
          required
        />
        <div className="welcome-form__input-date">
          <DatePicker
            selected={date}
            onChange={onChangeDate}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className="welcome-form__input-date-component"
          />
        </div>
        <div className="welcome-form__select-department-container">
          <select name="" className="welcome-form__select-department" required>
            <option
              defaultValue="Department"
              hidden
              className="welcome-form__select-department--option"
            >
              Department
            </option>
          </select>
        </div>
        <div className="welcome-form__select-doctor-container">
          <select name="" className="welcome-form__select-doctor" required>
            <option
              defaultValue="Select Doctor"
              hidden
              className="welcome-form__select-doctor--option"
            >
              Select Doctor
            </option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Your message"
          className="welcome-form__input-message"
          required
          maxLength="50"
        />
        <Button variant="outline" color="info" onClick={handlerAlert}>
          Book appointment{' '}
          <span className="arrow-button">
            <BsArrowRight size={18} />
          </span>
        </Button>
      </section>
    </form>
  );
};

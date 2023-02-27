import { BiCalendar } from 'react-icons/bi';
import './appointmentButton.components.css';

export const AppointmentButton = () => {
  return (
    <button className="appointment-button">
      <span className="appointment-button__icon">{<BiCalendar size={21} />}</span>{' '}
      <p className="appointment-button__text">Appointment</p>
    </button>
  );
};

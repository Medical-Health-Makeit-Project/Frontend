import { BiCalendar } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '@routes';
import './appointmentButton.components.scss';

export const AppointmentButton = () => {
  return (
    <Link to={PrivateRoutes.APPOINTMENTS} className="appointment-button">
      <span className="appointment-button__icon">
        <BiCalendar size={21} />
      </span>{' '}
      <p className="appointment-button__text">Appointment</p>
    </Link>
  );
};

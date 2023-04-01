import { PropTypes } from 'prop-types';
import appointmentSvg from '@assets/appointment-checkout.svg';
import './appointment.checkout.scss';

export const Appointment = ({ appointmentData, patientData, id }) => {
  const {
    specialitySelected,
    preferredDoctorSelected,
    appointmentPrice,
    appointmentTime,
    appointmentDate,
  } = appointmentData;
  const { patientName, patientLastname } = patientData;
  return (
    <article className="appointment-checkout">
      <div className="appointment-info">
        <div className="appointment__img-container">
          <img src={appointmentSvg} alt="appointment" className="appointment__img" />
        </div>
        <section className="appointment-data">
          <div className="appointment-data__name">
            {specialitySelected} - {`${patientName} ${patientLastname}`}
          </div>
          <div className="appointment-data__label">Doctor: {preferredDoctorSelected}</div>
          <div className="appointment-data__price">Date: {appointmentDate}</div>
          <div className="appointment-data__price">Time: {appointmentTime}</div>
        </section>
      </div>
      <section className="footer-appointment-checkout">
        <div className="resume-appointment-checkout">
          <div className="appointment__total">TOTAL: ${appointmentPrice.toFixed(2)}</div>
        </div>
      </section>
    </article>
  );
};

Appointment.prototypes = {
  id: PropTypes.string,
  appointmentData: PropTypes.shape({
    appointmentDate: PropTypes.string,
    appointmentPrice: PropTypes.string,
    specialitySelected: PropTypes.string,
    preferredDoctorSelected: PropTypes.string,
    countrySelected: PropTypes.string,
    citySelected: PropTypes.string,
    appointmentDate: PropTypes.string,
    appointmentTime: PropTypes.string,
    consultationReasons: PropTypes.string,
    appointmentPrice: PropTypes.number,
  }),
  patientData: PropTypes.shape({
    patientName: PropTypes.string,
    patientLastname: PropTypes.string,
    patientId: PropTypes.string,
    patientEmail: PropTypes.string,
    patientPhone: PropTypes.string,
    isAdult: PropTypes.string,
    patientGender: PropTypes.string,
    patientBirth: PropTypes.string,
  }),
};

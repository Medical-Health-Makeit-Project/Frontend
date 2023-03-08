import { FaAmbulance, FaHandHoldingMedical } from 'react-icons/fa';
import { FormAppointments } from './components/FormAppointments.home';
import './welcome.home.scss';

export const Welcome = () => {
  return (
    <section className="welcome-container">
      <article className="welcome">
        <div className="welcome-info">
          <h2 className="welcome-info__title">Welcome to mebid</h2>
          <h3 className="welcome-info__subtitle">
            We are by your side in any services
          </h3>
          <p className="welcome-info__paragraph">
            We provide all kinds of medical services to our patients according
            to their daily needs starting from special conditions
          </p>
          <div className="icons-container">
            <div className="ambulance-icon__wrap">
              <div className="ambulance-icon">
                <FaAmbulance size={25} color="white" />
              </div>
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
        <FormAppointments />
      </article>
    </section>
  );
};

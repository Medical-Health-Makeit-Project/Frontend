import logo from '@assets/logo.png';
import { PropTypes } from 'prop-types';
import { Cart } from '../cart';
import { NavigationLink } from '../navigationLink';
import { AppointmentButton } from '../appointmentButton';
import './navigationDesktop.components.scss';

export const NavigationDesktop = ({ options }) => {
  const [home, profile, ourDoctors, shop, appointments, signin] = options;

  const navigation = [home, profile, ourDoctors, shop];

  return (
    <section className="container-nav">
      <nav className="nav">
        <div className="container-logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="desktop-navigation-options">
          {navigation.map((element) => {
            return (
              <NavigationLink key={element} text={element} isButton={false} />
            );
          })}
        </div>
        <div className="desktop-navigation-actions">
          <Cart size={26} />
          <AppointmentButton />
        </div>
      </nav>
    </section>
  );
};

NavigationDesktop.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

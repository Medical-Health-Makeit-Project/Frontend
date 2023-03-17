import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Cart } from '../cart';
import { NavigationLink } from '../navigationLink';
import { AppointmentButton } from '../appointmentButton';
import logo from '@assets/logo.png';
import './navigationDesktop.components.scss';

export const NavigationDesktop = ({ options }) => {
  const [home, profile, ourDoctors, shop, appointments, login, logout] =
    options;

  const navigation = [home, ourDoctors, shop, login];

  return (
    <section className="container-nav">
      <nav className="nav">
        <div className="container-logo">
          <Link to="/home">
            <img src={logo} alt="logo" className="logo" />
          </Link>
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

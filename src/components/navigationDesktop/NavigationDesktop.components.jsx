import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { logout } from '@redux/features';
import { Link } from 'react-router-dom';
import { BiLogIn } from 'react-icons/bi';
import { Cart } from '../cart';
import { useNavigate } from 'react-router-dom';
import { NavigationLink } from '../navigationLink';
import { AppointmentButton } from '../appointmentButton';
import { Button } from '@components/buttons';
import { useIsLoggedOut } from '@hooks';
import { findAndDestroy } from '@utils/tools';
import { PublicRoutes } from '@routes';
import logo from '@assets/logo.png';
import './navigationDesktop.components.scss';

export const NavigationDesktop = ({ options }) => {
  const navigate = useNavigate();
  const { isLoggedOut } = useIsLoggedOut();

  const dispatch = useDispatch();

  const handleAccessButton = () => {
    dispatch(logout());
    return navigate(PublicRoutes.LOGIN);
  };

  const filteredOptions = findAndDestroy(options, 'Login');

  return (
    <section className="container-nav">
      <nav className="nav">
        <div className="container-logo">
          <Link to="/home">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="desktop-navigation-options">
          {filteredOptions.map((element) => {
            return (
              <NavigationLink key={element} text={element} isButton={false} />
            );
          })}
        </div>
        <div className="desktop-navigation-actions">
          <Cart size={26} />
          <AppointmentButton />
          <Button
            className="desktop-navigation-actions__login-logout"
            onClick={handleAccessButton}
          >
            <BiLogIn size="20" />
            {isLoggedOut ? 'Login' : 'Logout'}
          </Button>
        </div>
      </nav>
    </section>
  );
};

NavigationDesktop.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

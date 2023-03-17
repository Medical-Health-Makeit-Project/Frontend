import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import logo from '@assets/logo.png';
import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';
import { Cart } from '../cart';
import { NavigationPanel } from './NavigationPanel.navigationMobile';
import './navigation.components.scss';

export const NavigationMobile = ({ options }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handlerShowMenu = () => {
    setShowMenu(!showMenu);
  };

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
        <div className="mobile-menu">
          <div className="mobile-actions">
            <Cart size={23} />
            <button type="button" onClick={handlerShowMenu}>
              <HiMenu size={25} />
            </button>
          </div>
          <NavigationPanel
            panelOptions={navigation}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        </div>
      </nav>
    </section>
  );
};

NavigationMobile.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

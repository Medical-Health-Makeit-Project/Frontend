import { HiMenu } from 'react-icons/hi';
import logo from '@assets/logo.png';
import { useState } from 'react';
import { Cart } from '../cart';
import { NavigationPanel } from './NavigationPanel.navigationMobile';
import './navigation.components.scss';

export const NavigationMobile = ({ options }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handlerShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section className="container-nav">
      <nav className="nav">
        <div className="container-logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="mobile-menu">
          <div className="mobile-actions">
            <Cart size={23} />
            <button type="button" onClick={handlerShowMenu}>
              <HiMenu size={25} />
            </button>
          </div>
          <NavigationPanel
            panelOptions={options}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        </div>
      </nav>
    </section>
  );
};

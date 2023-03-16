import { HeaderInfo } from '../headerInfo';
import { NavigationMobile } from '../navigationMobile';
import { NavigationDesktop } from '../navigationDesktop';
import './header.components.scss';

/*
  Si el usuario tiene rol de doctor no se le debe
  mostrar el boton 'Our Doctors'
*/

export const Header = () => {
  const navigationOptions = [
    'Home',
    'Profile',
    'Our Doctors',
    'Shop',
    'Appointments',
    'Login',
    'Logout',
  ];
  return (
    <header className="header">
      <HeaderInfo />
      <div className="navigation-mobile">
        <NavigationMobile options={navigationOptions} />
      </div>
      <div className="navigation-desktop">
        <NavigationDesktop options={navigationOptions} />
      </div>
    </header>
  );
};

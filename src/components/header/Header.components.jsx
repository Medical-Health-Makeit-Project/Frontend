import { useSelector } from 'react-redux';
import { HeaderInfo } from '../headerInfo';
import { NavigationMobile } from '../navigationMobile';
import { NavigationDesktop } from '../navigationDesktop';
import { roles } from '@utils/roles';
import { emptyObject } from '@utils/tools';
import './header.components.scss';

/*
  Si el usuario tiene rol de doctor no se le debe
  mostrar el boton 'Our Doctors'
*/

export const Header = () => {
  const user = useSelector((state) => state.auth);

  const navigationOptions = emptyObject(user)
    ? ['Home', 'Our Doctors', 'Shop', 'Login']
    : user.role === roles.USER || user.role === roles.ADMIN
    ? ['Home', 'Profile', 'Our Doctors', 'Shop', 'Appointments']
    : user.role === roles.DOCTOR
    ? ['Home', 'Profile']
    : [];

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

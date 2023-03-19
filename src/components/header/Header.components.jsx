import { useSelector } from 'react-redux';
import { HeaderInfo } from '../headerInfo';
import { NavigationMobile } from '../navigationMobile';
import { NavigationDesktop } from '../navigationDesktop';
import { roles } from '@utils/roles';
import { emptyObject } from '@utils/tools';
import './header.components.scss';

export const Header = () => {
  const user = useSelector((state) => state.auth);

  const navigationOptions =
    emptyObject(user) || user === 'Unauthorized'
      ? ['Home', 'Our-Doctors', 'Shop', 'Login']
      : user.role === roles.USER || user.role === roles.ADMIN
      ? ['Profile', 'Our-Doctors', 'Shop']
      : user.role === roles.DOCTOR
      ? ['Profile', 'Shop']
      : ['Our-Doctors', 'Shop', 'Login'];

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

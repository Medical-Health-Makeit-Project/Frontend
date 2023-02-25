import { HeaderInfo } from '../headerInfo';
import { Navigation } from '../navigation';
// import { NavigationDesktop } from '../navigationDesktop';
import './header.components.css';

export const Header = () => {
  const navigationOptions = ['HOME', 'OUR DOCTORS', 'SHOP', 'CART', 'APPOINTMENTS', 'SIGN IN'];
  return (
    <header className="header">
      {<HeaderInfo />}
      <div className="navigation-mobile">
        {<Navigation home={navigationOptions[0]} ourDoctors={navigationOptions[1]} />}
      </div>
      {/* <div className="navigation-desktop">
        {<NavigationDesktop  />}
      </div> */}
    </header>
  );
};

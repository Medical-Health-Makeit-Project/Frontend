import { Cart } from '../cart';
import { NavigationLink } from '../navigationLink';
import { AppointmentButton } from '../appointmentButton';
import logo from '../../assets/logo.png';
import './navigationDesktop.components.scss';

export const NavigationDesktop = ({ options }) => {
  let [home, profile, ourDoctors, shop, appointments, signin] = options;

  let navigation = [home, profile, ourDoctors, shop];

  return (
    <section className="container-nav">
      <nav className="nav">
        <div className="container-logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="desktop-navigation-options">
          {navigation.map((element) => {
            return <NavigationLink key={element} text={element} isButton={false} />;
          })}
        </div>
        <div className="desktop-navigation-actions">
          {<Cart size={26} />}
          {<AppointmentButton />}
        </div>
      </nav>
    </section>
  );
};

import logo from '../../assets/logo.png';
import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';
import './navigation.components.css';

export const Navigation = ({ ...props }) => {
  const [showMenu, setShowMenu] = useState(false);

  console.log(props);
  let menu;
  let menuMask;
  if (showMenu) {
    menu = (
      <ul className="mobile-menu__ul ">
        {navigationOptions.map((option) => {
          return (
            <li key={option} className="mobile-menu__li">
              {option}
            </li>
          );
        })}
      </ul>
    );

    menuMask = <div className="mobile-menu__mask" onClick={() => setShowMenu(false)}></div>;
  }

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
          <i onClick={handlerShowMenu}>{<HiMenu size={25} />}</i>
          {menuMask}
          {menu}
        </div>
      </nav>
    </section>
  );
};

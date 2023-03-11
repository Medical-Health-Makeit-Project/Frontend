/* eslint-disable jsx-a11y/click-events-have-key-events */
import { PropTypes } from 'prop-types';
import { NavigationLink } from '../navigationLink';
import './navigationPanel.navigationMobile.scss';

export const NavigationPanel = ({ panelOptions, showMenu, setShowMenu }) => {
  const positionPanel = showMenu ? 'left-menu' : 'left-full-menu';
  const opacityBlackout = showMenu
    ? 'mobile-menu__mask-opacity-1'
    : 'mobile-menu__mask-opacity-0';
  const positionBlackout = showMenu
    ? 'mobile-menu__mask-left-0'
    : 'mobile-menu__mask-right';

  return (
    <div
      role="button"
      className={`mobile-menu__mask ${opacityBlackout} ${positionBlackout}`}
      onClick={() => setShowMenu(false)}
      tabIndex="0"
    >
      <ul className={`mobile-menu__ul ${positionPanel}`}>
        {panelOptions.map((option) => {
          return (
            <li key={option} className="mobile-menu__li">
              <NavigationLink text={option} isButton={false} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

NavigationPanel.propTypes = {
  panelOptions: PropTypes.oneOfType([PropTypes.string]).isRequired,
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
};

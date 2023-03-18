/* eslint-disable jsx-a11y/click-events-have-key-events */
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '@redux/features';
import { useIsLoggedOut } from '@hooks';
import { PublicRoutes } from '@routes';
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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedOut } = useIsLoggedOut();

  const handleAccessButton = () => {
    dispatch(logout());
    return navigate(PublicRoutes.LOGIN);
  };

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
        <li className="mobile-menu__li">
          <div onClick={handleAccessButton}>
            {isLoggedOut ? 'Login' : 'Logout'}
          </div>
        </li>
      </ul>
    </div>
  );
};

NavigationPanel.propTypes = {
  panelOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
};

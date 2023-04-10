import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { PublicRoutes, PrivateRoutes } from '@routes';
import './navigationLink.components.scss';

export const NavigationLink = ({ text, isButton }) => {
  const regex = /\s/i;
  const link = text.replace(regex, '-').toLowerCase();
  const route =
    text === 'Your Panel'
      ? `${PrivateRoutes.ADMIN.INDEX}/${PrivateRoutes.ADMIN.HOME}`
      : text === 'Home'
      ? PublicRoutes.HOME
      : `/home/${link}`;

  return isButton ? (
    <Link to={route} className="button">
      {text}
    </Link>
  ) : (
    <Link to={route} className="text">
      {text}
    </Link>
  );
};

NavigationLink.propTypes = {
  text: PropTypes.string.isRequired,
  isButton: PropTypes.bool.isRequired,
};

import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './navigationLink.components.scss';

export const NavigationLink = ({ text, isButton }) => {
  const regex = /\s/i;
  const link = text.replace(regex, '-').toLowerCase();

  return isButton ? (
    <Link to={`${text === 'Home' ? '/home' : `/home/${link}`}`} className="button">
      {text}
    </Link>
  ) : (
    <Link to={`${text === 'Home' ? '/home' : `/home/${link}`}`} className="text">
      {text}
    </Link>
  );
};

NavigationLink.propTypes = {
  text: PropTypes.string.isRequired,
  isButton: PropTypes.bool.isRequired,
};

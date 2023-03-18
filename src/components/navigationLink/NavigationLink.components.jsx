import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './navigationLink.components.scss';

export const NavigationLink = ({ text, isButton }) => {
  return isButton ? (
    <Link
      to={`${text === 'Home' ? '/home' : `/home/${text.toLowerCase()}`}`}
      className="button"
    >
      {text}
    </Link>
  ) : (
    <Link
      to={`${text === 'Home' ? '/home' : `/home/${text.toLowerCase()}`}`}
      className="text"
    >
      {text}
    </Link>
  );
};

NavigationLink.propTypes = {
  text: PropTypes.string.isRequired,
  isButton: PropTypes.bool.isRequired,
};

import { Link } from 'react-router-dom';
import './navigationLink.components.scss';

export const NavigationLink = ({ text, link, isButton }) => {
  return isButton ? (
    <Link
      to={`${text === 'Home' ? 'home' : `home/${text.toLowerCase()}`}`}
      className="button"
    >
      {text}
    </Link>
  ) : (
    <Link
      to={`${text === 'Home' ? 'home' : `home/${text.toLowerCase()}`}`}
      className="text"
    >
      {text}
    </Link>
  );
};

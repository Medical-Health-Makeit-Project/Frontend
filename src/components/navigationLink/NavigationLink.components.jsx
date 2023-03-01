import './navigationLink.components.scss';

export const NavigationLink = ({ text, link, isButton }) => {
  return isButton ? (
    <a href="#" className="button">
      {text}
    </a>
  ) : (
    <a href="#" className="text">
      {text}
    </a>
  );
};

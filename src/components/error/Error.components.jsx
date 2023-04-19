import errorImage from '@assets/computer-troubleshooting.svg';
import './error.components.scss';

export const Error = ({ error = 'Please call to your nearest dev', status = 'error unknown' }) => {
  return (
    <div className="error-container">
      <div className="error-image-container">
        <img src={errorImage} alt="error" className="error-image-container__image" />
      </div>
      <div>
        <p className="error-container__title">SOMETHING WENT WRONG</p>
        <ul className="error-container__ul">
          <li className="error-container__li">{error}</li>
          <li className="error-container__li">{status}</li>
        </ul>
      </div>
    </div>
  );
};

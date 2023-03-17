import { Link } from 'react-router-dom';
import { Button } from '@components/buttons';
import unauthorized from '@assets/errorUnauthorized.svg';
import './unauthorized.page.scss';

export const Unauthorized = () => {
  return (
    <section className="unauthorized">
      <Link to="/home">
        <Button color="info">Take me Back home!</Button>
      </Link>
      <div className="unauthorized-img-container">
        <img src={unauthorized} alt="Unauthorized route" />
      </div>
    </section>
  );
};

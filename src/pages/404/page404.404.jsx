import { Link } from 'react-router-dom';
import logo from '@assets/logo.png';
import { Button } from '@components/buttons';
import { PublicRoutes } from '@routes/';

import './page404.404.scss';

export const Page404 = () => {
  return (
    <section className="main__404">
      <picture className="logo__container">
        <img src={logo} alt="mebid logo" />
      </picture>
      <div className="info__404">
        <h3>404</h3>
        <p>THE PAGE YOU WERE LOOKING FOR DOES NOT EXIST</p>
      </div>
      <div className="home__button-container">
        <Link to={PublicRoutes.HOME}>
          <Button variant="solid" color="info">
            Go to home
          </Button>
        </Link>
      </div>
    </section>
  );
};

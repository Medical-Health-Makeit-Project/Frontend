import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@components/buttons';
import { PrivateRoutes } from '@routes';
import './welcome.administration.scss';

export const Welcome = () => {
  const { name } = useSelector((state) => state.auth);

  return (
    <section className="admin-welcome">
      <h2 className="admin-welcome__title">
        WELCOME TO
        <span className="admin-welcome__mebid">
          MEBID<span className="admin-welcome__username">{name.toUpperCase()}</span>
        </span>
      </h2>
      <h3 className="admin-welcome__paragraph">What do you want to see:</h3>
      <div className="admin-welcome__buttons">
        <Link to={`${PrivateRoutes.ADMIN.INDEX}/${PrivateRoutes.ADMIN.DOCTORS}`}>
          <Button variant="outline" color="info" className="admin-welcome__button">
            Doctors
          </Button>
        </Link>
        <Link to={`${PrivateRoutes.ADMIN.INDEX}/${PrivateRoutes.ADMIN.PRODUCTS}`}>
          <Button variant="outline" color="info" className="admin-welcome__button">
            Products
          </Button>
        </Link>
      </div>
    </section>
  );
};

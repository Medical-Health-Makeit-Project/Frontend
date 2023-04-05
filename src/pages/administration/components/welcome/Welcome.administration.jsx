import { Button } from '@components/buttons';
import './welcome.administration.scss';
import { useSelector } from 'react-redux';

export const Welcome = () => {
  const { username } = useSelector((state) => state.auth);
  return (
    <section className="admin-welcome">
      <h2 className="admin-welcome__title">
        WELCOME TO <span>MEBID</span> {username.toUpperCase()}
      </h2>
      <h3 className="admin-welcome__paragraph">What do you want to see:</h3>
      <div className="admin-welcome__buttons">
        <Button variant="outline" color="info" className="button">
          Doctors
        </Button>
        <Button variant="outline" color="info" className="button">
          Products
        </Button>
      </div>
    </section>
  );
};

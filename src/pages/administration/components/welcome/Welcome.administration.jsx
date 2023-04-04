import { Button } from '@components/buttons';
import './welcome.administration.scss';

export const Welcome = () => {
  return (
    <section className="admin-welcome">
      <h2 className="admin-welcome__title">
        WELCOME TO <span>MEBID</span>
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

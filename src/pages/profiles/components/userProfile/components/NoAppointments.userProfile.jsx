import { Link } from 'react-router-dom';
import { PrivateRoutes } from '@routes/';
import { Button } from '@components/buttons';

export const NoAppointments = () => {
  return (
    <div className="appointments-none">
      <p>You don't have assigned appointments yet</p>
      <Link to={PrivateRoutes.APPOINTMENTS}>
        <Button variant="solid" color="info">
          Book an appointment
        </Button>
      </Link>
    </div>
  );
};

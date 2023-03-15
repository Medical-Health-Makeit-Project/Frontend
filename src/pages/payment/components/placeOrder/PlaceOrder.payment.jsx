import { Button } from '@components/buttons';
import { Link } from 'react-router-dom';
import './placeOrder.payment.scss';

export const PlaceOrder = () => {
  return (
    <div className="button-payment">
      <Link className="link">
        <Button color="danger" className="button-checkout">
          Place order
        </Button>
      </Link>
    </div>
  );
};

import { Button } from '@components/buttons';
import { Link } from 'react-router-dom';
import './buttonCheckout.checkout.scss';

export const ButtonCheckout = () => {
  return (
    <div className="button-checkout">
      <Link>
        <Button color="danger" className="button-checkout">
          Checkout
        </Button>
      </Link>
    </div>
  );
};

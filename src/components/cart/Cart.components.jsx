import { PropTypes } from 'prop-types';
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { errorMessage } from '@utils/toastify';
import { PrivateRoutes } from '@routes';

import './cart.components.scss';

export const Cart = ({ size }) => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.products.length < 0 || cart.appointments.length < 0)
      return errorMessage('Your cart is empty');
    return navigate(PrivateRoutes.CHECKOUT);
  };

  let quantityToShow =
    !cart.appointments.length && !cart.products.length
      ? 0
      : cart.appointments.length + cart.products.length;

  return (
    <>
      <div className="cart-container" onClick={handleCheckout}>
        <div className="circle">
          <span className="circle__content">{quantityToShow}</span>
        </div>
        <IoCartOutline size={size} color="black" />
      </div>
    </>
  );
};

Cart.propTypes = {
  size: PropTypes.number.isRequired,
};

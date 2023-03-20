import { PropTypes } from 'prop-types';
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { errorMessage } from '@utils/toastify';
import { PrivateRoutes } from '@routes';

import './cart.components.scss';

export const Cart = ({ size }) => {
  const products = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!products.length) return errorMessage('Your cart is empty');
    return navigate(PrivateRoutes.CHECKOUT);
  };

  return (
    <>
      <div className="cart-container" onClick={handleCheckout}>
        <div className="circle">
          <span className="circle__content">{products.length}</span>
        </div>
        <IoCartOutline size={size} color="black" />
      </div>
    </>
  );
};

Cart.propTypes = {
  size: PropTypes.number.isRequired,
};

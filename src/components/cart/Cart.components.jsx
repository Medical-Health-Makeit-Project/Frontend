import { IoCartOutline } from 'react-icons/io5';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import './cart.components.scss';

export const Cart = ({ size }) => {
  const products = useSelector((state) => state.cart);
  console.log(products);
  return (
    <>
      {!!products.length && (
        <div href="#" className="cart-container">
          <div className="circle">
            <span className="circle__content">{products.length}</span>
          </div>
          <IoCartOutline size={size} color="black" />
        </div>
      )}
    </>
  );
};

Cart.propTypes = {
  size: PropTypes.number.isRequired,
};

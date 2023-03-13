import { IoCartOutline } from 'react-icons/io5';
import './cart.components.scss';
import { PropTypes } from 'prop-types';
/*
  mostrar el circulo solo cuando hay productos agregados al carrito
*/
export const Cart = ({ size }) => {
  return (
    <div href="#" className="cart-container">
      <div className="circle">
        <span className="circle__content">5</span>
      </div>
      <IoCartOutline size={size} color="black" />
    </div>
  );
};

Cart.propTypes = {
  size: PropTypes.number.isRequired,
};

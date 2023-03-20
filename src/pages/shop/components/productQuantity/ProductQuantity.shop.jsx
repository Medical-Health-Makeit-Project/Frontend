import { PropTypes } from 'prop-types';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { Icon } from '@components/Icon';
import { useQuantity, useStock } from '../../hooks';
import './productQuantity.shop.scss';
import { useEffect } from 'react';

export const ProductQuantity = ({ stock, quantityRetriever, resetQuantity }) => {
  const [quantity, handlerMinus, handlerPlus] = useQuantity(resetQuantity);
  const [isOutOfStock] = useStock(stock, quantity);
  if (isOutOfStock) {
    toast.error('If you need more of these quantity please contact us.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    toast.clearWaitingQueue();
  }

  useEffect(() => {
    quantityRetriever(quantity);
  }, [quantity]);

  return (
    <section className="select-quantity-container">
      <Icon color="transparent" className="buttonQuantity" onClick={handlerMinus}>
        <BiMinus />
      </Icon>
      <p>{quantity}</p>
      <Icon
        color="transparent"
        className="buttonQuantity"
        onClick={() => handlerPlus(isOutOfStock)}
      >
        <BiPlus />
      </Icon>
    </section>
  );
};

ProductQuantity.propTypes = {
  stock: PropTypes.number,
};

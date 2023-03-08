import { useQuantity } from '../../hooks';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import { Icon } from '@components/Icon';
import './productQuantity.shop.scss';

export const ProductQuantity = ({ stock }) => {
  const [quantity, handlerMinus, handlerPlus] = useQuantity();

  return (
    <section className="select-quantity-container">
      <Icon color="transparent" className="buttonQuantity" onClick={handlerMinus}>
        <BiMinus />
      </Icon>
      <p>{quantity}</p>
      <Icon color="transparent" className="buttonQuantity" onClick={handlerPlus}>
        <BiPlus />
      </Icon>
    </section>
  );
};

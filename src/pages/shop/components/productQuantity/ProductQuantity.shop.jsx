import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import { Icon } from '@components/Icon';
import './productQuantity.shop.scss';

export const ProductQuantity = ({ stock }) => {
  return (
    <section className="select-quantity-container">
      <Icon color="transparent" className="buttonQuantity">
        <BiMinus />
      </Icon>
      <p>{0}</p>
      <Icon color="transparent" className="buttonQuantity">
        <BiPlus />
      </Icon>
    </section>
  );
};

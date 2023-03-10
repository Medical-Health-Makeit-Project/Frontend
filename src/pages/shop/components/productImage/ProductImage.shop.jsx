// eslint-disable-next-line import/no-extraneous-dependencies
import { PropTypes } from 'prop-types';
import './productImage.shop.scss';

export const ProductImage = ({
  id,
  image,
  discount,
  product,
  setShowModal,
}) => {
  const handlerOpenModal = () => {
    setShowModal(true);
  };
  return (
    <section className="image-container">
      {!discount || <div className="discount-flag">{discount}%</div>}
      <img
        src={image}
        alt={product}
        className="image-container__image"
        height="280px"
        width="280px"
        onClick={handlerOpenModal}
        onKeyDown={handlerOpenModal}
        role="presentation"
      />
    </section>
  );
};

ProductImage.propTypes = {
  id: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  discount: PropTypes.number,
  setShowModal: PropTypes.func.isRequired,
};

ProductImage.defaultProps = {
  discount: 0,
};

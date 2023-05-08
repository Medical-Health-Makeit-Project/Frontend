import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PropTypes } from 'prop-types';
import { ProductImage } from '../productImage';
import { ProductInfo } from '../productInfo';
import { ProductQuantity } from '../productQuantity';
import { ProductBuyButton } from '../productBuyButton';
import { ProductModal } from '../modal';

import './product.shop.scss';

export const Product = ({
  id,
  product,
  image,
  dose,
  description,
  label,
  discount,
  price,
  stock,
}) => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [quantitySelected, setQuantitySelected] = useState(null);
  const [resetQuantity, setResetQuantity] = useState(false);

  const handlerRetrieveQuantity = (quantity) => {
    setQuantitySelected(quantity);
  };

  const handlerResetQuantity = () => {
    setResetQuantity(!resetQuantity);
  };

  return (
    <>
      <article className="product">
        <ProductImage
          id={id}
          image={image}
          discount={discount}
          product={product}
          setShowModal={onOpen}
        />
        <ProductInfo product={product} dose={dose} price={price} label={label} />
        <ProductQuantity
          stock={stock}
          quantityRetriever={handlerRetrieveQuantity}
          resetQuantity={resetQuantity}
        />
        <ProductBuyButton
          id={id}
          quantity={quantitySelected}
          product={product}
          image={image}
          dose={dose}
          label={label}
          discount={discount}
          price={price}
          stock={stock}
          resetQuantity={handlerResetQuantity}
        />
      </article>
      <ProductModal
        id={id}
        product={product}
        image={image}
        dose={dose}
        description={description}
        label={label}
        price={price}
        stock={stock}
        handlerResetQuantity={handlerResetQuantity}
        handlerRetrieveQuantity={handlerRetrieveQuantity}
        resetQuantity={resetQuantity}
        quantitySelected={quantitySelected}
        discount={discount}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  dose: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  discount: PropTypes.number,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
};

Product.defaultProps = {
  discount: 0,
};

import { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useWindowSize } from '@hooks';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PropTypes } from 'prop-types';
import { ProductImage } from '../productImage';
import { ProductInfo } from '../productInfo';
import { ProductQuantity } from '../productQuantity';
import { ProductBuyButton } from '../productBuyButton';
import { ContentModal } from '../modal';
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const windowSize = useWindowSize();
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
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onEsc
        size={windowSize > 900 ? '3xl' : windowSize > 700 ? '2xl' : windowSize > 400 ? 'md' : 'xs'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            <ContentModal
              description={description}
              dose={dose}
              image={image}
              label={label}
              price={price}
              product={product}
              stock={stock}
              quantityRetriever={handlerRetrieveQuantity}
              resetQuantity={resetQuantity}
            />
          </ModalBody>
          <ModalFooter>
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
          </ModalFooter>
        </ModalContent>
      </Modal>
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

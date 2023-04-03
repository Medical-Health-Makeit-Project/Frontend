import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { PropTypes } from 'prop-types';
import { useWindowSize } from '@hooks';
import { ContentModal } from './components';
import { ProductBuyButton } from '../productBuyButton';

export const ProductModal = ({
  id,
  product,
  image,
  dose,
  description,
  label,
  discount,
  price,
  stock,
  handlerRetrieveQuantity,
  resetQuantity,
  handlerResetQuantity,
  quantitySelected,
  onClose,
  isOpen,
}) => {
  const windowSize = useWindowSize();
  return (
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
  );
};

ProductModal.propTypes = {
  id: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  dose: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  discount: PropTypes.number,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  handlerRetrieveQuantity: PropTypes.func,
  resetQuantity: PropTypes.bool,
  handlerResetQuantity: PropTypes.func,
  quantitySelected: PropTypes.number,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};

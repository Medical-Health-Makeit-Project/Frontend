import { Button } from '@components/Buttons';
import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { postProduct, updateProduct } from '@redux/features/cartSlice.feature';
import { toast } from 'react-toastify';
import './productBuyButton.shop.scss';

const alert = (type) => {
  if (type === 'error') {
    toast.error('You must select a quantity greater than zero', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    toast.clearWaitingQueue();
  }
  if (type === 'success') {
    toast.success('Your product is waiting for you, thank you!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    toast.clearWaitingQueue();
  }
};

export const ProductBuyButton = ({
  id,
  product,
  image,
  dose,
  quantity,
  label,
  discount,
  price,
  stock,
  resetQuantity,
}) => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handlerDispatch = () => {
    if (!quantity) {
      return alert('error');
    }
    const isProduct = products.find((product) => product.id === id);
    if (isProduct) {
      resetQuantity();
      alert('success');
      return dispatch(
        updateProduct({
          id,
          quantity,
        })
      );
    }
    resetQuantity();
    alert('success');
    dispatch(
      postProduct({
        id,
        product,
        image,
        dose,
        quantity,
        label,
        discount,
        price,
        stock,
      })
    );
  };

  return (
    <section className="button-container">
      <Button color="danger" className="button" onClick={handlerDispatch}>
        Add
      </Button>
    </section>
  );
};

ProductBuyButton.propTypes = {
  id: PropTypes.string,
  product: PropTypes.string,
  image: PropTypes.string,
  dose: PropTypes.string,
  quantity: PropTypes.number,
  label: PropTypes.string,
  discount: PropTypes.number,
  price: PropTypes.number,
  stock: PropTypes.number,
};

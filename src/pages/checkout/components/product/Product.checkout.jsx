import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkoutUpdate, deleteProduct } from '@redux/features/cartSlice.feature';
import { toast } from 'react-toastify';
import { Button } from '@components/buttons';
import './product.checkout.scss';

export const Product = ({ id, discount, dose, image, label, price, product, quantity, stock }) => {
  let priceAfterDiscount = (price - (price * discount) / 100).toFixed(2);
  const dispatch = useDispatch();

  const handlerDispacth = (e) => {
    if (!quantity) {
      return dispatch(deleteProduct(id));
    }

    if (quantity > stock) {
      toast.error(
        'You reached the maximum product available. If you need more, please contact us.',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        }
      );
      return toast.clearWaitingQueue();
    }
    if (e.target.dataset.action === '+') {
      if (quantity >= stock) return;
      return dispatch(checkoutUpdate({ id, quantity, isAdd: true }));
    } else {
      return dispatch(checkoutUpdate({ id, quantity, isAdd: false }));
    }
  };

  useEffect(() => {
    if (!quantity) {
      dispatch(deleteProduct({ id }));
    }
  }, [quantity]);

  return (
    <article className="product-checkout">
      <div className="product-info">
        <div className="img-container">
          <img src={image} alt="product" />
        </div>
        <section className="product-data">
          <div className="product-data__name">
            Name: {product} - {dose}
          </div>
          <div className="product-data__label">Label: {label}</div>
          <div className="product-data__price">Price: {price}</div>
        </section>
      </div>
      <section className="footer-product-checkout">
        <div className="resume-product-checkout">
          <div className="quantity">
            <Button color="light" className="buttons" onClick={handlerDispacth} data-action="-">
              -
            </Button>
            <p className="product-quantity__quantity">{quantity}</p>
            <Button color="light" className="buttons" onClick={handlerDispacth} data-action="+">
              +
            </Button>
          </div>
          <div className="total">TOTAL: ${priceAfterDiscount * quantity}</div>
        </div>
      </section>
    </article>
  );
};

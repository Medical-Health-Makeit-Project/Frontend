import { useSelector } from 'react-redux';
import { Product } from '../product';
import { Button } from '@components/buttons';
import { Link } from 'react-router-dom';
import './productsContainer.checkout.scss';

export const ProductsContainer = () => {
  const cart = useSelector((state) => state.cart);
  const priceUnityAfterDiscount = cart.products.map((product) => {
    if (product.discount) {
      return +(
        (product.price - (product.price * product.discount) / 100) *
        product.quantity.toFixed(2)
      );
    }
    return product.price * product.quantity;
  });
  const totalAfterDiscount = priceUnityAfterDiscount.reduce((prev, acc) => (acc += prev), 0);
  const showEmptyMessage =
    cart.products.length <= 0 && cart.appointments.length <= 0 ? true : false;

  return (
    <section className="products-container">
      <div className="link-container">
        <Link to="/home/shop">
          <Button color="info">Keep Buying</Button>
        </Link>
      </div>
      {showEmptyMessage ? (
        <div>Your cart is empty please add some product</div>
      ) : (
        cart.products.map((e) => {
          return <Product key={e.id} {...e} />;
        })
      )}
      {(!!cart.products.length || !!cart.appointments.length) && (
        <div className="total">SUBTOTAL: ${totalAfterDiscount.toFixed(2)}</div>
      )}
    </section>
  );
};

import { useSelector } from 'react-redux';
import { Product } from '../product';
import { Appointment } from '../appointment';
import emptyCart from '@assets/empty-cart-checkout.svg';
import './productsContainer.checkout.scss';

export const ProductsContainer = () => {
  const cart = useSelector((state) => state.cart);
  const productPriceUnityAfterDiscount = cart.products.map((product) => {
    if (product.discount) {
      return +(
        (product.price - (product.price * product.discount) / 100) *
        product.quantity.toFixed(2)
      );
    }
    return product.price * product.quantity;
  });
  const totalAfterDiscount = productPriceUnityAfterDiscount.reduce((prev, acc) => (acc += prev), 0);

  const appointmentsPrice = cart.appointments.reduce(
    (prev, acc) => (prev += acc.appointmentData.appointmentPrice),
    0
  );

  const showEmptyMessage =
    cart.products.length <= 0 && cart.appointments.length <= 0 ? true : false;

  return (
    <section className="checkout__products-container">
      {showEmptyMessage ? (
        <div>
          <div className="empty-cart-container">
            <img src={emptyCart} alt="Empty Cart" className="empty-cart__img" />
          </div>
          <p className="empty-cart__text">Your cart is empty please add some product</p>
        </div>
      ) : cart.products.length && cart.appointments.length ? (
        <div className="products-list">
          <h2 className="products-list__title">PRODUCTS:</h2>
          {cart.products.map((e) => {
            return <Product key={e.id} {...e} />;
          })}
          <h2 className="products-list__title">APPOINTMENTS:</h2>
          {cart.appointments.map((e) => {
            return <Appointment key={e.id} {...e} />;
          })}
        </div>
      ) : cart.appointments.length ? (
        <div className="products-list">
          <h2 className="appointments-list__title">APPOINTMENTS:</h2>
          {cart.appointments.map((e) => {
            return <Appointment key={e.id} {...e} />;
          })}
        </div>
      ) : null}
      {(!!cart.products.length || !!cart.appointments.length) && (
        <div className="total">
          SUBTOTAL: ${(totalAfterDiscount + appointmentsPrice).toFixed(2)}
        </div>
      )}
    </section>
  );
};

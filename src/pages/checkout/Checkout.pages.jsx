import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Heading } from '@components/heading';
import { ProductsContainer } from './components/productContainer';
import { ButtonCheckout } from './components/buttonCheckout';
import headingImage from '@assets/heading-checkout.jpeg';
import './checkout.pages.scss';

export const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const showCheckout = cart.products.length > 0 || cart.appointments.length > 0 ? true : false;
  return (
    <main>
      <Heading title="Checkout" image={headingImage} />
      <ProductsContainer />
      {showCheckout ? <ButtonCheckout /> : null}
    </main>
  );
};

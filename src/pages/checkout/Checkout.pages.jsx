import { useSelector } from 'react-redux';
import { Heading } from '@components/heading';
import { Loading } from '@components/loading';
import { useIsLoading } from '@hooks';
import { ProductsContainer } from './components/productContainer';
import { ButtonCheckout } from './components/buttonCheckout';
import headingImage from '@assets/heading-checkout.jpeg';
import './checkout.pages.scss';

export const Checkout = () => {
  const [isLoading] = useIsLoading();
  const cart = useSelector((state) => state.cart);
  const showCheckout = cart.products.length > 0 || cart.appointments.length > 0 ? true : false;

  if (isLoading) return <Loading />;
  return (
    <main>
      <Heading title="Checkout" image={headingImage} />
      <ProductsContainer />
      {showCheckout ? <ButtonCheckout /> : null}
    </main>
  );
};

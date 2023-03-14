import { Heading } from '@components/heading';
import { ProductsContainer } from './components/productContainer';
import { ButtonCheckout } from './components/buttonCheckout';
import headingImage from '@assets/heading-checkout.jpeg';
import './checkout.pages.scss';

export const Checkout = () => {
  return (
    <main>
      <Heading title="Checkout" image={headingImage} />
      <ProductsContainer />
      <ButtonCheckout />
    </main>
  );
};

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Heading } from '@components/heading';
import { Button } from '@components/buttons';
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
    <main className="checkout">
      <Heading title="Checkout" image={headingImage} />
      <div className="checkout__btn-keep-buying">
        <Link to="/home/shop" className="link-container">
          <Button color="info">Keep Buying</Button>
        </Link>
      </div>
      {cart.products && <ProductsContainer />}

      {showCheckout ? <ButtonCheckout /> : null}
    </main>
  );
};

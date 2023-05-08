import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Heading } from '@components/heading';
import { Loading } from '@components/loading';
import { Form } from './components/form';
import { Info } from './components/info';
import { useIsLoading } from '@hooks';
import headingImage from '@assets/heading-payment.jpeg';
import { STRIPE_PUBLIC_KEY } from '@constants/';
import './payment.pages.scss';

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export const Payment = () => {
  const [isLoading] = useIsLoading();

  if (isLoading) return <Loading />;
  return (
    <main>
      <Heading title="Payment" image={headingImage} />
      <Elements stripe={stripePromise}>
        <Form />
      </Elements>
      <Info />
    </main>
  );
};

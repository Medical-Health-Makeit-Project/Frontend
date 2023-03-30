import { Heading } from '@components/heading';
import { Loading } from '@components/loading';
import { Form } from './components/form';
import { Info } from './components/info';
import { useIsLoading } from '@hooks';
import headingImage from '@assets/heading-payment.jpeg';
import './payment.pages.scss';

export const Payment = () => {
  const [isLoading] = useIsLoading();

  if (isLoading) return <Loading />;
  return (
    <main>
      <Heading title="Payment" image={headingImage} />
      <Form />
      <Info />
    </main>
  );
};

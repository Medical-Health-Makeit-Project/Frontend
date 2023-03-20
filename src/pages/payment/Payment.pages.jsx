import { Heading } from '@components/heading';
import { Form } from './components/form';
import { Info } from './components/info';
import headingImage from '@assets/heading-payment.jpeg';
import './payment.pages.scss';

export const Payment = () => {
  return (
    <main>
      <Heading title="Payment" image={headingImage} />
      <Form />
      <Info />
    </main>
  );
};

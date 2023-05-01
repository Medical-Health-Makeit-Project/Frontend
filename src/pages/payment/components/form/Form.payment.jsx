import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
import { Button } from '@components/buttons';
import { emptyCart } from '@redux/features/cartSlice.feature';
import { PublicRoutes } from '@routes/';
import { errorMessage } from '@utils/toastify/error.toastify';
import { BsCreditCard2Back } from 'react-icons/bs';
import { MdOutlineUpdate } from 'react-icons/md';
import { TbPassword } from 'react-icons/tb';
import { TOKEN } from '@constants';

import './form.payment.scss';

export const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const client = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const { products, appointments } = cart;

  const { username, nationality, email, phone } = client;
  const elements = useElements();
  const stripe = useStripe();

  let data = {};
  let productsSubTotal = [];
  let appointmentsSubTotal = [];

  if (appointments.length) {
    data.appointments = appointments;

    for (let appointment = 0; appointment < appointments.length; appointment++) {
      const finalPrice = appointments[appointment].appointmentData.appointmentPrice;
      appointmentsSubTotal.push(finalPrice);
    }
  }

  if (products.length) {
    data.products = products;
    for (let product = 0; product < products.length; product++) {
      const finalPrice =
        (1 - products[product].discount / 100) *
        products[product].price *
        products[product].quantity;

      productsSubTotal.push(parseFloat(finalPrice.toFixed(2)));
    }
  }
  const totalProducts = productsSubTotal.length ? productsSubTotal.reduce((a, b) => a + b) : 0;
  const totalAppointments = appointmentsSubTotal.length
    ? appointmentsSubTotal.reduce((a, b) => a + b)
    : 0;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem(TOKEN);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardNumberElement),
      });
      if (error) {
        if (error.code === 'authentication_required')
          return errorMessage('The authentication is required');
      }
      const { response } = await axios.post('URL to back', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          paymentMethod,
          data,
          amount: parseFloat(totalAppointments + totalProducts).toFixed(2),
        },
      });
      if (response.status > 399)
        return errorMessage('Something went wrong, the order was rejected!');
      if (response.statusText === 'OK') {
        dispatch(emptyCart());
        Swal.fire({
          icon: 'success',
          title: 'Your order was created!',
          text: false,
          showCancelButton: false,
          confirmButtonText: 'Go to home',
        }).then((result) => {
          if (result.isConfirmed) {
            return navigate(PublicRoutes.HOME);
          }
        });
      }
      return elements.getElement(CardNumberElement).clear();
    } catch (error) {
      errorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form__container-payment">
      <section className="resume__container">
        <div className="sections__container">
          <article className="resume__card resume-first">
            <div>
              <h4>Name</h4>
              <p>{username}</p>
            </div>
            <div>
              <h4>Location</h4>
              <p>{nationality}</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>{email}</p>
            </div>
          </article>
          <article className="resume__card resume-second">
            <div>
              <h4>Phone</h4>
              <p>{phone}</p>
            </div>
            <div>
              <h4>Appointments Sub-total</h4>
              <p>{appointments.length ? `$${totalAppointments}` : '$0'}</p>
            </div>
            <div>
              <h4>Products Sub-total</h4>
              <p>{products.length ? `$${parseFloat(totalProducts.toFixed(2))}` : '$0'}</p>
            </div>
          </article>
        </div>
        <div className="total__container">
          <h4>Total</h4>
          <p>{`$${parseFloat(totalAppointments + totalProducts).toFixed(2)}`}</p>
        </div>
      </section>
      <div className="payment__input-placer">
        <div className="payment__input-container">
          <p>Card number</p>
          <div className="input__element-container">
            <BsCreditCard2Back />
            <CardNumberElement className="card__number-container" />
          </div>
          <p>Expiry</p>
          <div className="input__element-container">
            <MdOutlineUpdate />
            <CardExpiryElement className="card__expiry-container" />
          </div>
          <p>CVC</p>
          <div className="input__element-container">
            <TbPassword />
            <CardCvcElement className="card__cvc-container" />
          </div>
        </div>
        <div className="button__pay-container">
          <Button color="danger" type="submit" className="button__pay">
            Order
          </Button>
        </div>
      </div>
    </form>
  );
};

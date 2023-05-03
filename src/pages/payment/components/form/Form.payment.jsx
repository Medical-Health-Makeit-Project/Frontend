import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';
import { BsCreditCard2Back } from 'react-icons/bs';
import { MdOutlineUpdate } from 'react-icons/md';
import { TbPassword } from 'react-icons/tb';
import Swal from 'sweetalert2';
import { emptyCart } from '@redux/features/cartSlice.feature';
import { Button } from '@components/buttons';
import { paymentService } from '../../services';
import { PublicRoutes } from '@routes/';
import { errorMessage } from '@utils/toastify/error.toastify';
import { TOKEN, PAYMENTS } from '@constants';

import './form.payment.scss';

export const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const client = useSelector((state) => state.auth);
  const reduxCart = useSelector((state) => state.cart);
  const { products, appointments } = reduxCart;

  const { username, nationality, email, phone } = client;
  const elements = useElements();
  const stripe = useStripe();

  let cart = {};
  let productsSubTotal = [];
  let appointmentsSubTotal = [];

  if (appointments.length) {
    cart.appointments = appointments;

    for (let appointment = 0; appointment < appointments.length; appointment++) {
      const finalPrice = appointments[appointment].appointmentData.appointmentPrice;
      appointmentsSubTotal.push(finalPrice);
    }
  }

  if (products.length) {
    cart.products = products;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ACCESS_TOKEN = localStorage.getItem(TOKEN);
    if (!ACCESS_TOKEN) return navigate(PublicRoutes.LOGIN);
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardNumberElement),
      });
      if (error) {
        if (error.code === 'authentication_required')
          return errorMessage('The authentication is required');
      }
      const payload = {
        paymentMethod,
        cart,
        amount: totalAppointments + totalProducts,
      };

      const { data, status } = await paymentService(PAYMENTS, ACCESS_TOKEN, payload);
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
      errorMessage(error.response.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form__container-payment">
      <section className="resume__container">
        <article className="resume__card">
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
          <div className="total__container">
            <h4>Total</h4>
            <p>{`$${parseFloat(totalAppointments + totalProducts).toFixed(2)}`}</p>
          </div>
        </article>
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

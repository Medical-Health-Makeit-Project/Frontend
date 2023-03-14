import { useSelector } from 'react-redux';
import { Product } from '../product';
import { Button } from '@components/buttons';
import { Link } from 'react-router-dom';
import './productsContainer.checkout.scss';

export const ProductsContainer = () => {
  const products = useSelector((state) => state.cart);
  const priceUnityAfterDiscount = products.map((product) => {
    if (product.discount) {
      return +(
        (product.price - (product.price * product.discount) / 100) *
        product.quantity.toFixed(2)
      );
    }
    return product.price * product.quantity;
  });
  const totalAfterDiscount = priceUnityAfterDiscount.reduce(
    (prev, acc) => (acc += prev),
    0
  );
  console.log(totalAfterDiscount);
  return (
    <section className="products-container">
      <div className="link-container">
        <Link to="/home/shop">
          <Button color="info">Keep Buying</Button>
        </Link>
      </div>

      {products.map((e) => {
        return <Product key={e.id} {...e} />;
      })}

      <div className="total">SUBTOTAL: {totalAfterDiscount}</div>
    </section>
  );
};

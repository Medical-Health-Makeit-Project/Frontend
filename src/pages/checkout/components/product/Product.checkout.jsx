import { Button } from '@components/buttons';
import './product.checkout.scss';

export const Product = ({
  id,
  discount,
  dose,
  image,
  label,
  price,
  product,
  quantity,
  stock,
}) => {
  let priceAfterDiscount = (price - (price * discount) / 100).toFixed(2);

  return (
    <article className="product-checkout">
      <div className="product-info">
        <div className="img-container">
          <img src={image} alt="product" />
        </div>
        <section className="product-data">
          <div className="product-data__name">Name: {product}</div>
          <div className="product-data__label">label: {label}</div>
          <div className="product-data__price">price: {price}</div>
        </section>
      </div>
      <section className="footer-product-checkout">
        <div className="resume-product-checkout">
          <div className="quantity">
            <Button color="light" className="buttons">
              -
            </Button>
            <p className="product-quantity__quantity">{quantity}</p>
            <Button color="light" className="buttons">
              +
            </Button>
          </div>
          <div className="total">TOTAL: ${priceAfterDiscount * quantity}</div>
        </div>
      </section>
    </article>
  );
};

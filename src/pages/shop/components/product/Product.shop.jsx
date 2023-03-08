import { ProductImage } from '../productImage';
import { ProductInfo } from '../productInfo';
import { ProductQuantity } from '../productQuantity';
import { ProductBuyButton } from '../productBuyButton';
import './product.shop.scss';

export const Product = ({ id, product, image, dose, description, label, discount, category, price, stock }) => {
  return (
    <article className="product">
      <ProductImage id={id} image={image} discount={discount} product={product} />
      <ProductInfo product={product} dose={dose} price={price} label={label} />
      <ProductQuantity stock={stock} />
      <ProductBuyButton />
    </article>
  );
};

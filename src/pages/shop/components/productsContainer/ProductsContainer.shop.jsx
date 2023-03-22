import { Spinner } from '@chakra-ui/react';
import { Product } from '../product';
import { useShopContext } from '../../context';
import './productsContainer.shop.scss';

export const ProductsContainer = () => {
  const { products, productsError, productsIsLoading } = useShopContext();

  if (productsError)
    return (
      <div className="spinner-container">
        ERROR LOADING PRODUCTS, PLEASE TRY AGAIN OR CONTACT YOUR NEAREST TRUSTED DEVELOPER
      </div>
    );
  if (productsIsLoading)
    return (
      <div className="spinner-container">
        <Spinner />
      </div>
    );
  return (
    <section className="products-container">
      {products.map((element) => {
        return <Product key={element.id} {...element} />;
      })}
    </section>
  );
};

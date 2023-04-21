import { Form } from './components/productForm';
import { ProductsList } from './components/productsList';
import { ProductsContext } from './context/products.context';
import './products.administration.scss';

export const Products = () => {
  return (
    <ProductsContext>
      <main className="products-admin__main">
        <Form />
        <ProductsList />
      </main>
    </ProductsContext>
  );
};

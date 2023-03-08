import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import { Heading } from '@components/heading';
import { Product } from './components/product';
import { SelectCategories } from './components/categories';
import { useProducts, useCategories } from './swr';

import headingImage from '@assets/heading-shop.jpeg';
import './shop.page.scss';

export const Shop = () => {
  let { category } = useParams();
  let navigate = useNavigate();
  const { products, productsError, productsIsLoading } = useProducts(category);
  const { categories, categoriesError, categoriesIsLoading } = useCategories();

  const handleSelectCategories = (value) => {
    navigate(value);
  };
  if (productsIsLoading)
    return (
      <div className="spinner-container">
        <Spinner />
      </div>
    );
  if (productsError) return <div className="spinner-container">ERROR</div>;
  return (
    <main className="shop-container">
      <Heading title="Shop" image={headingImage} />
      <SelectCategories
        categories={categories}
        error={categoriesError?.message}
        handleSelectCategories={handleSelectCategories}
        isLoading={categoriesIsLoading}
      />
      <section className="products-container">
        {products.map((element) => {
          return <Product key={element.id} {...element} />;
        })}
      </section>
    </main>
  );
};

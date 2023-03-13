import { Heading } from '@components/heading';
import headingImage from '@assets/heading-shop.jpeg';
import { ShopContext } from './context';
import { SelectCategories } from './components/categories';
import { ProductsContainer } from './components/productsContainer';
import './shop.page.scss';

export const Shop = () => {
  return (
    <ShopContext>
      <main className="shop-container">
        <Heading title="Shop" image={headingImage} />
        <SelectCategories />
        <ProductsContainer />
      </main>
    </ShopContext>
  );
};

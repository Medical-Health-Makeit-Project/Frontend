import { createContext, useContext, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useProducts } from '@services/products';

const ProductsStore = createContext();

export const ProductsContext = ({ children }) => {
  const [ProductToBeUpdated, setProductToBeUpdated] = useState({
    firstname: '',
    lastname: '',
    email: '',
    birthdate: new Date(),
    area: '',
    avatar: '',
    phone: '',
    location: { city: '', country: '' },
    gender: '',
    qualifications: [],
    memberships: [],
    skills: [],
  });

  const { products, productsError, productsIsLoading } = useProducts();

  const categories = [...new Set(products?.map((product) => product.category))];

  return (
    <ProductsStore.Provider
      value={{
        setProductToBeUpdated,
        ProductToBeUpdated,
        products,
        productsIsLoading,
        productsError,
        categories,
      }}
    >
      {children}
    </ProductsStore.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsStore);
  return context;
};

ProductsContext.propTypes = {
  children: PropTypes.node.isRequired,
};

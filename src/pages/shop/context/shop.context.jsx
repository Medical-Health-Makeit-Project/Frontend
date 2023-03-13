import { PropTypes } from 'prop-types';
import { createContext, useContext, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts, useCategories } from '../swr';

const ShopStore = createContext();

export const ShopContext = ({ children }) => {
  const { category } = useParams();
  const { products, productsError, productsIsLoading } = useProducts(category);
  const { categories, categoriesError, categoriesIsLoading } = useCategories();
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSelectCategories = (value) => {
    navigate(value);
  };

  const value = useMemo(() => {
    return {
      products,
      productsError,
      productsIsLoading,
      categories,
      categoriesError,
      categoriesIsLoading,
      handleSelectCategories,
    };
  }, [
    products,
    productsError,
    productsIsLoading,
    categories,
    categoriesError,
    categoriesIsLoading,
    handleSelectCategories,
  ]);

  return <ShopStore.Provider value={value}>{children}</ShopStore.Provider>;
};

export const useShopContext = () => {
  const context = useContext(ShopStore);
  return context;
};

ShopContext.propTypes = {
  children: PropTypes.node.isRequired,
};

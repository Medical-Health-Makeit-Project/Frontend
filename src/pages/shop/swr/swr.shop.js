import useSWR from 'swr';
import { ALL_PRODUCTS, CATEGORIES, PRODUCTS_BY_CATEGORY } from '@constants/';
import { getProducts, getCategories, getProductsByCategory } from '../service';

export const useProducts = (category) => {
  const {
    data: products,
    error: productsError,
    isLoading: productsIsLoading,
  } = useSWR(
    category ? [PRODUCTS_BY_CATEGORY, category] : ALL_PRODUCTS,
    category ? ([PRODUCTS_BY_CATEGORY, category]) => getProductsByCategory(PRODUCTS_BY_CATEGORY, category) : getProducts
  );

  return {
    products,
    productsError,
    productsIsLoading,
  };
};

export const useCategories = () => {
  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesIsLoading,
  } = useSWR(CATEGORIES, getCategories);

  return {
    categories,
    categoriesError,
    categoriesIsLoading,
  };
};

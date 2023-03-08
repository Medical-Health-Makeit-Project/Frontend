import axios from 'axios';
import { productAdapter, categoryAapter } from '../adapters';

export const getProducts = async (URL) => {
  const response = await axios.get(URL);
  const productsAdapted = productAdapter(response.data);
  return productsAdapted;
};

export const getProductsByCategory = async (URL, category) => {
  const response = await axios.get(URL);
  const productsAdapted = productAdapter(response.data);
  const productsFiltered = productsAdapted.filter(
    (product) => product.category === category
  );
  return productsFiltered;
};

export const getProductById = async (URL, id) => {
  const response = await axios.get(URL);
  const productAdapted = productAdapter(response.data);
  return productAdapted;
};

export const getCategories = async (URL) => {
  const response = await axios.get(URL);
  const categoriesAdapted = categoryAapter(response.data);
  return categoriesAdapted;
};

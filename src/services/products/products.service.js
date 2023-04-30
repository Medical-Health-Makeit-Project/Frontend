import axios from 'axios';
import { categoryAdapter } from './categories.adapter';
import { productAdapter } from './products.adapter';

export const getProducts = async (URL) => {
  const response = await axios.get(URL);
  const productsAdapted = productAdapter(response.data);
  return productsAdapted;
};

export const getProductsByCategory = async (URL, category) => {
  const response = await axios.get(`${URL}${category}`);
  return productAdapter(response.data);
};

export const getProductById = async (URL, id) => {
  const response = await axios.get(URL);
  const productAdapted = productAdapter(response.data);
  return productAdapted;
};

export const getCategories = async (URL) => {
  const response = await axios.get(URL);
  const categoriesAdapted = categoryAdapter(response.data);
  return categoriesAdapted;
};

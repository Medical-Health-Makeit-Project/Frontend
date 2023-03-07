import axios from 'axios';
import { productAdapter } from '../adapters';

export const getProducts = async (URL) => {
  const response = await axios.get(URL);
  const productsAdapted = productAdapter(response.data);
  return productsAdapted;
};

export const getProductsByCategory = async (URL, category) => {
  const response = await axios.get(URL);
  return response.data;
};

export const getProductById = async (URL, id) => {
  const response = await axios.get(URL);
  const productAdapted = productAdapter(response.data);
  return productAdapted;
};

import axios from 'axios';
import { memo } from 'react';
import { useProductsContext } from '../../context/products.context';
import { v4 as uuid } from 'uuid';
import { Button } from '@components/buttons';
import { Loading } from '@components/loading';
import { Error } from '@components/error';
import { useProducts } from '@services/products';
import { errorMessage } from '@utils/toastify/error.toastify';
import './productList.products.administration.scss';

export const ProductsList = () => {
  const { products, productsError, productsIsLoading } = useProducts();
  const { setProductToBeUpdated } = useProductsContext();

  const handleSetFormToUpdate = (product) => {
    setProductToBeUpdated({
      id: product.id,
      product: product.product,
      label: product.label,
      description: product.description,
      price: product.price,
      stock: product.stock,
      image: product.image,
      dose: product.dose,
      discount: product.discount,
      category: product.category,
    });
  };

  const handleDelete = async (e, product) => {
    try {
      e.preventDefault();
      const errorMessage = 'Something went wrong! please try again or call your nearest dev!';
      const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN');
      const { product: productName } = product;
      const { status } = await axios.delete('URL', {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        data: productName,
      });
      if (status > 399) return errorMessage(errorMessage);
    } catch (error) {
      return errorMessage(error.message);
    }
  };

  if (productsError) return <Error />;
  if (productsIsLoading) return <Loading />;
  return (
    <section className="product-list">
      {products?.map((product) => {
        return (
          <article key={product.id} className="product-list__item">
            <div className="product-list__image-container">
              <img src={product.image} alt="Image" className="image" />
            </div>
            <section className="product-list-info">
              <h3 className="product-list-info__product">{`${product.product}`}</h3>
              <p className="product-list-area">{product.label}</p>
            </section>
            <section className="product-list__buttons-action-container">
              <Button variant="outline" color="danger" onClick={(e) => handleDelete(e, product)}>
                Delete
              </Button>
              <Button color="info" onClick={() => handleSetFormToUpdate(product)}>
                Update
              </Button>
            </section>
          </article>
        );
      })}
    </section>
  );
};

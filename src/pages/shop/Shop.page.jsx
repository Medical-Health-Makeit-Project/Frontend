import { useState, useEffect } from 'react';
import { Heading } from '@components/heading';
import { Spinner } from '@chakra-ui/react';
import useSWR from 'swr';
import { Product } from './components/product';
import { getProducts } from './service';
import { ALL_PRODUCTS } from '@constants/';
import headingImage from '@assets/heading-shop.jpeg';
import './shop.page.scss';

export const Shop = () => {
  const { data, error, isLoading } = useSWR(ALL_PRODUCTS, getProducts);

  if (isLoading)
    return (
      <div className="spinner-container">
        <Spinner />
      </div>
    );
  if (error) return <div className="spinner-container">ERROR</div>;

  return (
    <main>
      <Heading title="Shop" image={headingImage} />
      <section className="products-container">
        {data.map((element) => {
          return <Product key={element.id} {...element} />;
        })}
      </section>
    </main>
  );
};

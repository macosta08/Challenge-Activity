/* Componente encargado rederizar dinamicamente cada tarjeta*/

import React from 'react';
import Product from '../product/Product';
import './Products.css';

interface ProductType {
  id: string;
  title: string;
  price: { decimals: number; currency: string; amount: number };
  condition: string;
  picture: string;
  location: string;
  free_shipping: boolean;
}

interface Props {
  products: ProductType[];
}

const Products = ({ products }: Props) => {
  return (
    <div className='product-container-cards'>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;

/* Componente encargado de hacer el llamado al servidor 
cada vez que cambie la URL y rederizar el Breadcrumb y el 
contenerdor del detalle del producto */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from '../breadcrumb/Breadcrumb';
import { ContainerDetail } from '../containerDetail/ContainerDetail';
import { Spinner } from '../spinner/Spinner';
import './ProductDetail.css';

interface ItemType {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

interface ProductType {
  author: { name: string; lastname: string };
  categories: string[];
  item: ItemType;
}

const ProductDetail = () => {
  let { id } = useParams();
  const port = 'https://meli-macosta08.herokuapp.com';
  const endpoint = `${port}/api/items/${id}`;
  const [isLoadingState, setIsLoadingState] = useState(false);

  const [product, setProduct] = useState<ProductType>({
    author: { name: '', lastname: '' },
    categories: [],
    item: {
      id: '',
      title: '',
      price: {
        currency: '',
        amount: 0,
        decimals: 0,
      },
      picture: '',
      condition: '',
      free_shipping: false,
      sold_quantity: 0,
      description: '',
    },
  });
  const { item, categories } = product;

  const getProduct = async (endpoints: string) => {
    setIsLoadingState(true);
    await fetch(endpoints)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error(error);
      });
    setIsLoadingState(false);
  };

  useEffect(() => {
    getProduct(endpoint);
  }, [endpoint]);

  return (
    <>
      <main>
        <Breadcrumb categories={categories} />
        <ContainerDetail product={item} />
      </main>
      <Spinner isLoading={isLoadingState} />
    </>
  );
};

export default ProductDetail;

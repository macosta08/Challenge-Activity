/* Componente encargado de hacer el llamado al servidor 
cada vez que cambie la URL y rederizar el Breadcrumb y el 
contenerdor del detalle del producto */

import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchDetail } from '../../hooks/useFetchDetail';
import { Breadcrumb } from '../breadcrumb/Breadcrumb';
import { ContainerDetail } from '../containerDetail/ContainerDetail';
import { Spinner } from '../spinner/Spinner';
import './ProductDetail.css';

const ProductDetail = () => {
  let { id } = useParams();
  const baseURL = process.env.REACT_APP_URL_ENDPOINT || 'http://localhost:8080';
  const endpoint = `${baseURL}/api/items/${id}`;
  const { categories, item, isLoading } = useFetchDetail(endpoint);

  return (
    <>
      <main>
        <Breadcrumb categories={categories} />
        <ContainerDetail product={item} />
      </main>
      <Spinner isLoading={isLoading} />
    </>
  );
};

export default ProductDetail;

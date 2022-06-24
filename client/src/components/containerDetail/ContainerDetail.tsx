/* Componente encargado de  armar el contenerdor del detalle
del producto*/

import React from 'react';
import { formatCurrency } from '../../utils/formatter';
import './ContainerDetail.css';
import SmartText from './SmartText';

interface ProductType {
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

interface Props {
  product: ProductType;
}

export const ContainerDetail = ({ product }: Props) => {
  const {
    picture,
    title,
    price: { amount, decimals, currency },
    condition,
    sold_quantity,
    description,
  } = product;

  return (
    <div id='main'>
      <div className='article'>
        <h2 className='title-movil'>{title}</h2>
        <div className='info'>
          <img className='picture' src={picture} alt={title} />
        </div>
        <div className='description'>
          <h3 className='title-description'>Descripción del producto</h3>
          <p className='text-description'>{description}</p>
        </div>
      </div>
      <div className='aside'>
        <div className='condition'>
          <span>{condition === 'new' ? 'Nuevo -' : 'Usado -'}</span>
          <span> {sold_quantity} vendidos</span>
        </div>
        <h2 className='title-desktop'>{title}</h2>
        <div className='price'>
          <span> {currency === 'ARS' ? '$' : currency}</span>
          <span>{formatCurrency(amount, 'de-DE')}</span>
          <span className='decimals'>{decimals.toString().padEnd(2, '0')}</span>
        </div>
        <div className='btn-container'>
          <button type='button' className='btn-comprar'>
            Comprar
          </button>
        </div>
      </div>
      <div className='description description-movil'>
        <h3 className='title-description'>Descripción del producto</h3>
        <SmartText text={description} />
      </div>
    </div>
  );
};

/* Componente encargado de  armar la tarjeta por producto 
 Se llama a la funcion formatCurrency para formatear el precio
*/

import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { formatCurrency } from '../../utils/formatter';

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
  product: ProductType;
}
const Product = ({ product }: Props) => {
  const { id, title, price, picture, location, free_shipping } = product;

  return (
    <Link to={`/items/${id}`} id='link'>
      <div key={id} className='product-container'>
        <div className='product-image'>
          <img src={picture} alt={title} />
        </div>
        <div className='product'>
          <div className='price-location'>
            <div className='product-price'>
              <span> {price.currency === 'ARS' ? '$' : price.currency}</span>
              {formatCurrency(price.amount, 'de-DE')}
              {free_shipping && <img src='img/ic_shipping.png' alt='Envío gratis' />}
            </div>

            <p className='location'>{location}</p>
          </div>
          <div className='product-title'>{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;

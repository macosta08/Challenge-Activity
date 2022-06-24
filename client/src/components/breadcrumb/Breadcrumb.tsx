/* Componente encargado de armar el Breadcrumb */

import React from 'react';
import './Breadcrumb.css';

interface Props {
  categories: string[];
}

export const Breadcrumb = ({ categories }: Props) => {
  return (
    <div className='breadcrumb'>
      {categories.slice(0, -1).map((category) => (
        <span key={category}>
          {category}
          <i className='fas fa-chevron-right icon-rigth' />
        </span>
      ))}

      <span>
        <b>{categories.slice(-1)}</b>
      </span>
    </div>
  );
};

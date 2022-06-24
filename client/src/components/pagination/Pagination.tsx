/* Componente encargado de la paginacion de la lista de productos */

import React from 'react';
import './Pagination.css';

interface Props {
  page: number;
  setPage: (page: number) => void;
  itemsPerPage: number;
  itemsCount: number;
}

export const Pagination = ({ page, setPage, itemsPerPage, itemsCount }: Props) => {
  return (
    <div className='pagination'>
      {page > 1 && (
        <button type='button' onClick={() => setPage(page - 1)}>
          <span>&laquo;</span> Anterior
        </button>
      )}
      <div className='page'>{page}</div>
      <div>de</div>
      <div>{itemsCount}</div>
      {page !== itemsCount && (
        <button type='button' onClick={() => setPage(page + 1)}>
          Siguiente <span>&raquo;</span>
        </button>
      )}
    </div>
  );
};

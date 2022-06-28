/* Componente encargado de la paginacion de la lista de productos */

import React, { useState } from 'react';
import './Pagination.css';

interface Props {
  amount: number;
  itemsLength: number;
}

export const Pagination = ({ itemsLength, amount }: Props) => {
  //Se calculan los indices para  aplicar el slice
  //en el arreglo de items de la paginación
  const [page, setPage] = useState<number>(1);
  const itemsCount: number = itemsLength / amount;
  const idxIni = (page - 1) * amount;
  const idxFin = page * amount;
  const addPage = () => setPage(page + 1);
  const subtractPage = () => setPage(page - 1);

  const PaginationComponent = () => (
    <div className='pagination'>
      {page > 1 && (
        <button type='button' onClick={subtractPage}>
          <span>&laquo;</span> Anterior
        </button>
      )}
      <div className='page'>{page}</div>
      <div>de</div>
      <div>{itemsCount}</div>
      {page !== itemsCount && (
        <button type='button' aria-label='btn-next' onClick={addPage}>
          Siguiente <span>&raquo;</span>
        </button>
      )}
    </div>
  );

  return { pagination: <PaginationComponent />, idxIni, idxFin };
};

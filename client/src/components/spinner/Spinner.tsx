/*Componente Spinner */

import React from 'react';
import './Spinner.css';

interface Props {
  isLoading: boolean;
}

export const Spinner = ({ isLoading }: Props) => {
  return <>{isLoading === true && <div className='loading'>Loading</div>}</>;
};

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useFetchItems } from '../../hooks/useFetchItems';
import { Breadcrumb } from '../breadcrumb/Breadcrumb';
import Products from '../products/Products';
import { Pagination } from '../pagination/Pagination';
import NotFound from '../notFound/NotFound';
import { Spinner } from '../spinner/Spinner';
import './SearchResult.css';

const SearchResult = () => {
  const location = useLocation();
  const searchProduct = location.search.replace('?search=', '');
  const baseURL = process.env.REACT_APP_URL_ENDPOINT || 'http://localhost:8080';
  const endpoint = `${baseURL}/api/items?q=${searchProduct}`;
  const { categories, items, isLoading } = useFetchItems(endpoint);
  const { pagination, idxIni, idxFin } = Pagination({ itemsLength: items?.length, amount: 10 });

  return (
    <>
      {items.length > 0 && (
        <>
          <main>
            <Breadcrumb categories={categories} />
            <Products products={items?.slice(idxIni, idxFin)} />

            {pagination}
          </main>
        </>
      )}
      {!isLoading && items.length === 0 && searchProduct.length > 0 && <NotFound />}
      <Spinner isLoading={isLoading} />
    </>
  );
};

export default SearchResult;

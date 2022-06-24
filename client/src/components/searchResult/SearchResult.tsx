import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from '../breadcrumb/Breadcrumb';
import Products from '../products/Products';
import { Pagination } from '../pagination/Pagination';
import { NotFound } from '../notFound/NotFound';
import { Spinner } from '../spinner/Spinner';
import './SearchResult.css';

// interface ProductType {
//   author: { name: string; lastname: string };
//   categories: string[];
//   items: Array<{ prop: string }>;
// }

const SearchResult = () => {
  const location = useLocation();
  const searchProduct = location.search.replace('?search=', '');
  const endpoint = `${process.env.URL_ENDPOINT}/api/items?q=${searchProduct}`;
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [dataState, setDataState] = useState({
    author: {},
    categories: [],
    items: [],
  });
  const { categories, items } = dataState;
  //Se calculan los indices para  aplicar el slice
  //en el arreglo de items
  const [page, setPage] = useState<number>(1);
  const amount: number = 10;
  const itemsCount: number = items?.length / amount;
  const idxIni = (page - 1) * amount;
  const idxFin = page * amount;

  const getProduct = async (endpoints: string) => {
    setIsLoadingState(true);
    await fetch(endpoints)
      .then((response) => response.json())
      .then((data) => {
        setDataState(data);
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
      {items.length > 0 && (
        <>
          <main>
            <Breadcrumb categories={categories} />
            <Products products={items?.slice(idxIni, idxFin)} />

            <Pagination
              page={page}
              setPage={setPage}
              itemsPerPage={amount}
              itemsCount={itemsCount}
            />
          </main>
        </>
      )}
      {!isLoadingState && items.length === 0 && <NotFound />}
      <Spinner isLoading={isLoadingState} />
    </>
  );
};

export default SearchResult;

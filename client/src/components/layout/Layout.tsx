import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from '../productDetail/ProductDetail';
import SearchBox from '../searchBox/SearchBox';
import SearchResult from '../searchResult/SearchResult';

const Layout = () => {
  return (
    <Router>
      <SearchBox />
      <Routes>
        <Route path='items/:id' element={<ProductDetail />} />
        <Route path=':itemsSearch' element={<SearchResult />} />
        <Route path='/' element={<SearchResult />} />
      </Routes>
    </Router>
  );
};

export default Layout;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import './SearchBox.css';

const SearchBox = () => {
  const location = useLocation();
  const history = useNavigate();
  const query = location.search.replace('?search=', '').replace(/%20/g, ' ');
  const [stateSearch, setStateSearch] = useState(query);
  const handleInputChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setStateSearch(e.target.value);
  };

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    history(`/items?search=${stateSearch}`);
  };

  useEffect(() => {
    setStateSearch(query);
  }, [query]);

  return (
    <nav>
      <div className='nav-container'>
        <div className='logo' />
        <div className='search-box'>
          <input
            type='text'
            placeholder='Nunca dejes de buscar'
            name='searchText'
            value={stateSearch}
            onChange={handleInputChange}
            onKeyPress={(event) => event.key === 'Enter' && handleSearch(event)}
          />
          <button type='button' onClick={handleSearch}>
            <i className='fa fa-search' />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SearchBox;

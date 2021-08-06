import React from 'react';
import SearchIcon from '../../assets/icons/search.svg';

const SearchBar: React.FC = () => {
  return (
    <div className="search-box">
      <input className="search-box__item" placeholder="введите текст" />
      <button className="search-box__btn">
        <img src={SearchIcon} className="search-box__icon" alt="search" />
      </button>
    </div>
  );
};

export default SearchBar;

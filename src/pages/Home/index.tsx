import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <SearchBar />
    </div>
  );
};

export default Home;

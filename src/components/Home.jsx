import React from 'react';
import ItemListContainer from './ItemListContainer';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Bienvenidos a Horizonte Interior</h1>
        <p>Encuentra los mejores muebles y decoración para tu hogar</p>
      </div>
      <ItemListContainer />
    </div>
  );
};

export default Home;
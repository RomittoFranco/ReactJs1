import React from 'react';
import ItemCard from './ItemCard';
import '../styles/ItemList.css';

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map(product => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
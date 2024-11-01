import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ItemCard.css';

const ItemCard = ({ product }) => {
  return (
    <div className="item-card">
      <img src={product.image} alt={product.name} className="item-image" />
      <h3 className="item-title">{product.name}</h3>
      <p className="item-price">${product.price}</p>
      <Link to={`/item/${product.id}`} className="item-button">
        Ver detalle
      </Link>
    </div>
  );
};

export default ItemCard;
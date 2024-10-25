import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description.substring(0, 100)}...</p>
      <p>Precio: ${product.price}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;
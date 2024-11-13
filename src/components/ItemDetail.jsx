import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/ItemDetail.css';

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
  };

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <div className="item-image-section">
          <img src={product.image} alt={product.name} className="detail-image" />
        </div>
        <div className="item-info-section">
          <h2 className="item-title">{product.name}</h2>
          <p className="item-description">{product.description}</p>
          <p className="item-price">${product.price}</p>
          {!added ? (
            <div className="item-actions">
              <div className="quantity-controls">
                <button onClick={handleDecrement} className="quantity-btn">
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button onClick={handleIncrement} className="quantity-btn">
                  +
                </button>
              </div>
              <button onClick={handleAdd} className="add-to-cart-btn">
                Agregar al carrito
              </button>
            </div>
          ) : (
            <div className="post-add-actions">
              <Link to="/cart" className="view-cart-btn">
                Ir al carrito
              </Link>
              <Link to="/" className="continue-shopping-btn">
                Seguir comprando
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
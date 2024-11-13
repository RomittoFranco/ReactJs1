import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, removeItem, clear, getTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="continue-shopping">
          Continuar comprando
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2 className="cart-title">Tu Carrito</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-image" />
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            className="remove-item-button"
          >
            Eliminar
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <div className="cart-total">
          <h3>Total: ${getTotal().toFixed(2)}</h3>
        </div>
        <div className="cart-actions">
          <button onClick={clear} className="clear-cart-button">
            Vaciar Carrito
          </button>
          <Link to="/checkout" className="checkout-button">
            Proceder al pago
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
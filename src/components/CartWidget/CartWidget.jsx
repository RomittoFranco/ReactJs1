import React, { useState } from 'react';
import cartIcon from './assets/carrito.svg';

const CartWidget = ({ cartItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCheckout = () => {
    alert('Compra confirmada. Gracias por tu compra!');
    // Aquí podrías agregar la lógica para vaciar el carrito si es necesario
  };

  return (
    <div>
      <img src={cartIcon} alt="Cart Widget" onClick={toggleCart} style={{ cursor: 'pointer' }} />
      {isCartOpen && (
        <div className="cart-dropdown">
          <h3>Carrito de Compras</h3>
          {cartItems.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item.title} - ${item.price}</li>
              ))}
            </ul>
          )}
          <button onClick={handleCheckout}>Confirmar Compra</button>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
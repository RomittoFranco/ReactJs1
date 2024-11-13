import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CheckoutForm from './CheckoutForm';
import { createOrder } from '../services/firebase';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cart, getTotal, clear } = useContext(CartContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (customerInfo) => {
    try {
      setLoading(true);
      setError(null);

      const order = {
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        total: getTotal(),
        customer: customerInfo
      };

      const orderId = await createOrder(order);
      
      
      clear();

      
      navigate('/confirmation', {
        state: {
          orderNumber: orderId,
          customerInfo: customerInfo
        }
      });
    } catch (error) {
      console.error("Error creating order:", error);
      setError("Error al procesar la orden. Por favor intente nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return navigate('/cart');
  }

  return (
    <div className="checkout-container">
      <div className="checkout-summary">
        <h2>Resumen de compra</h2>
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="checkout-total">
          <strong>Total:</strong>
          <strong>${getTotal().toFixed(2)}</strong>
        </div>
      </div>
      
      {error && <div className="error-message">{error}</div>}
      
      <CheckoutForm onSubmit={handleSubmit} disabled={loading} />
      
      {loading && <div className="loading-overlay">Procesando orden...</div>}
    </div>
  );
};

export default Checkout;
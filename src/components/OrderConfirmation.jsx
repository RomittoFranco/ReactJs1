import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/OrderConfirmation.css';

const OrderConfirmation = ({ orderNumber, customerInfo }) => {
  return (
    <div className="order-confirmation">
      <div className="confirmation-card">
        <div className="success-icon">✓</div>
        <h2>¡Gracias por tu compra!</h2>
        <div className="delivery-message">
          <p>Tu pedido llegará en los siguientes 3 días hábiles</p>
          <p className="order-number">Número de orden: #{orderNumber}</p>
        </div>
        <div className="order-details">
          <h3>Detalles de envío</h3>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Nombre:</span>
              <span className="detail-value">{customerInfo.name}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{customerInfo.email}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Teléfono:</span>
              <span className="detail-value">{customerInfo.phone}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Dirección:</span>
              <span className="detail-value">{customerInfo.address}</span>
            </div>
          </div>
        </div>
        <Link to="/" className="return-home-btn">
          Volver a la tienda
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
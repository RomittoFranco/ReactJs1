import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Horizonte Interior</Link>
        <div className="navbar-links">
          <Link to="/category/muebles" className="nav-link">Muebles</Link>
          <Link to="/category/iluminacion" className="nav-link">Iluminación</Link>
          <Link to="/category/decoracion" className="nav-link">Decoración</Link>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
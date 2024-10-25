import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductList from './components/ProductList/ProductList';
import About from './components/About/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <NavBar /> {/* Navbar fija en la parte superior */}
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Horizonte Interior" />} />
          <Route path="/muebles" element={<ProductList category="Muebles" />} />
          <Route path="/decoracion" element={<ProductList category="Decoración" />} />
          <Route path="/comedor" element={<ProductList category="Comedor" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
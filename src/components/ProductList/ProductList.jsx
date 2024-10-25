import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ category, addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/category/jewelery'); // Aquí puedes cambiar a la categoría de muebles o decoración
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
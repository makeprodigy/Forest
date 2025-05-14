import React, { useEffect, useState } from 'react';
import ProductGrid from '../components/productpage/ProductGrid';

import "../pagescss/ProductsPage.css"

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from the Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products'); // Replace with DummyJSON API if needed
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="products-page">
      <h1>Products</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductsPage;
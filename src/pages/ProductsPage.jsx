import React, { useEffect, useState } from 'react';
import ProductGrid from '../components/productpage/ProductGrid';
import FilterSidebar from '../components/productpage/FilterSidebar';

import "../pagescss/ProductsPage.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ category: '', priceRange: [0, 1000], minRating: 0});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const { category, priceRange, minRating} = filters;
      const [minPrice, maxPrice] = priceRange;

      const filtered = products.filter((product) => {
        const matchesCategory = category ? product.category === category : true;
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        const matchesRating = product.rating?.rate >= minRating;

        return matchesCategory && matchesPrice && matchesRating;
      });

      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [filters, products]);

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="products-page-container">
      <h1 className="products-page-title">Products</h1>
      <div className="products-page-content">
        <FilterSidebar onFilterChange={handleFilterChange} />
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
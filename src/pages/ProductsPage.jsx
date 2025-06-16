import React, { useEffect, useState } from 'react';
import ProductGrid from '../components/productpage/ProductGrid';
// import FilterSidebar from '../components/productpage/FilterSidebar';

import "../pagescss/ProductsPage.css";

const categoryOptions = [
  { value: '', label: 'All Categories' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'jewelery', label: 'Jewelery' },
  { value: "men's clothing", label: "Men's Clothing" },
  { value: "women's clothing", label: "Women's Clothing" },
];
const priceOptions = [
  { value: [0, 1000], label: 'All Prices' },
  { value: [0, 50], label: 'Under $50' },
  { value: [50, 100], label: '$50 - $100' },
  { value: [100, 500], label: '$100 - $500' },
  { value: [500, 1000], label: 'Above $500' },
];
const ratingOptions = [
  { value: 0, label: 'All Ratings' },
  { value: 1, label: '1★ & Up' },
  { value: 2, label: '2★ & Up' },
  { value: 3, label: '3★ & Up' },
  { value: 4, label: '4★ & Up' },
];

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ category: '', priceRange: [0, 1000], minRating: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');

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
      const { category, priceRange, minRating } = filters;
      const [minPrice, maxPrice] = priceRange;
      const filtered = products.filter((product) => {
        const matchesCategory = category ? product.category === category : true;
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        const matchesRating = product.rating?.rate >= minRating;
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesPrice && matchesRating && matchesSearch;
      });
      setFilteredProducts(filtered);
    };
    applyFilters();
  }, [filters, products, searchQuery]);

  const handleCategoryChange = (e) => {
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };
  const handlePriceChange = (e) => {
    const [min, max] = e.target.value.split(',').map(Number);
    setFilters((prev) => ({ ...prev, priceRange: [min, max] }));
  };
  const handleRatingChange = (e) => {
    setFilters((prev) => ({ ...prev, minRating: Number(e.target.value) }));
  };
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearchButtonClick = () => {
    setSearchQuery(searchInput);
  };
  const handleClearFilters = () => {
    setFilters({ category: '', priceRange: [0, 1000], minRating: 0 });
    setSearchQuery('');
    setSearchInput('');
  };

  // Determine if any filter is applied
  const isFilterApplied =
    filters.category !== '' ||
    filters.priceRange[0] !== 0 || filters.priceRange[1] !== 1000 ||
    filters.minRating !== 0 ||
    searchQuery !== '';

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="products-page-container">
      <h1 className="products-page-title">Products</h1>
      <div className="products-page-topbar">
        <input
          type="text"
          className="products-search-bar"
          placeholder="Search products..."
          value={searchInput}
          onChange={handleSearchInputChange}
          onKeyDown={e => { if (e.key === 'Enter') handleSearchButtonClick(); }}
        />
        <button className="search-btn" onClick={handleSearchButtonClick}>
          Search
        </button>
        <select
          className="products-filter-dropdown"
          value={filters.category}
          onChange={handleCategoryChange}
        >
          {categoryOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <select
          className="products-filter-dropdown"
          value={filters.priceRange.toString()}
          onChange={handlePriceChange}
        >
          {priceOptions.map((opt) => (
            <option key={opt.label} value={opt.value.toString()}>{opt.label}</option>
          ))}
        </select>
        <select
          className="products-filter-dropdown"
          value={filters.minRating}
          onChange={handleRatingChange}
        >
          {ratingOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        {isFilterApplied && (
          <button className="clear-filters-btn" onClick={handleClearFilters}>
            Clear Filters
          </button>
        )}
      </div>
      <div className="products-page-content">
        {/* <FilterSidebar onFilterChange={handleFilterChange} /> */}
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
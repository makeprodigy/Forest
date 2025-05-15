import React, { useState } from 'react';

const FilterSidebar = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [minRating, setMinRating] = useState(0);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange({ category: e.target.value, priceRange, minRating });
  };

  const handlePriceChange = (e) => {
    const [min, max] = e.target.value.split('-').map(Number);
    setPriceRange([min, max]);
    onFilterChange({ category: selectedCategory, priceRange: [min, max], minRating });
  };

  const handleRatingChange = (e) => {
    setMinRating(Number(e.target.value));
    onFilterChange({ category: selectedCategory, priceRange, minRating: Number(e.target.value) });
  };

  return (
    <div className="filter-sidebar">
      <h3>Filters</h3>

      {/* Category Filter */}
      <div className="filter-group">
        <label htmlFor="category">Category</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="filter-group">
        <label htmlFor="price">Price Range</label>
        <select id="price" onChange={handlePriceChange}>
          <option value="0-1000">All</option>
          <option value="0-50">Under $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-500">$100 - $500</option>
          <option value="500-1000">Above $500</option>
        </select>
      </div>

      {/* Rating Filter */}
      <div className="filter-group">
        <label htmlFor="rating">Minimum Rating</label>
        <select id="rating" value={minRating} onChange={handleRatingChange}>
          <option value="0">All</option>
          <option value="1">1 Star & Up</option>
          <option value="2">2 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
          <option value="4">4 Stars & Up</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
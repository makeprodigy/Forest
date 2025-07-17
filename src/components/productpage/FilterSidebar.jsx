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
    <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg shadow-md md:p-2">
      <h3 className="text-2xl text-white mb-4 md:text-xl">Filters</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label htmlFor="category" className="block text-base text-gray-800 mb-2 md:text-sm">
          Category
        </label>
        <select 
          id="category" 
          value={selectedCategory} 
          onChange={handleCategoryChange}
          className="w-full p-2 text-base border border-gray-300 rounded bg-white/80 backdrop-blur-sm transition-colors duration-300 text-gray-600 focus:border-primary-green-dark focus:outline-none md:text-sm"
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <label htmlFor="price" className="block text-base text-gray-800 mb-2 md:text-sm">
          Price Range
        </label>
        <select 
          id="price" 
          onChange={handlePriceChange}
          className="w-full p-2 text-base border border-gray-300 rounded bg-white/80 backdrop-blur-sm transition-colors duration-300 text-gray-600 focus:border-primary-green-dark focus:outline-none md:text-sm"
        >
          <option value="0-1000">All</option>
          <option value="0-50">Under $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-500">$100 - $500</option>
          <option value="500-1000">Above $500</option>
        </select>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <label htmlFor="rating" className="block text-base text-gray-800 mb-2 md:text-sm">
          Minimum Rating
        </label>
        <select 
          id="rating" 
          value={minRating} 
          onChange={handleRatingChange}
          className="w-full p-2 text-base border border-gray-300 rounded bg-white/80 backdrop-blur-sm transition-colors duration-300 text-gray-600 focus:border-primary-green-dark focus:outline-none md:text-sm"
        >
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
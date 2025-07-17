import React, { useEffect, useState } from 'react';
import ProductGrid from '../components/productpage/ProductGrid';
import { 
  Search, 
  Filter, 
  X, 
  Grid3X3, 
  List, 
  SlidersHorizontal,
  Sparkles,
  ShoppingBag,
  Package,
  Menu,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const categoryOptions = [
  { value: '', label: 'All Categories', icon: '🎯' },
  { value: 'electronics', label: 'Electronics', icon: '💻' },
  { value: 'jewelery', label: 'Jewelery', icon: '💎' },
  { value: "men's clothing", label: "Men's Clothing", icon: '👔' },
  { value: "women's clothing", label: "Women's Clothing", icon: '👗' },
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
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

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
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-green-dark"></div>
          <p className="text-gray-600 text-lg">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-primary-green-dark mr-2 sm:mr-3" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-green-dark to-blue-600 bg-clip-text text-transparent">
              Discover Products
            </h1>
          </div>
          <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto px-4">
            Explore our curated collection of premium products with advanced filtering and search capabilities
          </p>
        </div>

        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden mb-4">
          <button
            className="w-full bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-4 flex items-center justify-between"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="w-5 h-5 text-primary-green-dark" />
              <span className="font-semibold text-gray-700">Filters & Search</span>
              {isFilterApplied && (
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              )}
            </div>
            {isMobileFilterOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>

        {/* Mobile Filter Panel */}
        {isMobileFilterOpen && (
          <div className="lg:hidden mb-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-4">
            {/* Search Input */}
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3 text-base border-2 border-gray-200 rounded-xl bg-white/90 transition-all duration-300 outline-none focus:border-primary-green-dark focus:shadow-lg focus:shadow-primary-green-dark/20"
                placeholder="Search products..."
                value={searchInput}
                onChange={handleSearchInputChange}
                onKeyDown={e => { if (e.key === 'Enter') handleSearchButtonClick(); }}
              />
            </div>

            {/* Search Button */}
            <button 
              className="w-full mb-4 px-6 py-3 text-base bg-gradient-to-r from-primary-green-dark to-green-600 text-white border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              onClick={handleSearchButtonClick}
            >
              <Search className="w-5 h-5" />
              Search
            </button>

            {/* Filter Options */}
            <div className="space-y-4">
              {/* Category Filter */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <select
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/90 text-gray-800 transition-all duration-300 outline-none focus:border-primary-green-dark focus:shadow-lg"
                  value={filters.category}
                  onChange={handleCategoryChange}
                >
                  {categoryOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
                <select
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/90 text-gray-800 transition-all duration-300 outline-none focus:border-primary-green-dark focus:shadow-lg"
                  value={filters.priceRange.toString()}
                  onChange={handlePriceChange}
                >
                  {priceOptions.map((opt) => (
                    <option key={opt.label} value={opt.value.toString()}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Rating Filter */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Minimum Rating</label>
                <select
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/90 text-gray-800 transition-all duration-300 outline-none focus:border-primary-green-dark focus:shadow-lg"
                  value={filters.minRating}
                  onChange={handleRatingChange}
                >
                  {ratingOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              {isFilterApplied && (
                <button 
                  className="w-full px-6 py-3 text-base bg-red-100 text-red-600 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 shadow-md hover:bg-red-200 hover:shadow-lg flex items-center justify-center gap-2"
                  onClick={handleClearFilters}
                >
                  <X className="w-5 h-5" />
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        )}

        {/* Desktop Search and Filter Bar */}
        <div className="hidden lg:block bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative flex-1 w-full lg:w-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3 text-lg border-2 border-gray-200 rounded-xl bg-white/90 transition-all duration-300 outline-none focus:border-primary-green-dark focus:shadow-lg focus:shadow-primary-green-dark/20"
                placeholder="Search products..."
                value={searchInput}
                onChange={handleSearchInputChange}
                onKeyDown={e => { if (e.key === 'Enter') handleSearchButtonClick(); }}
              />
            </div>

            {/* Search Button */}
            <button 
              className="px-8 py-3 text-lg bg-gradient-to-r from-primary-green-dark to-green-600 text-white border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
              onClick={handleSearchButtonClick}
            >
              <Search className="w-5 h-5" />
              Search
            </button>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-white shadow-md text-primary-green-dark' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-white shadow-md text-primary-green-dark' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setViewMode('list')}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Toggle */}
            <button
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                showFilters 
                  ? 'bg-primary-green-dark text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </button>

            {/* Clear Filters */}
            {isFilterApplied && (
              <button 
                className="px-6 py-3 text-lg bg-red-100 text-red-600 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 shadow-md hover:bg-red-200 hover:shadow-lg flex items-center gap-2"
                onClick={handleClearFilters}
              >
                <X className="w-5 h-5" />
                Clear
              </button>
            )}
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Category Filter */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                  <select
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/90 text-gray-800 transition-all duration-300 outline-none focus:border-primary-green-dark focus:shadow-lg"
                    value={filters.category}
                    onChange={handleCategoryChange}
                  >
                    {categoryOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                {/* Price Filter */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
                  <select
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/90 text-gray-800 transition-all duration-300 outline-none focus:border-primary-green-dark focus:shadow-lg"
                    value={filters.priceRange.toString()}
                    onChange={handlePriceChange}
                  >
                    {priceOptions.map((opt) => (
                      <option key={opt.label} value={opt.value.toString()}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                {/* Rating Filter */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Minimum Rating</label>
                  <select
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white/90 text-gray-800 transition-all duration-300 outline-none focus:border-primary-green-dark focus:shadow-lg"
                    value={filters.minRating}
                    onChange={handleRatingChange}
                  >
                    {ratingOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile View Mode Toggle */}
        <div className="lg:hidden mb-4 flex justify-center">
          <div className="flex bg-gray-100 rounded-xl p-1">
            <button
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'grid' 
                  ? 'bg-white shadow-md text-primary-green-dark' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'list' 
                  ? 'bg-white shadow-md text-primary-green-dark' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setViewMode('list')}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary-green-dark" />
            <span className="text-sm sm:text-base text-gray-600">
              Showing <span className="font-semibold text-gray-800">{filteredProducts.length}</span> of <span className="font-semibold text-gray-800">{products.length}</span> products
            </span>
          </div>
          {isFilterApplied && (
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Filters applied</span>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="flex gap-8">
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} viewMode={viewMode} />
          ) : (
            <div className="w-full flex items-center justify-center py-8 sm:py-16">
              <div className="text-center max-w-md px-4">
                <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <Package className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  {isFilterApplied 
                    ? "Try adjusting your filters or search terms to find what you're looking for."
                    : "We're currently updating our product catalog. Please check back soon!"
                  }
                </p>
                {isFilterApplied && (
                  <button
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-primary-green-dark text-white rounded-xl font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center gap-2 mx-auto text-sm sm:text-base"
                    onClick={handleClearFilters}
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
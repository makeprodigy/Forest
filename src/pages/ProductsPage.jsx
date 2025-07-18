import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const headerVariants = {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 }
  };

  const filterPanelVariants = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 }
  };

  const mobileFilterVariants = {
    initial: { opacity: 0, y: -20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 }
  };

  const loadingVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

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
      <motion.div 
        className="min-h-screen flex items-center justify-center"
        variants={loadingVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="flex flex-col items-center space-y-4">
          <motion.div 
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-green-dark"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Loading products...
          </motion.p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div 
            className="flex items-center justify-center mb-3 sm:mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <motion.div
              className="shopping-bag-container"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.7,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.2,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-primary-green-dark mr-2 sm:mr-3 shopping-bag-icon" />
            </motion.div>
            <motion.h1 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-green-dark to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.9,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              Discover Products
            </motion.h1>
          </motion.div>
          <motion.p 
            className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.1,
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
          >
            Explore our curated collection of premium products with advanced filtering and search capabilities
          </motion.p>
        </motion.div>

        {/* Mobile Filter Toggle Button */}
        <motion.div 
          className="lg:hidden mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.button
            className="w-full bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-4 flex items-center justify-between"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="w-5 h-5 text-primary-green-dark" />
              <span className="font-semibold text-gray-700">Filters & Search</span>
              {isFilterApplied && (
                <motion.div 
                  className="w-2 h-2 bg-red-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </div>
            <motion.div
              animate={{ rotate: isMobileFilterOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileFilterOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Mobile Filter Panel */}
        <AnimatePresence>
          {isMobileFilterOpen && (
            <motion.div 
              className="lg:hidden mb-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-4"
              variants={mobileFilterVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Search Input */}
              <motion.div 
                className="relative mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  className="w-full pl-12 pr-4 py-3 text-base border-2 border-gray-200 rounded-xl bg-white/90 transition-all duration-300 outline-none focus:border-primary-green-dark focus:shadow-lg focus:shadow-primary-green-dark/20"
                  placeholder="Search products..."
                  value={searchInput}
                  onChange={handleSearchInputChange}
                  onKeyDown={e => { if (e.key === 'Enter') handleSearchButtonClick(); }}
                />
              </motion.div>

              {/* Search Button */}
              <motion.button 
                className="w-full mb-4 px-6 py-3 text-base bg-gradient-to-r from-primary-green-dark to-green-600 text-white border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                onClick={handleSearchButtonClick}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Search className="w-5 h-5" />
                Search
              </motion.button>

              {/* Filter Options */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* Category Filter */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
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
                </motion.div>

                {/* Price Filter */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
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
                </motion.div>

                {/* Rating Filter */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
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
                </motion.div>

                {/* Clear Filters */}
                {isFilterApplied && (
                  <motion.button 
                    className="w-full px-6 py-3 text-base bg-red-100 text-red-600 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 shadow-md hover:bg-red-200 hover:shadow-lg flex items-center justify-center gap-2"
                    onClick={handleClearFilters}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <X className="w-5 h-5" />
                    Clear All Filters
                  </motion.button>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Search and Filter Bar */}
        <motion.div 
          className="hidden lg:block bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Input */}
            <motion.div 
              className="relative flex-1 w-full lg:w-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3 text-lg border-2 border-gray-200 rounded-xl bg-white/90 transition-all duration-300 outline-none focus:border-primary-green-dark focus:shadow-lg focus:shadow-primary-green-dark/20"
                placeholder="Search products..."
                value={searchInput}
                onChange={handleSearchInputChange}
                onKeyDown={e => { if (e.key === 'Enter') handleSearchButtonClick(); }}
              />
            </motion.div>

            {/* Search Button */}
            <motion.button 
              className="px-8 py-3 text-lg bg-gradient-to-r from-primary-green-dark to-green-600 text-white border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
              onClick={handleSearchButtonClick}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
              Search
            </motion.button>

            {/* View Mode Toggle */}
            <motion.div 
              className="flex bg-gray-100 rounded-xl p-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 }}
            >
              <motion.button
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-white shadow-md text-primary-green-dark' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setViewMode('grid')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Grid3X3 className="w-5 h-5" />
              </motion.button>
              <motion.button
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-white shadow-md text-primary-green-dark' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setViewMode('list')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <List className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Filter Toggle */}
            <motion.button
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                showFilters 
                  ? 'bg-primary-green-dark text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setShowFilters(!showFilters)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </motion.button>

            {/* Clear Filters */}
            {isFilterApplied && (
              <motion.button 
                className="px-6 py-3 text-lg bg-red-100 text-red-600 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 shadow-md hover:bg-red-200 hover:shadow-lg flex items-center gap-2"
                onClick={handleClearFilters}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5" />
                Clear
              </motion.button>
            )}
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div 
                className="mt-6 pt-6 border-t border-gray-200"
                variants={filterPanelVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {/* Category Filter */}
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
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
                  </motion.div>

                  {/* Price Filter */}
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
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
                  </motion.div>

                  {/* Rating Filter */}
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
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
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Mobile View Mode Toggle */}
        <motion.div 
          className="lg:hidden mb-4 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="flex bg-gray-100 rounded-xl p-1">
            <motion.button
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'grid' 
                  ? 'bg-white shadow-md text-primary-green-dark' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setViewMode('grid')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Grid3X3 className="w-5 h-5" />
            </motion.button>
            <motion.button
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'list' 
                  ? 'bg-white shadow-md text-primary-green-dark' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setViewMode('list')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <List className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Results Summary */}
        <motion.div 
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary-green-dark" />
            </motion.div>
            <span className="text-sm sm:text-base text-gray-600">
              Showing <span className="font-semibold text-gray-800">{filteredProducts.length}</span> of <span className="font-semibold text-gray-800">{products.length}</span> products
            </span>
          </div>
          {isFilterApplied && (
            <motion.div 
              className="flex items-center gap-2 text-xs sm:text-sm text-gray-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Filters applied</span>
            </motion.div>
          )}
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="flex gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} viewMode={viewMode} />
          ) : (
            <motion.div 
              className="w-full flex items-center justify-center py-8 sm:py-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center max-w-md px-4">
                <motion.div 
                  className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-gray-100 rounded-full flex items-center justify-center"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Package className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
                </motion.div>
                <motion.h3 
                  className="text-lg sm:text-xl font-semibold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  No products found
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {isFilterApplied 
                    ? "Try adjusting your filters or search terms to find what you're looking for."
                    : "We're currently updating our product catalog. Please check back soon!"
                  }
                </motion.p>
                {isFilterApplied && (
                  <motion.button
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-primary-green-dark text-white rounded-xl font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center gap-2 mx-auto text-sm sm:text-base"
                    onClick={handleClearFilters}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    Clear All Filters
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
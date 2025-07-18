import React, { useState } from 'react';

// SVG Icons
const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

const EditIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const TrashIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const PackageIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const FilterIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ProductManagementPanel = ({ onAddProduct }) => {
  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: 'Wireless Bluetooth Headphones', 
      price: 1500, 
      category: 'Electronics', 
      stock: 25,
      status: 'active',
      image: '🎧',
      rating: 4.8,
      sales: 45
    },
    { 
      id: 2, 
      name: 'Smartphone Protective Case', 
      price: 800, 
      category: 'Accessories', 
      stock: 50,
      status: 'active',
      image: '📱',
      rating: 4.6,
      sales: 38
    },
    { 
      id: 3, 
      name: 'Portable Bluetooth Speaker', 
      price: 2000, 
      category: 'Electronics', 
      stock: 0,
      status: 'out-of-stock',
      image: '🔊',
      rating: 4.9,
      sales: 32
    },
    { 
      id: 4, 
      name: 'Fast Charging USB Cable', 
      price: 1200, 
      category: 'Electronics', 
      stock: 15,
      status: 'active',
      image: '🔌',
      rating: 4.7,
      sales: 28
    },
    { 
      id: 5, 
      name: 'Wireless Mouse', 
      price: 1800, 
      category: 'Electronics', 
      stock: 8,
      status: 'low-stock',
      image: '🖱️',
      rating: 4.5,
      sales: 22
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'cards'

  const handleEdit = (id) => {
    console.log(`Edit product with ID: ${id}`);
    // Add logic to edit the product
  };

  const handleDelete = (id) => {
    console.log(`Delete product with ID: ${id}`);
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(products.map(p => p.category))];

  const getStatusBadge = (status) => {
    const statusConfig = {
      'active': { color: 'success', text: 'Active' },
      'out-of-stock': { color: 'error', text: 'Out of Stock' },
      'low-stock': { color: 'warning', text: 'Low Stock' }
    };
    
    const config = statusConfig[status];
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${config.color}-100 text-${config.color}-700`}>
        {config.text}
      </span>
    );
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-xl p-4 shadow-soft border border-neutral-100 hover:shadow-medium transition-all duration-200 hover:scale-[1.02]">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
            {product.image}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-neutral-800 text-sm truncate">{product.name}</h3>
            <p className="text-xs text-neutral-600">ID: #{product.id}</p>
          </div>
        </div>
        <div className="flex space-x-1 flex-shrink-0">
          <button 
            className="p-1.5 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
            onClick={() => handleEdit(product.id)}
            title="Edit product"
          >
            <EditIcon />
          </button>
          <button 
            className="p-1.5 text-error-600 hover:bg-error-50 rounded-lg transition-colors duration-200"
            onClick={() => handleDelete(product.id)}
            title="Delete product"
          >
            <TrashIcon />
          </button>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-neutral-600 text-sm">Category:</span>
          <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
            {product.category}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-neutral-600 text-sm">Price:</span>
          <span className="font-semibold text-success-600 text-sm">₹{product.price}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-neutral-600 text-sm">Stock:</span>
          <span className={`font-medium text-sm ${
            product.stock > 10 ? 'text-success-600' : 
            product.stock > 0 ? 'text-warning-600' : 'text-error-600'
          }`}>
            {product.stock} units
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-neutral-600 text-sm">Status:</span>
          {getStatusBadge(product.status)}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-neutral-600 text-sm">Rating:</span>
          <div className="flex items-center space-x-1">
            <StarIcon className="text-warning-500 w-3 h-3" />
            <span className="font-medium text-neutral-800 text-sm">{product.rating}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-neutral-600 text-sm">Sales:</span>
          <span className="font-medium text-neutral-800 text-sm">{product.sales}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 lg:p-8">
      {/* Header with Search and Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div className="mb-4 lg:mb-0">
          <h2 className="text-xl lg:text-2xl font-bold text-neutral-800 mb-2">Product Management</h2>
          <p className="text-sm lg:text-base text-neutral-600">Manage your product listings and inventory</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-neutral-100 text-neutral-700 rounded-xl font-medium hover:bg-neutral-200 transition-colors duration-200 lg:hidden"
          >
            <FilterIcon />
            <span>Filters</span>
            <ChevronDownIcon className={`transform transition-transform duration-200 ${filtersOpen ? 'rotate-180' : ''}`} />
          </button>
          <button 
            onClick={onAddProduct}
            className="bg-primary-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <PlusIcon />
            <span className="hidden sm:inline">Add New Product</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-soft border border-neutral-100 mb-6">
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
              <SearchIcon />
            </span>
          </div>
          
          {/* Filters - Always visible on desktop, toggleable on mobile */}
          <div className={`${filtersOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">View Mode</label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setViewMode('table')}
                    className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                      viewMode === 'table'
                        ? 'bg-primary-50 text-primary-700 border border-primary-200'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    Table
                  </button>
                  <button
                    onClick={() => setViewMode('cards')}
                    className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                      viewMode === 'cards'
                        ? 'bg-primary-50 text-primary-700 border border-primary-200'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    Cards
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Display - Fully Responsive */}
      {viewMode === 'table' ? (
        /* Responsive Table Design */
        <div className="bg-white rounded-2xl shadow-soft border border-neutral-100">
          {/* Mobile (xs to sm): Compact card layout */}
          <div className="block sm:hidden">
            {filteredProducts.length > 0 ? (
              <div className="divide-y divide-neutral-200">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="p-3 hover:bg-neutral-50 transition-colors duration-200">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2 flex-1 min-w-0">
                        <div className="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                          {product.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-neutral-800 text-xs truncate">{product.name}</p>
                          <p className="text-xs text-neutral-600">ID: #{product.id}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 flex-shrink-0">
                        <button 
                          className="p-1 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                          onClick={() => handleEdit(product.id)}
                          title="Edit product"
                        >
                          <EditIcon />
                        </button>
                        <button 
                          className="p-1 text-error-600 hover:bg-error-50 rounded-lg transition-colors duration-200"
                          onClick={() => handleDelete(product.id)}
                          title="Delete product"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-600">Price:</span>
                        <span className="font-semibold text-success-600">₹{product.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-600">Stock:</span>
                        <span className={`font-medium ${
                          product.stock > 10 ? 'text-success-600' : 
                          product.stock > 0 ? 'text-warning-600' : 'text-error-600'
                        }`}>
                          {product.stock}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-600">Category:</span>
                        <span className="px-1 py-0.5 bg-primary-100 text-primary-700 rounded text-xs font-medium truncate">
                          {product.category}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-600">Rating:</span>
                        <div className="flex items-center space-x-1">
                          <StarIcon className="text-warning-500 w-2 h-2" />
                          <span className="font-medium text-neutral-800">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      {getStatusBadge(product.status)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center">
                <div className="text-neutral-500">
                  <div className="mb-3">
                    <PackageIcon className="w-8 h-8 mx-auto text-neutral-400" />
                  </div>
                  <p className="text-sm font-medium mb-1">No products found</p>
                  <p className="text-xs">Try adjusting your search or filters</p>
                </div>
              </div>
            )}
          </div>

          {/* Tablet (sm to lg): Enhanced card layout */}
          <div className="hidden sm:block lg:hidden">
            {filteredProducts.length > 0 ? (
              <div className="divide-y divide-neutral-200">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="p-4 hover:bg-neutral-50 transition-colors duration-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3 flex-1 min-w-0">
                        <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                          {product.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-neutral-800 text-sm truncate">{product.name}</p>
                          <p className="text-xs text-neutral-600">ID: #{product.id}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                              {product.category}
                            </span>
                            <span className="font-semibold text-success-600 text-sm">₹{product.price}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 flex-shrink-0">
                        <button 
                          className="p-1.5 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                          onClick={() => handleEdit(product.id)}
                          title="Edit product"
                        >
                          <EditIcon />
                        </button>
                        <button 
                          className="p-1.5 text-error-600 hover:bg-error-50 rounded-lg transition-colors duration-200"
                          onClick={() => handleDelete(product.id)}
                          title="Delete product"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div>
                        <span className="text-neutral-600">Stock:</span>
                        <span className={`font-medium ml-1 ${
                          product.stock > 10 ? 'text-success-600' : 
                          product.stock > 0 ? 'text-warning-600' : 'text-error-600'
                        }`}>
                          {product.stock}
                        </span>
                      </div>
                      <div>
                        <span className="text-neutral-600">Status:</span>
                        <div className="mt-1">{getStatusBadge(product.status)}</div>
                      </div>
                      <div>
                        <span className="text-neutral-600">Rating:</span>
                        <div className="flex items-center space-x-1 mt-1">
                          <StarIcon className="text-warning-500 w-3 h-3" />
                          <span className="font-medium text-neutral-800 text-xs">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="text-neutral-500">
                  <div className="mb-4">
                    <PackageIcon className="w-12 h-12 mx-auto text-neutral-400" />
                  </div>
                  <p className="text-lg font-medium mb-2">No products found</p>
                  <p className="text-sm">Try adjusting your search or filters</p>
                </div>
              </div>
            )}
          </div>

          {/* Desktop (lg to xl): Compact table */}
          <div className="hidden lg:block xl:hidden">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th className="px-3 py-3 text-left text-sm font-semibold text-neutral-700 w-1/3">Product</th>
                  <th className="px-3 py-3 text-left text-sm font-semibold text-neutral-700 w-1/6">Category</th>
                  <th className="px-3 py-3 text-left text-sm font-semibold text-neutral-700 w-1/6">Price</th>
                  <th className="px-3 py-3 text-left text-sm font-semibold text-neutral-700 w-1/6">Stock</th>
                  <th className="px-3 py-3 text-left text-sm font-semibold text-neutral-700 w-1/6">Status</th>
                  <th className="px-3 py-3 text-center text-sm font-semibold text-neutral-700 w-1/6">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-neutral-50 transition-colors duration-200">
                      <td className="px-3 py-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-7 h-7 bg-neutral-100 rounded-lg flex items-center justify-center text-xs flex-shrink-0">
                            {product.image}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-neutral-800 text-xs truncate">{product.name}</p>
                            <p className="text-xs text-neutral-600">ID: #{product.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3">
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-3 py-3">
                        <span className="font-semibold text-success-600 text-xs">₹{product.price}</span>
                      </td>
                      <td className="px-3 py-3">
                        <span className={`font-medium text-xs ${
                          product.stock > 10 ? 'text-success-600' : 
                          product.stock > 0 ? 'text-warning-600' : 'text-error-600'
                        }`}>
                          {product.stock}
                        </span>
                      </td>
                      <td className="px-3 py-3">
                        {getStatusBadge(product.status)}
                      </td>
                      <td className="px-3 py-3">
                        <div className="flex items-center justify-center space-x-1">
                          <button 
                            className="p-1 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                            onClick={() => handleEdit(product.id)}
                            title="Edit product"
                          >
                            <EditIcon />
                          </button>
                          <button 
                            className="p-1 text-error-600 hover:bg-error-50 rounded-lg transition-colors duration-200"
                            onClick={() => handleDelete(product.id)}
                            title="Delete product"
                          >
                            <TrashIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-3 py-8 text-center">
                      <div className="text-neutral-500">
                        <div className="mb-3">
                          <PackageIcon className="w-8 h-8 mx-auto text-neutral-400" />
                        </div>
                        <p className="text-sm font-medium mb-1">No products found</p>
                        <p className="text-xs">Try adjusting your search or filters</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Large Desktop (xl+): Full table with all columns */}
          <div className="hidden xl:block">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700 w-1/4">Product</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700 w-1/8">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700 w-1/8">Price</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700 w-1/8">Stock</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700 w-1/8">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700 w-1/8">Rating</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-700 w-1/8">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-neutral-50 transition-colors duration-200">
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                            {product.image}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-neutral-800 text-sm truncate">{product.name}</p>
                            <p className="text-xs text-neutral-600">ID: #{product.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="font-semibold text-success-600 text-sm">₹{product.price}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`font-medium text-sm ${
                          product.stock > 10 ? 'text-success-600' : 
                          product.stock > 0 ? 'text-warning-600' : 'text-error-600'
                        }`}>
                          {product.stock}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {getStatusBadge(product.status)}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-1">
                          <StarIcon className="text-warning-500 w-3 h-3" />
                          <span className="font-medium text-neutral-800 text-sm">{product.rating}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center space-x-1">
                          <button 
                            className="p-1.5 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                            onClick={() => handleEdit(product.id)}
                            title="Edit product"
                          >
                            <EditIcon />
                          </button>
                          <button 
                            className="p-1.5 text-error-600 hover:bg-error-50 rounded-lg transition-colors duration-200"
                            onClick={() => handleDelete(product.id)}
                            title="Delete product"
                          >
                            <TrashIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-4 py-12 text-center">
                      <div className="text-neutral-500">
                        <div className="mb-4">
                          <PackageIcon className="w-12 h-12 mx-auto text-neutral-400" />
                        </div>
                        <p className="text-lg font-medium mb-2">No products found</p>
                        <p className="text-sm">Try adjusting your search or filters</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Products Cards - Fully responsive grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-neutral-500">
                <div className="mb-4">
                  <PackageIcon className="w-12 h-12 mx-auto text-neutral-400" />
                </div>
                <p className="text-lg font-medium mb-2">No products found</p>
                <p className="text-sm">Try adjusting your search or filters</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-soft border border-neutral-100">
          <div className="text-sm text-neutral-600 mb-1">Total Products</div>
          <div className="text-xl lg:text-2xl font-bold text-neutral-800">{products.length}</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-soft border border-neutral-100">
          <div className="text-sm text-neutral-600 mb-1">Active Products</div>
          <div className="text-xl lg:text-2xl font-bold text-success-600">
            {products.filter(p => p.status === 'active').length}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-soft border border-neutral-100">
          <div className="text-sm text-neutral-600 mb-1">Out of Stock</div>
          <div className="text-xl lg:text-2xl font-bold text-error-600">
            {products.filter(p => p.status === 'out-of-stock').length}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-soft border border-neutral-100">
          <div className="text-sm text-neutral-600 mb-1">Total Value</div>
          <div className="text-xl lg:text-2xl font-bold text-primary-600">
            ₹{products.reduce((sum, p) => sum + (p.price * p.stock), 0).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagementPanel;
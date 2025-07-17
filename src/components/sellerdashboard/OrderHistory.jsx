import React, { useState } from 'react';

// SVG Icons
const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const EditIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const OrderIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const XCircleIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
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

const OrderHistory = () => {
  const [orders, setOrders] = useState([
    {
      id: 'ORD-001',
      customerName: 'John Doe',
      customerEmail: 'john.doe@email.com',
      products: [
        { name: 'Wireless Bluetooth Headphones', quantity: 2, price: 1500 }
      ],
      totalAmount: 3000,
      status: 'delivered',
      orderDate: '2024-01-15',
      deliveryDate: '2024-01-18',
      paymentStatus: 'paid',
      shippingAddress: '123 Main St, City, State 12345'
    },
    {
      id: 'ORD-002',
      customerName: 'Jane Smith',
      customerEmail: 'jane.smith@email.com',
      products: [
        { name: 'Smartphone Protective Case', quantity: 1, price: 800 },
        { name: 'Fast Charging USB Cable', quantity: 1, price: 1200 }
      ],
      totalAmount: 2000,
      status: 'pending',
      orderDate: '2024-01-16',
      deliveryDate: null,
      paymentStatus: 'pending',
      shippingAddress: '456 Oak Ave, City, State 12345'
    },
    {
      id: 'ORD-003',
      customerName: 'Alice Johnson',
      customerEmail: 'alice.johnson@email.com',
      products: [
        { name: 'Portable Bluetooth Speaker', quantity: 1, price: 2000 }
      ],
      totalAmount: 2000,
      status: 'shipped',
      orderDate: '2024-01-14',
      deliveryDate: null,
      paymentStatus: 'paid',
      shippingAddress: '789 Pine Rd, City, State 12345'
    },
    {
      id: 'ORD-004',
      customerName: 'Bob Wilson',
      customerEmail: 'bob.wilson@email.com',
      products: [
        { name: 'Wireless Mouse', quantity: 3, price: 1800 }
      ],
      totalAmount: 5400,
      status: 'delivered',
      orderDate: '2024-01-12',
      deliveryDate: '2024-01-15',
      paymentStatus: 'paid',
      shippingAddress: '321 Elm St, City, State 12345'
    }
  ]);

  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'cards'

  const getStatusBadge = (status) => {
    const statusConfig = {
      'delivered': { color: 'success', text: 'Delivered', icon: <CheckCircleIcon /> },
      'shipped': { color: 'secondary', text: 'Shipped', icon: <TruckIcon /> },
      'pending': { color: 'warning', text: 'Pending', icon: <ClockIcon /> },
      'cancelled': { color: 'error', text: 'Cancelled', icon: <XCircleIcon /> }
    };
    
    const config = statusConfig[status];
    return (
      <span className={`inline-flex items-center space-x-1 px-2 lg:px-3 py-1 rounded-full text-xs font-medium bg-${config.color}-100 text-${config.color}-700`}>
        {config.icon}
        <span>{config.text}</span>
      </span>
    );
  };

  const getPaymentStatusBadge = (status) => {
    const statusConfig = {
      'paid': { color: 'success', text: 'Paid' },
      'pending': { color: 'warning', text: 'Pending' },
      'failed': { color: 'error', text: 'Failed' }
    };
    
    const config = statusConfig[status];
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${config.color}-100 text-${config.color}-700`}>
        {config.text}
      </span>
    );
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const statuses = ['all', 'delivered', 'shipped', 'pending', 'cancelled'];

  const OrderCard = ({ order }) => (
    <div className="bg-white rounded-xl p-4 shadow-soft border border-neutral-100 hover:shadow-medium transition-shadow duration-200">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-neutral-800 text-sm">{order.id}</h3>
          <p className="text-xs text-neutral-600">{order.orderDate}</p>
        </div>
        <div className="flex space-x-1">
          <button 
            className="p-1.5 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
            title="View details"
          >
            <EyeIcon />
          </button>
          <button 
            className="p-1.5 text-secondary-600 hover:bg-secondary-50 rounded-lg transition-colors duration-200"
            title="Update status"
          >
            <EditIcon />
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">Customer:</span>
          <div className="text-right">
            <p className="font-medium text-neutral-800 text-xs">{order.customerName}</p>
            <p className="text-xs text-neutral-600">{order.customerEmail}</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">Products:</span>
          <div className="text-right">
            {order.products.map((product, index) => (
              <div key={index} className="text-xs">
                <span className="font-medium text-neutral-800">{product.name}</span>
                <span className="text-neutral-600"> × {product.quantity}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">Total:</span>
          <span className="font-semibold text-success-600">₹{order.totalAmount}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">Status:</span>
          {getStatusBadge(order.status)}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">Payment:</span>
          {getPaymentStatusBadge(order.paymentStatus)}
        </div>
        {order.deliveryDate && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-600">Delivered:</span>
            <span className="text-xs text-neutral-800">{order.deliveryDate}</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="p-4 lg:p-8">
      {/* Header with Search and Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div className="mb-4 lg:mb-0">
          <h2 className="text-xl lg:text-2xl font-bold text-neutral-800 mb-2">Order Management</h2>
          <p className="text-sm lg:text-base text-neutral-600">Track and manage customer orders</p>
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
          <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-neutral-50 rounded-xl">
            <span className="text-sm text-neutral-600">Total Orders:</span>
            <span className="text-lg font-bold text-primary-600">{orders.length}</span>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-soft border border-neutral-100 mb-6">
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by customer name or order ID..."
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
                <label className="block text-sm font-medium text-neutral-700 mb-2">Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>
                      {status === 'all' ? 'All Statuses' : status.charAt(0).toUpperCase() + status.slice(1)}
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

      {/* Orders Display */}
      {viewMode === 'table' ? (
        /* Orders Table */
        <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th className="px-4 lg:px-6 py-4 text-left text-sm font-semibold text-neutral-700">Order Details</th>
                  <th className="px-4 lg:px-6 py-4 text-left text-sm font-semibold text-neutral-700 hidden md:table-cell">Customer</th>
                  <th className="px-4 lg:px-6 py-4 text-left text-sm font-semibold text-neutral-700 hidden lg:table-cell">Products</th>
                  <th className="px-4 lg:px-6 py-4 text-left text-sm font-semibold text-neutral-700">Total</th>
                  <th className="px-4 lg:px-6 py-4 text-left text-sm font-semibold text-neutral-700">Status</th>
                  <th className="px-4 lg:px-6 py-4 text-left text-sm font-semibold text-neutral-700 hidden xl:table-cell">Payment</th>
                  <th className="px-4 lg:px-6 py-4 text-left text-sm font-semibold text-neutral-700 hidden lg:table-cell">Date</th>
                  <th className="px-4 lg:px-6 py-4 text-center text-sm font-semibold text-neutral-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-neutral-50 transition-colors duration-200">
                      <td className="px-4 lg:px-6 py-4">
                        <div>
                          <p className="font-semibold text-neutral-800 text-sm lg:text-base">{order.id}</p>
                          <p className="text-xs text-neutral-600">{order.orderDate}</p>
                        </div>
                      </td>
                      <td className="px-4 lg:px-6 py-4 hidden md:table-cell">
                        <div>
                          <p className="font-medium text-neutral-800 text-sm lg:text-base">{order.customerName}</p>
                          <p className="text-xs text-neutral-600">{order.customerEmail}</p>
                        </div>
                      </td>
                      <td className="px-4 lg:px-6 py-4 hidden lg:table-cell">
                        <div className="space-y-1">
                          {order.products.map((product, index) => (
                            <div key={index} className="text-xs lg:text-sm">
                              <span className="font-medium text-neutral-800">{product.name}</span>
                              <span className="text-neutral-600"> × {product.quantity}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 lg:px-6 py-4">
                        <span className="font-semibold text-success-600 text-sm lg:text-base">₹{order.totalAmount}</span>
                      </td>
                      <td className="px-4 lg:px-6 py-4">
                        {getStatusBadge(order.status)}
                      </td>
                      <td className="px-4 lg:px-6 py-4 hidden xl:table-cell">
                        {getPaymentStatusBadge(order.paymentStatus)}
                      </td>
                      <td className="px-4 lg:px-6 py-4 hidden lg:table-cell">
                        <div className="text-xs lg:text-sm">
                          <p className="text-neutral-800">Ordered: {order.orderDate}</p>
                          {order.deliveryDate && (
                            <p className="text-neutral-600">Delivered: {order.deliveryDate}</p>
                          )}
                        </div>
                      </td>
                      <td className="px-4 lg:px-6 py-4">
                        <div className="flex items-center justify-center space-x-1 lg:space-x-2">
                          <button 
                            className="p-1.5 lg:p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                            title="View details"
                          >
                            <EyeIcon />
                          </button>
                          <button 
                            className="p-1.5 lg:p-2 text-secondary-600 hover:bg-secondary-50 rounded-lg transition-colors duration-200"
                            title="Update status"
                          >
                            <EditIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="px-4 lg:px-6 py-12 text-center">
                      <div className="text-neutral-500">
                        <div className="mb-4">
                          <OrderIcon className="w-12 h-12 mx-auto text-neutral-400" />
                        </div>
                        <p className="text-lg font-medium mb-2">No orders found</p>
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
        /* Orders Cards */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-neutral-500">
                <div className="mb-4">
                  <OrderIcon className="w-12 h-12 mx-auto text-neutral-400" />
                </div>
                <p className="text-lg font-medium mb-2">No orders found</p>
                <p className="text-sm">Try adjusting your search or filters</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-soft border border-neutral-100">
          <div className="text-sm text-neutral-600 mb-1">Total Orders</div>
          <div className="text-xl lg:text-2xl font-bold text-neutral-800">{orders.length}</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-soft border border-neutral-100">
          <div className="text-sm text-neutral-600 mb-1">Delivered</div>
          <div className="text-xl lg:text-2xl font-bold text-success-600">
            {orders.filter(o => o.status === 'delivered').length}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-soft border border-neutral-100">
          <div className="text-sm text-neutral-600 mb-1">Pending</div>
          <div className="text-xl lg:text-2xl font-bold text-warning-600">
            {orders.filter(o => o.status === 'pending').length}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-soft border border-neutral-100">
          <div className="text-sm text-neutral-600 mb-1">Total Revenue</div>
          <div className="text-xl lg:text-2xl font-bold text-primary-600">
            ₹{orders.reduce((sum, o) => sum + o.totalAmount, 0).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
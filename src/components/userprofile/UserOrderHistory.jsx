import React, { useState } from 'react';
import { Package, Calendar, DollarSign, Truck, CheckCircle, Clock, Search, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const UserOrderHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock order history with more details
  const orders = [
    { 
      id: 1, 
      date: '2024-06-01', 
      total: 120.5, 
      status: 'delivered',
      items: 3,
      tracking: 'TRK123456789'
    },
    { 
      id: 2, 
      date: '2024-06-10', 
      total: 45.0, 
      status: 'shipped',
      items: 1,
      tracking: 'TRK987654321'
    },
    { 
      id: 3, 
      date: '2024-05-25', 
      total: 89.99, 
      status: 'processing',
      items: 2,
      tracking: 'TRK456789123'
    },
    { 
      id: 4, 
      date: '2024-05-15', 
      total: 156.75, 
      status: 'delivered',
      items: 4,
      tracking: 'TRK789123456'
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'shipped':
        return <Truck className="w-5 h-5 text-blue-600" />;
      case 'processing':
        return <Clock className="w-5 h-5 text-amber-600" />;
      default:
        return <Package className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'shipped':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'processing':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toString().includes(searchTerm) || 
                         order.tracking.includes(searchTerm);
    const matchesFilter = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const orderCardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div 
        className="text-center mb-8"
        variants={itemVariants}
      >
        <motion.h2 
          className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Package className="w-8 h-8 text-emerald-600" />
          Order History
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Track your past and current orders
        </motion.p>
      </motion.div>

      {/* Search and Filter */}
      <motion.div 
        className="flex flex-col md:flex-row gap-4 mb-8"
        variants={itemVariants}
      >
        <motion.div 
          className="relative flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by order ID or tracking number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
          />
        </motion.div>
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white appearance-none cursor-pointer"
          >
            <option value="all">All Orders</option>
            <option value="delivered">Delivered</option>
            <option value="shipped">Shipped</option>
            <option value="processing">Processing</option>
          </select>
        </motion.div>
      </motion.div>

      {/* Orders List */}
      <AnimatePresence mode="wait">
        {filteredOrders.length === 0 ? (
          <motion.div 
            className="text-center py-12"
            key="no-orders"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No orders found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        ) : (
          <motion.div 
            className="space-y-6"
            key="orders-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredOrders.map((order, index) => (
              <motion.div 
                key={order.id} 
                className="bg-gradient-to-r from-gray-50 to-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                variants={orderCardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Order Info */}
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Package className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Order #{order.id}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(order.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Package className="w-4 h-4" />
                          {order.items} item{order.items > 1 ? 's' : ''}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status and Actions */}
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(order.status)}
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-800 flex items-center gap-1">
                        <DollarSign className="w-5 h-5 text-emerald-600" />
                        {order.total.toFixed(2)}
                      </div>
                      <p className="text-sm text-gray-500">Tracking: {order.tracking}</p>
                    </div>
                  </div>
                </div>

                {/* Order Actions */}
                <motion.div 
                  className="flex gap-3 mt-4 pt-4 border-t border-gray-100"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {[
                    { text: 'View Details', bg: 'emerald', hover: 'emerald' },
                    { text: 'Track Order', bg: 'blue', hover: 'blue' },
                    { text: 'Download Invoice', bg: 'gray', hover: 'gray' }
                  ].map((button, btnIndex) => (
                    <motion.button 
                      key={button.text}
                      className={`flex-1 bg-${button.bg}-50 text-${button.bg}-700 border border-${button.bg}-200 rounded-xl py-2 px-4 font-medium hover:bg-${button.hover}-100 transition-colors duration-200`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {button.text}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Summary Stats */}
      <motion.div 
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={itemVariants}
      >
        {[
          { 
            title: 'Total Orders', 
            value: orders.length, 
            icon: Package, 
            gradient: 'from-emerald-500 to-teal-600',
            iconColor: 'text-emerald-200'
          },
          { 
            title: 'Total Spent', 
            value: `$${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}`, 
            icon: DollarSign,
            gradient: 'from-blue-500 to-indigo-600',
            iconColor: 'text-blue-200'
          },
          { 
            title: 'Delivered', 
            value: orders.filter(order => order.status === 'delivered').length, 
            icon: CheckCircle,
            gradient: 'from-purple-500 to-pink-600',
            iconColor: 'text-purple-200'
          }
        ].map((stat, index) => (
          <motion.div 
            key={stat.title}
            className={`bg-gradient-to-r ${stat.gradient} rounded-2xl p-6 text-white`}
            variants={statVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-80">{stat.title}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default UserOrderHistory;
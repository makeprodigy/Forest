import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AddProductForm from '../components/sellerdashboard/AddProductForm';
import OrderHistory from '../components/sellerdashboard/OrderHistory';
import ProductManagementPanel from '../components/sellerdashboard/ProductManagementPanel';
import SellerProfile from '../components/sellerdashboard/SellerProfile';
import SellerStats from '../components/sellerdashboard/SellerStats';

// SVG Icons
const DashboardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ProductsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const OrdersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ProfileIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const AddIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

const StoreIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SellerDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <DashboardIcon /> },
    { id: 'products', label: 'Products', icon: <ProductsIcon /> },
    { id: 'orders', label: 'Orders', icon: <OrdersIcon /> },
    { id: 'profile', label: 'Profile', icon: <ProfileIcon /> },
    { id: 'add-product', label: 'Add Product', icon: <AddIcon /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <SellerStats />;
      case 'products':
        return <ProductManagementPanel onAddProduct={() => setActiveTab('add-product')} />;
      case 'orders':
        return <OrderHistory />;
      case 'profile':
        return <SellerProfile />;
      case 'add-product':
        return <AddProductForm onBackToProducts={() => setActiveTab('products')} />;
      default:
        return <SellerStats />;
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    // Close sidebar on mobile when tab is clicked
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: -100, opacity: 0 }
  };

  const contentVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const statsCardVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  };

  const tabVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <motion.header 
        className="bg-white/80 backdrop-blur-custom border-b border-white/20 shadow-soft sticky top-0 z-40"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <motion.button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {sidebarOpen ? <XIcon /> : <MenuIcon />}
              </motion.button>
              
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-glow-green"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                GK
              </motion.div>
              <div className="hidden sm:block">
                <motion.h1 
                  className="text-xl font-bold text-neutral-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Seller Dashboard
                </motion.h1>
                <motion.p 
                  className="text-sm text-neutral-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Manage your store and products
                </motion.p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-lg font-bold text-neutral-800">Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 text-sm text-neutral-600">
                <span>Welcome back,</span>
                <span className="font-semibold text-primary-600">My Store</span>
              </div>
              <motion.div 
                className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                GK
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
        <div className="flex gap-4 lg:gap-8">
          {/* Sidebar Navigation - Desktop */}
          <motion.aside 
            className="hidden lg:block lg:w-64 flex-shrink-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-custom rounded-2xl shadow-soft border border-white/20 p-6 sticky top-24"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <nav className="space-y-2">
                {tabs.map((tab, index) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-primary-50 text-primary-700 border border-primary-200 shadow-inner-soft'
                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span 
                      className="text-lg"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tab.icon}
                    </motion.span>
                    <span className="font-medium">{tab.label}</span>
                  </motion.button>
                ))}
              </nav>

              {/* Quick Stats */}
              <motion.div 
                className="mt-8 pt-6 border-t border-neutral-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h3 className="text-sm font-semibold text-neutral-700 mb-3">Quick Stats</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Total Sales', value: '₹50,000', color: 'text-success-600' },
                    { label: 'Products', value: '45', color: 'text-primary-600' },
                    { label: 'Orders', value: '300', color: 'text-secondary-600' }
                  ].map((stat, index) => (
                    <motion.div 
                      key={stat.label}
                      className="flex items-center justify-between text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-neutral-600">{stat.label}</span>
                      <span className={`font-semibold ${stat.color}`}>{stat.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.aside>

          {/* Mobile Sidebar Overlay */}
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div 
                className="fixed inset-0 z-50 lg:hidden"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={overlayVariants}
              >
                <motion.div 
                  className="fixed inset-0 bg-black bg-opacity-50" 
                  onClick={() => setSidebarOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <motion.div 
                  className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl z-50"
                  variants={sidebarVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="flex items-center justify-between p-4 border-b border-neutral-200">
                    <h2 className="text-lg font-semibold text-neutral-800">Menu</h2>
                    <motion.button
                      onClick={() => setSidebarOpen(false)}
                      className="p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <XIcon />
                    </motion.button>
                  </div>
                  <div className="p-4">
                    <nav className="space-y-2">
                      {tabs.map((tab, index) => (
                        <motion.button
                          key={tab.id}
                          onClick={() => handleTabClick(tab.id)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                            activeTab === tab.id
                              ? 'bg-primary-50 text-primary-700 border border-primary-200 shadow-inner-soft'
                              : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                          }`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.1 }}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="text-lg">{tab.icon}</span>
                          <span className="font-medium">{tab.label}</span>
                        </motion.button>
                      ))}
                    </nav>

                    {/* Quick Stats for Mobile */}
                    <motion.div 
                      className="mt-8 pt-6 border-t border-neutral-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="text-sm font-semibold text-neutral-700 mb-3">Quick Stats</h3>
                      <div className="space-y-3">
                        {[
                          { label: 'Total Sales', value: '₹50,000', color: 'text-success-600' },
                          { label: 'Products', value: '45', color: 'text-primary-600' },
                          { label: 'Orders', value: '300', color: 'text-secondary-600' }
                        ].map((stat, index) => (
                          <motion.div 
                            key={stat.label}
                            className="flex items-center justify-between text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                          >
                            <span className="text-neutral-600">{stat.label}</span>
                            <span className={`font-semibold ${stat.color}`}>{stat.value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Mobile Tab Navigation */}
            <motion.div 
              className="lg:hidden mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white/80 backdrop-blur-custom rounded-2xl shadow-soft border border-white/20 p-2">
                <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
                  {tabs.map((tab, index) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-primary-50 text-primary-700 border border-primary-200 shadow-inner-soft'
                          : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-base">{tab.icon}</span>
                      <span>{tab.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Hero Section for Overview */}
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div 
                  className="mb-6 lg:mb-8"
                  key="overview-hero"
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-600 rounded-2xl p-6 lg:p-8 text-white shadow-large"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                      <div className="flex-1 text-center lg:text-left">
                        <motion.h2 
                          className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          Welcome back, My Store!
                        </motion.h2>
                        <motion.p 
                          className="text-primary-100 text-base lg:text-lg mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          Here's what's happening with your store today
                        </motion.p>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                          {[
                            { value: '₹50,000', label: 'Total Revenue' },
                            { value: '45', label: 'Active Listings' },
                            { value: '300', label: 'Orders Completed' },
                            { value: '4.8', label: 'Store Rating' }
                          ].map((stat, index) => (
                            <motion.div 
                              key={stat.label}
                              className="bg-white/20 backdrop-blur-sm rounded-xl p-3 lg:p-4"
                              variants={statsCardVariants}
                              initial="initial"
                              animate="animate"
                              transition={{ delay: 0.3 + index * 0.1 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              <div className="text-xl lg:text-2xl font-bold">{stat.value}</div>
                              <div className="text-primary-100 text-xs lg:text-sm">{stat.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      <motion.div 
                        className="hidden lg:block mt-6 lg:mt-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ rotate: 5, scale: 1.05 }}
                      >
                        <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <StoreIcon />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Page Header */}
            <AnimatePresence mode="wait">
              <motion.div 
                className="mb-4 lg:mb-6"
                key={activeTab}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h1 
                  className="text-xl lg:text-2xl xl:text-3xl font-bold text-neutral-800 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {tabs.find(tab => tab.id === activeTab)?.label}
                </motion.h1>
                <motion.p 
                  className="text-sm lg:text-base text-neutral-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {activeTab === 'overview' && 'Monitor your store performance and key metrics'}
                  {activeTab === 'products' && 'Manage your product listings and inventory'}
                  {activeTab === 'orders' && 'Track and manage customer orders'}
                  {activeTab === 'profile' && 'Update your store information and settings'}
                  {activeTab === 'add-product' && 'Add new products to your store'}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Content Area */}
            <motion.div 
              className="bg-white/80 backdrop-blur-custom rounded-2xl shadow-soft border border-white/20 overflow-hidden"
              key={activeTab}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </main>
        </div>
      </div>
    </motion.div>
  );
};

export default SellerDashboardPage;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Package, 
  Store, 
  ShoppingCart, 
  User,
  TreePine,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Enhanced Lucide Icons with better styling
  const HomeIcon = ({ className = "w-5 h-5", isActive = false }) => (
    <div className={`relative ${className}`}>
      <Home className="w-full h-full" />
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-20 animate-pulse"></div>
      )}
    </div>
  );

  const ProductsIcon = ({ className = "w-5 h-5", isActive = false }) => (
    <div className={`relative ${className}`}>
      <Package className="w-full h-full" />
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
      )}
    </div>
  );

  const SellIcon = ({ className = "w-5 h-5", isActive = false }) => (
    <div className={`relative ${className}`}>
      <Store className="w-full h-full" />
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
      )}
    </div>
  );

  const CartIcon = ({ className = "w-5 h-5", isActive = false }) => (
    <div className={`relative ${className}`}>
      <ShoppingCart className="w-full h-full" />
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 animate-pulse"></div>
      )}
    </div>
  );

  const ProfileIcon = ({ className = "w-5 h-5", isActive = false }) => (
    <div className={`relative ${className}`}>
      <User className="w-full h-full" />
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full opacity-20 animate-pulse"></div>
      )}
    </div>
  );

  const TreeIcon = ({ className = "w-6 h-6" }) => (
    <div className={`relative ${className}`}>
      <TreePine className="w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-30 animate-ping"></div>
    </div>
  );

  const navItems = [
    { path: '/', label: 'Home', icon: HomeIcon, color: 'green' },
    { path: '/products', label: 'Products', icon: ProductsIcon, color: 'blue' },
    { path: '/seller-dashboard', label: 'Sell', icon: SellIcon, color: 'purple' },
    { path: '/cart-checkout', label: 'Cart', icon: CartIcon, color: 'orange' },
    { path: '/user-profile', label: 'Profile', icon: ProfileIcon, color: 'indigo' },
  ];

  const getColorClasses = (color, isActive, isHover = false) => {
    const colorMap = {
      green: {
        active: 'text-green-600 bg-green-50 border-green-200',
        hover: 'hover:text-green-600 hover:bg-green-50/50 hover:border-green-200',
        icon: 'text-green-600'
      },
      blue: {
        active: 'text-blue-600 bg-blue-50 border-blue-200',
        hover: 'hover:text-blue-600 hover:bg-blue-50/50 hover:border-blue-200',
        icon: 'text-blue-600'
      },
      purple: {
        active: 'text-purple-600 bg-purple-50 border-purple-200',
        hover: 'hover:text-purple-600 hover:bg-purple-50/50 hover:border-purple-200',
        icon: 'text-purple-600'
      },
      orange: {
        active: 'text-orange-600 bg-orange-50 border-orange-200',
        hover: 'hover:text-orange-600 hover:bg-orange-50/50 hover:border-orange-200',
        icon: 'text-orange-600'
      },
      indigo: {
        active: 'text-indigo-600 bg-indigo-50 border-indigo-200',
        hover: 'hover:text-indigo-600 hover:bg-indigo-50/50 hover:border-indigo-200',
        icon: 'text-indigo-600'
      }
    };
    
    return isActive ? colorMap[color].active : (isHover ? colorMap[color].hover : '');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 sm:space-x-3 group"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
                <TreeIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent tracking-tight group-hover:from-green-700 group-hover:to-green-900 transition-all duration-300">
                Forest
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2.5 rounded-xl font-medium transition-all duration-300 group border-2 ${
                    isActive 
                      ? getColorClasses(item.color, true) + ' shadow-md' 
                      : 'text-gray-600 border-transparent ' + getColorClasses(item.color, false, true)
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`transition-all duration-300 relative ${
                      isActive 
                        ? getColorClasses(item.color, true).split(' ')[0] + ' scale-110' 
                        : 'text-gray-500 group-hover:scale-110'
                    }`}>
                      <IconComponent className="w-5 h-5" isActive={isActive} />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  
                  {/* Enhanced hover effect */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 border border-gray-200"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Tablet Navigation - Compact version for medium screens */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative p-2 rounded-lg font-medium transition-all duration-300 group border-2 ${
                    isActive 
                      ? getColorClasses(item.color, true) + ' shadow-md' 
                      : 'text-gray-600 border-transparent ' + getColorClasses(item.color, false, true)
                  }`}
                  title={item.label}
                >
                  <div className="flex items-center justify-center">
                    <div className={`transition-all duration-300 relative ${
                      isActive 
                        ? getColorClasses(item.color, true).split(' ')[0] + ' scale-110' 
                        : 'text-gray-500 group-hover:scale-110'
                    }`}>
                      <IconComponent className="w-5 h-5" isActive={isActive} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200 relative overflow-hidden group"
              aria-label="Toggle mobile menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 relative z-10" />
              ) : (
                <Menu className="w-5 h-5 relative z-10" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-xl mt-2 shadow-lg border border-gray-100">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 border-2 ${
                      isActive
                        ? getColorClasses(item.color, true) + ' shadow-sm'
                        : 'text-gray-600 border-transparent hover:border-gray-200'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`transition-all duration-300 relative ${
                        isActive 
                          ? getColorClasses(item.color, true).split(' ')[0] + ' scale-110' 
                          : 'text-gray-500'
                      }`}>
                        <IconComponent className="w-5 h-5" isActive={isActive} />
                      </div>
                      <span>{item.label}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;